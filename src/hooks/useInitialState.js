import {useState, useEffect} from 'react';

const useInitialState = url => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        window
            .fetch(url)
            .then(response => response.json())
            .then(data => setVideos(data));
    }, []);
    return videos;
};

export default useInitialState;