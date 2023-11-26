import "./PostCard.scss";
import me from "../../assets/images/me.jpg";
import portofolio from "../../assets/images/background1.jpg";
import ModeIcon from "@mui/icons-material/Mode";
import { useState } from "react";
import Modal from "../Modal/Modal";
import avatar from "../../assets/images/avatar.jpeg";
import PropTypes from "prop-types";

export default function PostCard({ post }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(post);

  return (
    <>
      <div className="post-card rad-8 mb-4 overflow-hidden shadow">
        <div className="post-header flex-between px-2 py-1">
          <div className="d-flex align-items-center">
            <img
              src={post.author.profile_image || avatar}
              alt="me"
              className="profile-img rounded-circle"
            />
            <h4 className="name mb-0 ms-2 fs-16 fw-bold">{post.author.name}</h4>
          </div>
          <span className="time fs-14">31 minutes ago</span>
        </div>

        <div className="post-body px-2">
          <div className="post-img my-2">
            {post.image && (
              <img
                src={portofolio}
                alt="me"
                className="post-img w-100 img-cover wh-100"
              />
            )}
          </div>
          <p className="post-text fs-16 my-3">
            lorem ibsum doloer nome msja ewkd lorem ibsum doloer nome msja ewkd
            lorem ibsum doloer nome msja ewkd lorem ibsum doloer nome msja ewkd
          </p>
        </div>

        <div
          className="post-footer p-2 pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <ModeIcon />
          <span className="fs-16 ms-2">5 Comments</span>
        </div>
      </div>

      <Modal
        setOpen={setIsModalOpen}
        open={isModalOpen}
        activateBackdrop
        title="Post Details And Comments"
        modalBody={<PostModal />}
      />
    </>
  );
}

PostCard.propTypes = {
  post: PropTypes.object,
};

const PostModal = () => {
  return (
    <div className="post-modal p-2">
      <div className="post-header flex-between">
        <div className="d-flex align-items-center mb-1">
          <img src={me} alt="me" className="profile-img rounded-circle" />
          <h4 className="name mb-0 ms-2 fs-16 fw-bold">Ziad Ahmed</h4>
        </div>
        <span className="time fs-14">31 minutes ago</span>
      </div>

      <div className="post-body px-2">
        <div className="post-img my-2">
          <img
            src={portofolio}
            alt="me"
            className="post-img w-100 img-cover wh-100"
          />
        </div>
        <p className="post-text fs-16 my-3">
          lorem ibsum doloer nome msja ewkd lorem ibsum doloer nome msja ewkd
          lorem ibsum doloer nome msja ewkd lorem ibsum doloer nome msja ewkd
        </p>
      </div>

      <div className="post-footer p-2">
        <ModeIcon />
        <span className="fs-16 ms-2 mb-3 d-inline-block">5 Comments</span>
        <PostComments />
        <AddCommentForm />
      </div>
    </div>
  );
};

const PostComments = () => {
  return (
    <div className="comments">
      <div className="comment d-flex py-2">
        <img src={me} alt="me" className="profile-img rounded-circle" />
        <div className="comment-body d-flex w-100 rad-8 p-2 flex-column ms-2">
          <span className="fs-14 fw-bold">Ziad Ahmed</span>
          <span className="fs-14">
            lets go to school lets go to schoollets go to school lets go to lets
            go to school school
          </span>
        </div>
      </div>

      <div className="comment d-flex py-2">
        <img src={me} alt="me" className="profile-img rounded-circle" />
        <div className="comment-body d-flex w-100 rad-8 p-2 flex-column ms-2">
          <span className="fs-14 fw-bold">Ziad Ahmed</span>
          <span className="fs-14">lets go to school</span>
        </div>
      </div>

      <div className="comment d-flex py-2">
        <img src={me} alt="me" className="profile-img rounded-circle" />
        <div className="comment-body d-flex w-100 rad-8 p-2 flex-column ms-2">
          <span className="fs-14 fw-bold">Ziad Ahmed</span>
          <span className="fs-14">lets go to school</span>
        </div>
      </div>
    </div>
  );
};

const AddCommentForm = () => {
  return (
    <form className="add-comment-form mt-3 mb-2">
      <div className="d-flex gap-2">
        <input
          className="rad-8 outline-none px-2 py-1 fs-16 w-100"
          name="addComment"
          type="text"
          placeholder="Write A New Comment"
        />
        <input
          className="rad-8 outline-none px-4 py-1 fs-16"
          value="Add"
          type="submit"
        />
      </div>
    </form>
  );
};
