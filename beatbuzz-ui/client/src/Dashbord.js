import { useState, useEffect} from "react";
import useAuth from "./useAuth";
import TrackSearchResult from "./TrackSearchResult";
import {Container, Form} from "react-bootstrap"
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
    clientId: "a749ae54533d4373a5cd180d822cf1e6"
})

export default function Dashboard({code}) {
    const accessToken = useAuth(code);
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    

    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    useEffect(() => {
        if (!search) return
        if (!accessToken) return

        let cancel = false
        spotifyApi.searchTracks(search)
       .then(res => {
        if (cancel) return;
        setSearchResults(res.body.tracks.items.map(track => {
        const smallestAlbumImage = track.album.images.reduce((smallest, image) => {
            if (image.height < smallest.height) return image
            return smallest
        }, track.album.images[0])

        return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url
          }
        })
       )
     })

     return () => cancel = true
    }, [accessToken, search])

    return (
        <Container className="d-flex flex-column py-2" style={{height: "100vh" }}>
            <Form.Control
            type="search"
            placeholder="Search Songs/Artists"
            onChange={e => setSearch(e.target.value)}
            />
            <div className="flex-grow-1 my-2" style={{ overflowY:"auto"}}>
                {searchResults.map(track => (
                    <TrackSearchResult track={track} key={track.uri} />
                ))}
                </div>
            <div>Bottom</div>
        </Container>
    );
}