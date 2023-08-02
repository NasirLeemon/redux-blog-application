import React, { useEffect } from "react";
import HomeButton from "../components/homeButton/HomeButton";
import RelatedPost from "../components/postGrid/RelatedPost";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../ui/Loading";
import Error from "../ui/Error";
import { fetchBlog } from "../features/blog/blogSlice";

const Post = () => {
  const { blogId } = useParams();
  const dispatch = useDispatch();
  const { blog, isError, isLoading, error } = useSelector(
    (state) => state.blog
  );

  useEffect(() => {
    dispatch(fetchBlog(blogId));
  }, [dispatch, blogId]);

  const { title, tags, image, likes, isSaved, description } = blog || {};
  const tag = tags?.map((tag) => <span>#{tag},</span>);

  let content;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError) content = <Error message={error} />;
  if (!isError && !isLoading && !blog?.id)
    content = <div className="col-span-12">No Blog Found</div>;
  if (!isLoading && !isError && blog?.id) {
    content = (
      <main class="post">
        <img
          src={image}
          alt={title}
          class="w-full rounded-md"
          id="lws-megaThumb"
        />
        <div>
          <h1 class="mt-6 text-2xl post-title" id="lws-singleTitle">
            {title}
          </h1>
          <div class="tags" id="lws-singleTags">
            {tag}
          </div>
          <div class="btn-group">
            {/* <!-- handle like on button click --> */}
            <button class="like-btn" id="lws-singleLinks">
              <i class="fa-regular fa-thumbs-up"></i> {likes}
            </button>
            {/* <!-- handle save on button click --> */}
            {/* <!-- use ".active" class and "Saved" text  if a post is saved, other wise "Save" --> */}
            <button class="active save-btn" id="lws-singleSavedBtn">
              <i class="fa-regular fa-bookmark"></i>{" "}
              <span className={isSaved ? "lws-badge" : ""}>
                {isSaved ? "Saved" : " "}
              </span>
            </button>
          </div>
          <div class="mt-6">
            <p>{description}</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <>
      <HomeButton />
      <section class="post-page-container">
        {/* <!-- detailed post  --> */}
        {content}

        <RelatedPost tags={tags} id={blogId} />
      </section>
    </>
  );
};

export default Post;
