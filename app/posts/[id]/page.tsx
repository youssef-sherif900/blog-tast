import { getPost, getComments } from '../../../lib/api';
import Link from 'next/link';

export default async function PostPage({ params }: { params: { id: any } }) {
  let post;
  let comments;
  let error = null;

  const { id } = await params
  try {
    const postId =  parseInt(id);
    [post, comments] = await Promise.all([getPost(postId), getComments(postId)]);
  } catch (e) {
   console.error('Failed to load post. Please try again later. =',e) ;
   error='Failed to load post. Please try again later.'
  }

  if (error) {
    return <div className="container mx-auto p-4 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">
        ← Back to Homepage
      </Link>
      <h1 className="text-3xl font-bold mb-4">{post?.title}</h1>
      <p className="mb-8">{post?.body}</p>
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <div className="space-y-4">
        {comments?.map((comment) => (
          <div key={comment.id} className="border p-4 rounded">
            <h3 className="font-semibold">{comment.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{comment.email}</p>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

