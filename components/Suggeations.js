import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";

function Suggeations() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(7)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggeations for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      {suggestions.map((profile) => (
        <div
          className="flex items-center justify-between mt-3"
          key={profile.id}
        >
          <img
            src={profile.avatar}
            alt="avatarprofile"
            className="rounded-full w-12 h-12  border p-[2px]"
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-xs text-gray-400">
              Works at {profile.company.name}
            </h3>
          </div>
          <button className="cursor-pointer text-sm  text-blue-300 hover:text-blue-500 translate-x-4 ease-out font-bold">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
}

export default Suggeations;
