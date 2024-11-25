import Link from 'next/link';
import { Post } from '@/types';

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="border p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <p className="mb-2">{post.body.split(' ').slice(0, 20).join(' ')}...</p>
          <Link href={`/posts/${post.id}`} className="text-blue-500 hover:underline">
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
}

