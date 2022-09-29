import React, { useState } from 'react'
import Airtable from 'airtable'
import { useEffect } from 'react';
import BlogCard from '../../components/BlogCard';

const base = new Airtable({ apiKey: "keyIFFzaIXD9tzQwH" }).base('appeS7JqbqChh9tHv');

function Home() {

    const [posts , setPosts] = useState([])

    useEffect(() => {
        base("Table 1").select({ view: "Grid view"})
        .eachPage((records, fetchNextPage) => {
            setPosts(records);
            fetchNextPage();
        })
    }, [])

    return (
        <div>
        <h1>Writer Blog</h1>
        {posts.map(post => (
            <BlogCard 
            key={post.id}
            id={post.id}
            post={post}
            />
         ))}
         </div>
    );
}

export default Home