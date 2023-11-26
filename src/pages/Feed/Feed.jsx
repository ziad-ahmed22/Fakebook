import AddPostBtn from "../../components/AddPostBtn/AddPostBtn";
import "./feed.scss";
import PostCard from "../../components/PostCard/PostCard";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store/slices/postsSlice";

export const Feed = () => {
  const dispatch = useDispatch();
  const postsArr = useSelector((state) => state.posts.posts);

  console.log(postsArr);
  const postsLimit = 2;
  const currentPage = 2;

  useEffect(() => {
    dispatch(getPosts({ limit: postsLimit, page: currentPage }));
  }, [dispatch]);

  return (
    <div className="feed">
      <div className="navbar">NavBar</div>

      <div className="feed-content">
        <div className="row gx-0">
          <div className="col-1 col-lg-3">col3</div>

          <div className="col-10 col-lg-6">
            <div className="px-md-4">
              <div className="mb-5">
                <AddPostBtn />
              </div>

              <div className="posts-wrapper">
                {postsArr?.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          </div>

          <div className="col-1 col-lg-3">col3</div>
        </div>
      </div>
    </div>
  );
};
