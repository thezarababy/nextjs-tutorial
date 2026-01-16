import { Suspense } from "react";
import Author from "./author";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const PostsSequential = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await response.json();
  const filteredPosts = posts.filter((post) => post.id % 10 === 1);
  return (
    <div>
      <div>
        {filteredPosts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Suspense>
              <p>
                <Author userId={post.userId} />
              </p>
            </Suspense>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsSequential;
