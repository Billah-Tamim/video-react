import React from 'react';
import './Video.css';

const Video = ({item}) => {
    return (
        <div className='video'>
            <iframe width="410" height="230" src={item.link} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            <h4>{item.name}</h4>
        </div>
    );
};

export default Video;