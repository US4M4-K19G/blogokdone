import posts from '../../../data/posts';

export async function generateStaticParams() {
  return posts.map(post => ({ id: post.id }));
}

export default function PostPage({ params }) {
  const post = posts.find(p => p.id === params.id);

  if (!post) return <div>Post not found</div>;

  return (
    <div className="px-52 py-10">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <img src={post.image} className="h-100 object-conain rounded mb-10" />
      <p className="text-lg text-gray-800">{post.content}</p>
    </div>
  );
}
