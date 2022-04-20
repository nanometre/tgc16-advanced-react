import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

export default function PostPage() {

    const [currentPost, setCurrentPost] = useState({});
    const [currentPostID, setCurrentPostID] = useState(0)
    const params = useParams();
    useEffect(()=>{
        const fetchPost = async () => {
            let response = await axios.get('https://jsonplaceholder.typicode.com/todos/' + currentPostID)
            setCurrentPost(response.data)
        }
        fetchPost();

    }, [currentPostID])

   useEffect(()=>{
    setCurrentPostID(params.post_id);
   }, []) // emulate component did mount

    return <React.Fragment>
        <h1>
            Title: {currentPost.title}
        </h1>
        <h1>
            User: {currentPost.userId}
        </h1>
    </React.Fragment>
}