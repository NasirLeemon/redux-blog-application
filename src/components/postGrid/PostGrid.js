import React, { useEffect } from "react";
import SinglePost from "./SinglePost";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../features/blogs/blogsSlice";
import Loading from "../../ui/Loading";
import Error from "../../ui/Error";

function PostGrid() {
  const dispatch = useDispatch();
  const { blogs, isLoading, isError, error } = useSelector(
    (state) => state.blogs
  );
  const { status, sort } = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const filteredByStatus = (blog) => {
    if (status === "saved") {
      return blog?.isSaved;
    }
    return true;
  };

  const sortedBlogs = (a, b) => {
    if (sort === "newest") {
      return new Date(b?.createdAt) - new Date(a?.createdAt);
    }
    if (sort === "most_liked") {
      return b?.likes - a?.likes;
    }
    return 0;
  };

  let content;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError) content = <Error message={error} />;
  if (!isLoading && !isError && blogs?.length > -1) {
    content = blogs?.slice()
    ?.sort(sortedBlogs)
    ?.filter(filteredByStatus)
    .map((blog) => <SinglePost key={blog.id} blog={blog} />);
  }

  return (
    <main className="post-container" id="lws-postContainer">
      {content}
    </main>
  );
}

export default PostGrid;
