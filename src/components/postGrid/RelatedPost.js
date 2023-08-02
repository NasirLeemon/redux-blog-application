import React, { useEffect } from "react";
import RelatedPostItem from "./RelatedPostItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedBlogs } from "../../features/relatedBlogs/relatedBlogsSlice";
import Loading from "../../ui/Loading";

function RelatedPost({ tags, id }) {
  const dispatch = useDispatch();

  console.log(tags, id);

  const { isLoading, isError, error, relatedBlogs } = useSelector(
    (state) => state.relatedBlogs
  );

  useEffect(() => {
    dispatch(fetchRelatedBlogs({ tags, id }));
  }, [dispatch, id, tags]);


  let content;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;
  if (!isLoading && !isError && relatedBlogs?.length === 0) {
    content = <div className="col-span-12">No Blogs Found</div>;
  }
  if (!isLoading && !isError && relatedBlogs?.length > 0) {
    content = relatedBlogs.map((relatedBlog) => (
      <RelatedPostItem key={relatedBlog.id} blog={relatedBlog} />
    ));
  }

  return (
    <aside>
      <h4 class="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      {content}
    </aside>
  );
}

export default RelatedPost;
