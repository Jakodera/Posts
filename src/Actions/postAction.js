import {FETCH_POSTS, NEW_POSTS} from './Types';

export const fetchPosts =() =>dispatch =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }))
}