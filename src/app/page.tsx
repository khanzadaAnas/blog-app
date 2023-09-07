import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Post from "./components/Post";
 import { TPost, posts } from "./data/posts";

export default async function Home() {
  const response = await fetch ("https://jsonplaceholder.typicode.com/posts");
  const posts: TPost[] = await response.json();

  return (
    <main>
      <Header />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
            
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
