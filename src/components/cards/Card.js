import React from 'react';
import './card.css'

function Card({source, title, artist, cover}) {
    return (
        <div className="card">
            <div className="card-container">
                <div className="album-cover">
                    {cover ? <img className="album-cover-image" id="cover" src={cover} alt="cover"/> : <img id="cover" src="images/undefined_album_cover.png" alt="cover"/>}
                    
                    {source === "LOCAL" ? <img className="album-cover-icon" alt="icon" src="images/qobuz.png" /> : ""}
                    
                </div>    
                
                <div className="album-data">
                    <p id="title" className="title">{title}</p>
                    <p it="artist" className="artist">{artist}</p>
                </div>
            </div>            
        </div>
    )
}

export default Card
