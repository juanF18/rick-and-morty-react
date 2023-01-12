import React from "react";

export function Character(props) {
  const { character } = props;
  return (
    <div>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
    </div>
  );
}
