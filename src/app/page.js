import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">
        Welcome to the Blog Page
      </h1>
      <ul className="space-y-4">
        {[1, 2, 3].map((id) => (
          <li key={id}>
            <Link 
              href={`/posts/${id}`} 
              className="text-blue-600 hover:underline text-xl">
              Go to Post {id}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
