"use client";
import { mockData, newsHeadings } from "@/app/_utils/page";
import SubHeading from "@/app/components/SubHeading";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import { MdDelete, MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import {
  useDeletePostMutation,
  useGetNewsAndBlogsQuery,
} from "../../../../Redux/services/BlogsSliceApi";
import Loading from "@/app/(auth)/loading";
const News = () => {
  const [deletePost] = useDeletePostMutation();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { data, isLoading } = useGetNewsAndBlogsQuery({
    category,
    page,
    limit,
  });

  const handleDelete = async (id) => {
    try {
      await deletePost(id).unwrap();
      setSuccessMessage("Post deleted successfully!");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Failed to delete post.");
      setSuccessMessage("");
    }
  };

  if (isLoading) return <Loading />;
  console.log(data);
  return (
    <div>
      <SubHeading
        text={"Blogs/ News Update"}
        buttonText={"Add a Blog or News"}
        isButton={false}
        isLink={true}
        link={"/blogs-news-events/add-news-and-blog"}
      />
      {successMessage && <div className="text-green-500">{successMessage}</div>}
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}
      <div className="bg-gray-200 rounded-md shadow my-10 p-5 overflow-x-auto">
        <div className="grid-news text-xl font-semibold capitalize py-5 my-2 border-b-2 border-gray-400">
          {newsHeadings.map((head, i) => {
            return (
              <Fragment key={i}>
                <div
                  className={`${head !== "s/No" && head !== "date" ? "ml-[2rem]" : "ml-[1rem]"} `}>
                  {head}
                </div>
              </Fragment>
            );
          })}
        </div>
        <div className="">
          {data?.data.map((post, i) => {
            return (
              <div
                className="grid-news gap-x-5 border-b-[1px] py-3 border-gray-300 cursor-pointer"
                key={i}>
                <div className="mt-2 pl-5">{i + 1}</div>
                <div>
                  <Image
                    src={post.image || "/Nosa.png"}
                    height={500}
                    alt="post image"
                    width={500}
                    className="rounded-md"
                    onError={(e) => {
                      e.target.src = "/Nosa.png";
                    }}
                  />
                </div>
                <div className="mx-2 truncate max-w-xs md:max-w-md lg:max-w-none lg:whitespace-normal">
                  {post.title}
                </div>
                <div>{new Date(post.createdAt).toLocaleDateString()}</div>
                <div className="flex justify-center">
                  <MdDelete
                    fontSize={30}
                    className="mr-10 text-primary-500"
                    onClick={() => handleDelete(post._id)}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex items-center gap-3">
            <label>Blogs</label> <input type="checkbox" className="size-5" />
          </div>
          <div className="flex items-center gap-3">
            <label>News</label> <input type="checkbox" className="size-5" />
          </div>
          <div className="w-full flex justify-end my-10 items-center">
            <button className="py-2 px-4 rounded shadow">
              <MdNavigateBefore fontSize={30} />
            </button>
            <span className="font-semibold px-2">3</span>
            <button className="py-2 px-4 rounded shadow bg-primary-500 text-white">
              <MdNavigateNext fontSize={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
