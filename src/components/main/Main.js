import React from 'react'
import "./main.css";
import Card from '../cards/Card';
import albumData from "../../utils/data/albums.json";

function Main() {

   

    return (
        <div className="main">
        {albumData.map((album) => {
            return(
                <Card
                id={album.id}
                title={album.album}
                artist={album.artist}
                cover={album.cover}
                source={album.source}
                />
            )
        })}
        </div>
    )
}

export default Main
