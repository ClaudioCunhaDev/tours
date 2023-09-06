import React, { useState } from "react";

export const Tour = ({ tourData, onDelete }) => {
  console.log(tourData);
  const { id, name, info, image, price } = tourData;
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="border-2 border-gray-700 flex flex-col items-center gap-3 p-3">
      <img
        className="w-full h-[40vh] md:w-[30rem] md:h-[40vh] border-2 border-white 2xl:w-[40rem]"
        src={image}
        alt={name}
      />
      <div className="flex w-full md:w-[30rem] 2xl:w-[40rem] p-3 justify-between font-bold text-white">
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <p className="md:w-[30rem] 2xl:w-[40rem] p-3 text-white ">
        {readMore ? info : `${info.substring(0, 200)} ...`}
        <button
          onClick={() => setReadMore((prv) => !prv)}
          className="ml-3 text-blue-500 border-b-2 border-blue-500"
        >
          {readMore ? "Show Less" : "Read More"}
        </button>
      </p>
      <div className="flex justify-center">
        <button
          onClick={() => onDelete(id)}
          type="button"
          className="mt-3 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
