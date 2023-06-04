import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "../../redux/features/postsSlice";
import {
  FormSubmitEventHandler,
  InputChangeEventHandler,
  SelectChangeEventHandler,
  TextareaChangeEventHandler,
} from "../../types";
import { users } from "../../redux/features/usersSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setcontent] = useState<string>("");
  const [user, setUser] = useState<string>("");
  const dispatch = useDispatch();
  const usesState = useSelector(users);

  const titleChangeHandler: InputChangeEventHandler = (e) => {
    setTitle(e.target.value);
  };

  const contentChangeHandler: TextareaChangeEventHandler = (e) => {
    setcontent(e.target.value);
  };

  const formSubmitHandler = (e: FormSubmitEventHandler) => {
    e.preventDefault();
    if (title && content) {
      dispatch(postAdded(title, content, user));
      setTitle("");
      setcontent("");
    }
  };

  const userOptions = usesState.map((user: any) => {
    return (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    );
  });

  const userSelectHandler: SelectChangeEventHandler = (e) => {
    setUser(e.target.value);
  };

  const isButtonActive = title && content;

  return (
    <form onSubmit={formSubmitHandler}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        value={title}
        placeholder="Enter post title..."
        onChange={titleChangeHandler}
      />
      <label>User</label>
      <select id="users" onChange={userSelectHandler}>
        <option value="">Select...</option>
        {userOptions}
      </select>
      <label htmlFor="content">Description</label>
      <textarea
        id="content"
        value={content}
        placeholder="Enter post description..."
        rows={5}
        cols={50}
        onChange={contentChangeHandler}
      />
      <button disabled={!isButtonActive} type="submit">
        Add Post
      </button>
    </form>
  );
};

export default AddPostForm;
