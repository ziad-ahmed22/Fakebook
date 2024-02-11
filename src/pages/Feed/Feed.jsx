import AddPostBtn from "../../components/AddPostBtn/AddPostBtn";
import "./feed.scss";
import PostCard from "../../components/PostCard/PostCard";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store/slices/postsSlice";

export const Feed = () => {
  const dispatch = useDispatch();
  const postsArr = useSelector((state) => state.posts.posts);

  const postsLimit = 5;
  const lastPage = useSelector((state) => state.posts.currentPage);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getPosts({ limit: postsLimit, page: currentPage }));
  }, [dispatch, currentPage]);
  console.log(postsArr);

  // Infinite Scroll
  useEffect(() => {
    const handleInfiniteScroll = () => {
      // window.innerHeight + window.scrollY === document.body.offsetHeight
      const endOfPage =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      if (endOfPage && currentPage < lastPage) {
        setCurrentPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  return (
    <div className="feed">
      {/* For Test */}
      <button
        onClick={() => {
          localStorage.removeItem("user");
          window.location.reload();
        }}
      >
        Logout
      </button>

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
