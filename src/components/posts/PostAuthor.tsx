import { useSelector } from "react-redux";
import { users } from "../../redux/features/usersSlice";

const PostAuthor = (userId: any) => {
  const allUsers = useSelector(users);
  const selectedUser = allUsers.find(
    (user: any) => user?.id === userId?.userId
  );
  const authorName = selectedUser ? selectedUser.name : "------";

  return <span>by {authorName}</span>;
};

export default PostAuthor;
