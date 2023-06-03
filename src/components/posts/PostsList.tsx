import { useSelector } from "react-redux";
import { PostsState, posts } from "../../redux/features/postsSlice";
import PostAuthor from "./PostAuthor";
import PostTime from "./PostTime";

const PostsList = () => {
  const postsState = useSelector(posts);

  const renderedPosts = postsState.map((post: PostsState) => {
    const { id, content, title, user, date } = post;
    console.log(date);
    return (
      <article key={id}>
        <h3>{title}</h3>
        <p>{content.substring(0, 100)}</p>
        <p className="postCredit">
          <PostAuthor userId={user} />
          <PostTime timestamp={date} />
        </p>
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
