// src/components/BlogComponents.jsx

import {
  useFetchBlogsQuery,
  useDeleteBlogMutation,
  useUpdateBlogMutation,
  useAddBlogMutation,
} from "../service/blogApi";

const BlogComponents = () => {
  const { data: blogs = [], isLoading, error } = useFetchBlogsQuery();
  const [deleteBlog] = useDeleteBlogMutation();
  const [updateBlog] = useUpdateBlogMutation();
  const [addBlog] = useAddBlogMutation();

  const handleAddBlog = async () => {
    const newBlog = { title: "New Blog", content: "Blog content..." };
    await addBlog(newBlog);
  };

  const handleDeleteBlog = async (id) => {
    await deleteBlog(id);
  };

  const handleUpdateBlog = async (id) => {
    const updatedBlog = { title: "Updated Title", content: "Updated Content" };
    await updateBlog({ id, ...updatedBlog });
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Blogs</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            {blog.title} - {blog.content}
            <button onClick={() => handleDeleteBlog(blog.id)}>Delete</button>
            <button onClick={() => handleUpdateBlog(blog.id)}>Update</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddBlog}>Add Blog</button>
    </div>
  );
};

export default BlogComponents;
