import React from 'react';

import './Posts.scss';
import Post from './Post';
import PostModel from './utils/PostModel';
import NoPost from './utils/NoPost';



const Posts = ({ loading, posts, fetchPosts }) => {
    return (
        <div className='posts-container'>
            {   loading ?
                <>
                    <PostModel />
                    <PostModel />
                </>
                :
                posts.length < 1 ?
                <NoPost />
                :
                posts.toReversed().map(post => (
                    <Post 
                        key={ post.id } 
                        post={ post } 
                        fetchPosts={ fetchPosts }
                    />
                ))
            }
        </div>
    );
};

export default Posts;