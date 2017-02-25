import React from 'react';
import VideoItem from './video-item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video, index)=> {
        return (
            <VideoItem 
                key={video.etag} 
                video={video}
                onVideoSelect={props.onVideoSelect}
            />
        );
    });

    return (
        <ul className="col-md-4 list-group">
            { videoItems }
        </ul>
    );
}

export default VideoList;