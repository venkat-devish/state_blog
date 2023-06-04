import { useSelector } from "react-redux";
import { PostsStateType, posts } from "../../redux/features/postsSlice";
import PostAuthor from "./PostAuthor";
import PostTime from "./PostTime";
import Reactions from "./Reactions";

const PostsList = (): JSX.Element => {
  const PostsStateType = useSelector(posts);

  const orderedPosts: PostsStateType[] = PostsStateType.slice().sort(
    (a: any, b: any): Date => b.date.localeCompare(a.date)
  );

  const renderedPosts: JSX.Element[] = orderedPosts.map(
    (post: PostsStateType) => {
      const { id, content, title, user, date } = post;
      return (
        <article key={id}>
          <h3>{title}</h3>
          <p>{content.substring(0, 100)}</p>
          <p className="postCredit">
            <PostAuthor userId={user} />
            <PostTime timestamp={date} />
          </p>
          <Reactions post={post} />
        </article>
      );
    }
  );

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
