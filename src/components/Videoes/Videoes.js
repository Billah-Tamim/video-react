import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Video from '../Video/Video';
import './Videoes.css';

const Videoes = () => {
    const [content, setContent] = useState([]);
    useEffect(() => {
        fetch('defalt.json')
            .then(res => res.json())
            .then(data => setContent(data))
    }, []);
    const getData = text => {
        fetch(text)
            .then(res => res.json())
            .then(data => setContent(data))
    }
    return (
        <div>
            <div className="catagory-btn">
                <Button onClick={() => getData('news.json')} variant="primary">News</Button>
                <Button onClick={() => getData('sports.json')} variant="secondary">Sports</Button>
                <Button onClick={() => getData('war.json')} variant="info">War</Button>
            </div>
            <div className="videos-container">
                <div className="single-video">
                    <iframe width="440" height="250" src="https://www.youtube.com/embed/ahbES8MPKHQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                    <h4>new uploaded video</h4>
                </div>
                <div className="videoes">
                    {
                        content.map(item => <Video
                            key={item.id}
                            item={item}
                        ></Video>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Videoes;