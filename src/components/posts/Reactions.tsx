import { useDispatch } from "react-redux";
import { reactionAdded } from "../../redux/features/postsSlice";

type ReactionsType = {
  thumbsUp: string;
  wow: string;
  heart: string;
  rocket: string;
  coffee: string;
};

const reactionEmoji: ReactionsType = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const Reactions = ({ post }: any) => {
  const dispatch = useDispatch();
  const reactions = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reactionName: name }))
        }
        key={name}
        className="reactionButton"
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });
  return <div>{reactions}</div>;
};

export default Reactions;
