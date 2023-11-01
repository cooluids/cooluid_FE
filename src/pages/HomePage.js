import axios from 'axios';
import React, { useState, useEffect } from "react";
import './HomePage.css';
import HomeBar from './HomeBar';

export const getPosts = () => {
    return axios.get('http://127.0.0.1:8000/posts/')
      .then(response => response.data);
  }

export function PostsGrid({ posts }) {
    return (
    <div className="posts-grid">
        {posts.map((post) => (
        <Post
            title={post.title}
            user_id={post.user_id}
            poster={post.posterUrl}
        />
        ))}
    </div>
    );
}

export function Post({ title, poster, content, likes, publishDate, authorName, rating }) {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div className={`post ${isHovered ? 'hovered' : ''}`}>
        <div className="thumbnail-container">
          <img src={poster} alt={title} className="thumbnail" />
        </div>
        <div className="post-info">
          <h2>{title}</h2>
          <p>{content}</p>
          <div className="additional-info">
            <p>조회수: {likes}</p>
            <p>게시 날짜: {publishDate}</p>
            <p>게시자: {authorName}</p>
            <p>등급: {rating}</p>
          </div>
        </div>
      </div>
    );
  }

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      getPosts()
        .then(data => {
          setPosts(data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);

    return (
        <>
        <HomeBar />
        <div className='BasicLay_main'>
            <main>
                <PostsGrid posts={posts} />
            </main>
        </div>
        </>
    );
  }

export default Home;