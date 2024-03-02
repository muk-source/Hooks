import React, { useState } from "react";

export default function Form() {
  const [person, setPerson] = useState({
    name: "Mukund Moona",
    artwork: {
      title: "my art",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  const handlePersonName = (e) => {
    setPerson({
      ...person,
      name: e.target.value,
    });
  };

  const handleArtWorkTitle = (e) => {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });
  };
  return (
    <>
      <label>Name</label>
      <input value={person.name} onChange={handlePersonName} />
      <label>artWork title</label>
      <input value={person.artwork.title} onChange={handleArtWorkTitle} />
      <img src={person.artwork.image} alt={person.artwork.title} />
    </>
  );
}
