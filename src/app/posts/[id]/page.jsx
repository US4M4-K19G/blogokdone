import posts from '../../../data/posts';

export async function generateStaticParams() {
  return posts.map(post => ({ id: post.id }));
}

export default function PostPage({ params }) {
  const post = posts.find(p => p.id === params.id);

  if (!post) return <div className="px-4 sm:px-6 lg:px-52 py-10">Post not found</div>;

  return (
    <div className="px-4 sm:px-6 lg:px-52 py-10">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">{post.title}</h1>
      <img src={post.image} className="w-full max-h-[500px] object-contain rounded mb-10" />
      <p className="text-base sm:text-lg text-gray-800">{post.content}</p>
    </div>
  );
}
