"use client";
import React, { useState, useEffect } from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { RiChat1Fill } from "react-icons/ri";
import { IoIosShareAlt } from "react-icons/io";
import { FaImage } from "react-icons/fa";
import { BsPinAngleFill, BsThreeDots } from "react-icons/bs";

const PostsDashboard = () => {
  const [posts, setPosts] = useState([]);
  const [pinnedPost, setPinnedPost] = useState(null);
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostImage, setNewPostImage] = useState(null);

  // Fetch posts from the backend
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts"); // Replace with your API endpoint
        const data = await response.json();
        setPosts(data.posts);
        setPinnedPost(data.pinnedPost);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  // Handle new post creation
  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (!newPostContent && !newPostImage) return;

    const formData = new FormData();
    formData.append("content", newPostContent);
    if (newPostImage) formData.append("image", newPostImage);

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const newPost = await response.json();
        setPosts((prev) => [newPost, ...prev]);
        setNewPostContent("");
        setNewPostImage(null);
      } else {
        console.error("Failed to create post.");
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  // Handle post deletion
  const handleDelete = async (postId) => {
    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setPosts((prev) => prev.filter((post) => post.id !== postId));
      } else {
        console.error("Failed to delete post.");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  // Handle pinning a post
  const handlePinPost = async (postId) => {
    try {
      const response = await fetch(`/api/posts/pin/${postId}`, {
        method: "POST",
      });

      if (response.ok) {
        const updatedPinnedPost = await response.json();
        setPinnedPost(updatedPinnedPost);
      } else {
        console.error("Failed to pin post.");
      }
    } catch (error) {
      console.error("Error pinning post:", error);
    }
  };

  return (
    <div className="w-full flex flex-col lg:flex-row gap-5">
      {/* Left Container: Posts List */}
      <div className="w-full lg:w-[60%]">
        {/* New Post Form */}
        <div className="w-full bg-gray-100 rounded-md shadow-md p-5 mb-5">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-full bg-cover bg-center bg-gray-300" />
            <form className="flex-1 flex flex-col gap-3" onSubmit={handlePostSubmit}>
              <textarea
                className="w-full h-[3rem] py-2 px-4 rounded-[1.5rem] bg-white border-gray-300 border-2 resize-none focus:outline-none"
                placeholder="Write something..."
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                draggable="false"
              />
              <div className="flex justify-between items-center">
                <label className="flex items-center gap-2 py-2 px-4 rounded-md bg-gray-300 text-black font-bold cursor-pointer">
                  <FaImage />
                  <span>Attach Image</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setNewPostImage(e.target.files[0])}
                    className="hidden"
                  />
                </label>
                {newPostContent && (
                  <button
                    type="submit"
                    className="py-2 px-4 rounded-md bg-blue-600 text-white font-bold hover:bg-blue-700">
                    Post
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Posts List */}
        {posts.map((post) => (
          <div key={post.id} className="w-full bg-gray-100 rounded-md shadow-md p-5 mb-5">
            <div className="flex justify-between items-center pb-3 border-b-[1px] border-gray-200">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full bg-cover bg-center bg-gray-300"
                  style={{ backgroundImage: `url(${post.authorImage})` }}
                />
                <div>
                  <h2 className="font-semibold">{post.authorName}</h2>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </div>
              </div>
              <BsThreeDots className="cursor-pointer" />
            </div>
            <div className="pt-2 pb-4">{post.content}</div>
            {post.image && (
              <div
                className="w-full h-48 bg-cover bg-center rounded-md mb-4"
                style={{ backgroundImage: `url(${post.image})` }}
              />
            )}
            <div className="flex justify-between text-gray-700 items-center border-t-2 border-gray-200 pt-4">
              <div className="flex items-center gap-2 cursor-pointer">
                <AiFillLike fontSize={24} />
                <span>Like</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <AiFillDislike fontSize={24} />
                <span>Dislike</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <RiChat1Fill fontSize={24} />
                <span>Comment</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <IoIosShareAlt fontSize={24} />
                <span>Share</span>
              </div>
            </div>
            <button
              onClick={() => handlePinPost(post.id)}
              className="mt-4 text-sm text-blue-600 hover:underline">
              Pin Post
            </button>
            <button
              onClick={() => handleDelete(post.id)}
              className="mt-4 ml-4 text-sm text-red-600 hover:underline">
              Delete Post
            </button>
          </div>
        ))}
      </div>

      {/* Right Container: Pinned Posts */}
      <div className="hidden lg:block w-full lg:w-[40%]">
        <div className="w-full bg-gray-100 rounded-md shadow-md p-5">
          <h2 className="font-bold text-lg pb-4">Pinned Post</h2>
          {pinnedPost ? (
            <div>
              <div className="flex items-center gap-3">
                <BsPinAngleFill fontSize={20} />
                <div>
                  <p className="font-semibold">{pinnedPost.title}</p>
                  <p className="text-sm text-gray-500">{pinnedPost.content}</p>
                </div>
              </div>
            </div>
          ) : (
            <p>No pinned post yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostsDashboard;
