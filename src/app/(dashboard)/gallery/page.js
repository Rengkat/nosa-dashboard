"use client";
import { galleryHeadings } from "@/app/_utils/page";
import SubHeading from "@/app/components/SubHeading";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import { MdDelete, MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import {
  useDeleteFromGalleryMutation,
  useGetAllGalleryImagesQuery,
} from "../../../../Redux/services/GalleryApiSlice";
import Loading from "@/app/(auth)/loading";

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: galleryData,
    isLoading,
    isError,
  } = useGetAllGalleryImagesQuery({ page: currentPage, limit: 10 });
  const [deleteGallery] = useDeleteFromGalleryMutation();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleDelete = async (id) => {
    try {
      await deleteGallery(id).unwrap();
      setSuccessMessage("Gallery item deleted successfully!");
      setErrorMessage("");
    } catch (error) {
      console.error("Error deleting gallery item:", error);
      setErrorMessage("Failed to delete gallery item.");
      setSuccessMessage("");
    }
  };

  if (isLoading) return <Loading />;
  if (isError) return <div>Error fetching gallery data.</div>;

  return (
    <div>
      <SubHeading
        text={"Gallery"}
        buttonText={"Add to Gallery"}
        link={"gallery/add-gallery"}
        isLink={true}
        isButton={false}
      />

      {/* Display success and error messages */}
      {successMessage && <div className="text-green-500">{successMessage}</div>}
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}

      <div className="bg-gray-200 rounded-md shadow my-10 p-5">
        {/* Table Headings */}
        <div className="grid grid-cols-6 text-base md:text-xl font-semibold capitalize py-5 my-2 border-b-2 border-gray-400">
          {galleryHeadings.map((head, i) => (
            <div
              key={i}
              className={`truncate ${
                head === "Image" || head === "Actions" ? "text-center" : "pl-5"
              }`}>
              {head}
            </div>
          ))}
        </div>

        {/* Gallery Data */}
        <div className="space-y-4">
          {galleryData?.data?.map((item, i) => (
            <div
              key={item._id}
              className="grid grid-cols-6 items-center gap-5 border-b-[1px] py-3 border-gray-300">
              <div className="pl-5">{i + 1}</div>
              <div className="flex justify-center">
                <div className="relative w-20 h-20">
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
              </div>
              <div className="truncate max-w-xs">{item.title}</div>
              <div className="truncate max-w-xs">{item.caption}</div>
              <div>{new Date(item.date).toLocaleDateString()}</div>
              <div className="flex justify-center">
                <button
                  onClick={() => handleDelete(item._id)}
                  className="text-red-500 hover:text-red-700">
                  <MdDelete fontSize={30} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="w-full flex justify-end my-10 items-center">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="py-2 px-4 rounded shadow hover:bg-gray-300">
            <MdNavigateBefore fontSize={30} />
          </button>
          <span className="font-semibold px-2">{currentPage}</span>
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="py-2 px-4 rounded shadow bg-primary-500 text-white hover:bg-primary-600">
            <MdNavigateNext fontSize={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
