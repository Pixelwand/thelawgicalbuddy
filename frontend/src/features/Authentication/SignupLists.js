import React from "react";
import { useSelector } from 'react-redux';
export const SignupLists = () => {
    const posts = useSelector(state => state.posts);

    const renderedPosts = posts.map(post => (
        <article>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </article>
    ))
    return(
        <div>
            {renderedPosts}
        </div>
    )
}