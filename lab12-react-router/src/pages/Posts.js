import React, { useEffect, useState} from 'react'
import axios from 'axios'

export default function Posts() {
    const [posts, setPosts] = useState([]);

    // useEffect has 2 arguments
    // arg 1: a call back function (aka 'effect')
    // arg 2: what will cause the arg 1 function to be called
    useEffect(()=>{

        // define the function to  use axios to get all the posts
        const fetchPosts = async () => {
            let response = await axios.get("https://jsonplaceholder.typicode.com/todos");
            setPosts(response.data);
        }
        fetchPosts();

    }, []); // emulate componenetDidMount (activate the effect on rendering the component)

    return <React.Fragment>
        <ul>
            { posts.map( p => <li>
                {p.title}
            </li>)}
        </ul>
    </React.Fragment>
}