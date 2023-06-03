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
  const [description, setDescription] = useState<string>("");

  const titleChangeHandler: InputChangeEventHandler = (e) => {
    setTitle(e.target.value);
  };

  const descriptionChangeHandler: TextareaChangeEventHandler = (e) => {
    setDescription(e.target.value);
  };

  const formSubmitHandler = (e: FormSubmitEventHandler) => {
    e.preventDefault();
    // dispatch({ title, description });
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        placeholder="Enter post title..."
        onChange={titleChangeHandler}
      />
      <label htmlFor="description">Title</label>
      <textarea
        id="description"
        placeholder="Enter post descriiption..."
        rows={5}
        cols={50}
        onChange={descriptionChangeHandler}
      />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddPostForm;
