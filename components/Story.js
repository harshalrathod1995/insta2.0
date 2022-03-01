import React from "react";

function Story({ img, username }) {
  return (
    <div>
      <img
        className="rounded-full cursor-pointer w-12 h-12 p-[1.3px] border-red-500 border-2 hover:scale-110 transition transform duration-200 ease-out object-contain"
        src={img}
      />
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
}

export default Story;
