import { useSelector } from "react-redux";
import { PostsState, posts } from "../../redux/features/postsSlice";

const PostsList = () => {
  const postsState = useSelector(posts);

  const renderedPosts = postsState.map((post: PostsState) => {
    const { id, content, title } = post;
    return (
      <article id={id}>
        <h3>{title}</h3>
        <p>{content.substring(0, 100)}</p>
      </article>
    );
  });

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
