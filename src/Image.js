import photo from './photo.jpg';
import React from 'react';

export default function Image() {
    var image = <img className="border-4 rounded-full border-black dark:border-white" src={photo} height="140" width="140"></img>;
    if (window.innerWidth < 1024) {
        image = "";
    }
    return (
        <div className="mr-8">
            {image}
        </div>
    );
}