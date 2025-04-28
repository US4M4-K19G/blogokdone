import { notFound } from 'next/navigation';

const posts = [
  { id: '1', title: 'First Post', content: 'Hello, this is Post 1' },
  { id: '2', title: 'Second Post', content: 'Welcome to Post 2' },
  { id: '3', title: 'Third Post', content: 'Here is Post 3' },
];

export async function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default function PostPage({ params }) {
  const post = posts.find((post) => post.id === params.id);

  if (!post) {
    notFound(); // show 404 page if not found
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg text-gray-700">{post.content}</p>
    </div>
  );
}
