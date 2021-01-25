import { withUrqlClient } from "next-urql";
import { NavBar } from "../components/NavBar";
import { usePostsQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";

const Index = () => {
  const [{ data }] = usePostsQuery();
  return (
    <>
      <NavBar />
      <div>Hello world</div>
      <br />
      {data &&
        data.posts.map((post) => (
          <>
            <div key={post.id}>
              Tittel: {post.title} post number: {post.id}
            </div>
            <p>Text: {post.text}</p>
          </>
        ))}
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
