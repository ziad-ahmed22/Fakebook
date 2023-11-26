import AddPostForm from "../AddPostForm/AddPostForm";
import Modal from "../Modal/Modal";
import { useState } from "react";
import "./AddPostBtn.scss";

export default function AddPostBtn() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="add-post-btn">
      <input
        type="text"
        readOnly
        className="pointer w-100 p-2 rad-8 outline-none text-center"
        placeholder="Add A New Post"
        onClick={() => setIsModalOpen(true)}
      />

      {/* Add Post Modal */}
      <Modal
        setOpen={setIsModalOpen}
        open={isModalOpen}
        title="Add A New Post"
        modalBody={<AddPostForm setIsModalOpen={setIsModalOpen} />}
      />
    </div>
  );
}
