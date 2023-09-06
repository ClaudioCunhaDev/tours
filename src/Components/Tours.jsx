import React, { useState } from "react";
import { Tour } from "./Tour";

export const Tours = ({ data, onDelete }) => {
  console.log(data);
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="min-h-screen bg-black flex flex-col gap-3 items-center">
      <h2 className="text-white font-bold">TOURS</h2>
      <input
        placeholder="Search Your Country"
        className="p-3 bg-transparent border-white border-2 text-white"
        onFocus={true}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        value={inputValue}
      />
      {data
        .filter((tour) => {
          if (inputValue === "") {
            return tour;
          } else if (
            tour.name.toLowerCase().includes(inputValue.toLowerCase())
          ) {
            return tour;
          }
        })
        .map((tour) => {
          return <Tour key={tour.id} tourData={tour} onDelete={onDelete} />;
        })}
    </div>
  );
};
