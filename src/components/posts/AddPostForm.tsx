import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "../../redux/features/postsSlice";
import {
  FormSubmitEventHandler,
  InputChangeEventHandler,
  TextareaChangeEventHandler,
} from "../../types";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [content, setcontent] = useState<string>("");

  const titleChangeHandler: InputChangeEventHandler = (e) => {
    setTitle(e.target.value);
  };

  const contentChangeHandler: TextareaChangeEventHandler = (e) => {
    setcontent(e.target.value);
  };

  const formSubmitHandler = (e: FormSubmitEventHandler) => {
    e.preventDefault();
    if (title && content) {
      dispatch(postAdded(title, content));
      setTitle("");
      setcontent("");
    }
  };

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
      <label htmlFor="content">Title</label>
      <textarea
        id="content"
        value={content}
        placeholder="Enter post descriiption..."
        rows={5}
        cols={50}
        onChange={contentChangeHandler}
      />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddPostForm;
