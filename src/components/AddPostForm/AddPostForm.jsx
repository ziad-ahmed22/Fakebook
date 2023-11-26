import { useState } from "react";
import FileInput from "../FileInput/FileInput";
import Button from "../MainButton/Button";
import "./AddPostForm.scss";
import PropTypes from "prop-types";

export default function AddPostForm({ setIsModalOpen }) {
  const [postText, setPostText] = useState("");
  const [postImg, setPostImg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(postImg, postText);
    setIsModalOpen(false);
  };

  return (
    <form className="add-post-form p-3 pt-2" onSubmit={handleSubmit}>
      <textarea
        placeholder="Write What You Want To Post"
        className="w-100 my-2 rad-8 p-2"
        dir="auto"
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
      ></textarea>

      <FileInput
        label="Add Image"
        name="postImg"
        onChange={(val) => {
          setPostImg(val);
        }}
      />

      <Button
        type="submit"
        label="Add Post"
        btnClassName="py-1 rad-8 mt-3"
        labelClassName="fs-18"
        fullWidth
        // disabled={!dirty || !isValid}
      />
    </form>
  );
}

AddPostForm.propTypes = {
  setIsModalOpen: PropTypes.func,
};
