import Link from 'next/link';
import posts from '../data/posts';

export default function Home() {
  return (
    <main className="px-52 pt-5">
      <h1 className="text-2xl font-bold mb-6 ">My Latest Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-10">
        {posts.map((post) => (
          <div key={post.id} className="border rounded p-4">
            <img src={post.image} className="w-full h-48 object-cover rounded" />
            <h2 className="text-lg font-semibold mt-2">{post.title}</h2>
            <p className="text-gray-600">{post.summary}</p>
            <Link href={`/posts/${post.id}`} className="text-blue-600 mt-2 inline-block">Learn More</Link>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-20">
        {posts.map((post) => (
          <div key={post.id} className="border rounded p-4">
            <img src={post.image} className="w-full h-48 object-cover rounded" />
            <h2 className="text-lg font-semibold mt-2">{post.title}</h2>
            <p className="text-gray-600">{post.summary}</p>
            <Link href={`/posts/${post.id}`} className="text-blue-600 mt-2 inline-block">Learn More</Link>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-20">
        {posts.map((post) => (
          <div key={post.id} className="border rounded p-4">
            <img src={post.image} className="w-full h-48 object-cover rounded" />
            <h2 className="text-lg font-semibold mt-2">{post.title}</h2>
            <p className="text-gray-600">{post.summary}</p>
            <Link href={`/posts/${post.id}`} className="text-blue-600 mt-2 inline-block">Learn More</Link>
          </div>
        ))}
      </div>
    </main>
  );
}
