import React from 'react';

const VideoListItem = ({video}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    // console.log(video);
    
    return (
    <li className="list-grou-item">
        <div className="video-list media">
            <div className="media-left">
                <img className="media-object" />
            </div>

            <div className="media-body">
              <div className="media-heading"></div>
            </div>
         </div>
    </li>
  )
}

export default VideoListItem;