'use client'

import { useState, useEffect } from 'react';
import { getPosts } from '../lib/api';
import PostList from './components/PostList';
import SearchBar from './components/Searchbar';
import { Post } from '../types';

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts);
        setFilteredPosts(fetchedPosts);
      } catch (e) {
        setError('Failed to load posts. Please try again later.');
        console.error("error = ",e)
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const handleSearch = (query: string) => {
    console.log(query)
    const lowercaseQuery = query.toLowerCase();
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.body.toLowerCase().includes(lowercaseQuery)
    );
    setFilteredPosts(filtered);
  };

  if (isLoading) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Latest Posts</h1>
      <SearchBar onSearch={handleSearch} />
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <PostList posts={filteredPosts} />
      )}
    </div>
  );
}

