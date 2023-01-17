import React, { useEffect, useState } from "react";
import { Character } from "../Character";
import { getData } from "../../api";

export function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setCharacters(data);
    };
    fetchData();
  }, []);
  return (
    <div className="container mx-auto">
      {characters.map((character) => {
        return (
          <div>
            <Character key={character.id} character={character} />
          </div>
        );
      })}
    </div>
  );
}
