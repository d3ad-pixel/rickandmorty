import React, { useRef, useState } from "react";
import CharacterCard from "./CharacterCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/joy/CircularProgress";
import useFetch from "../hooks/useFetch";
import SearchBar from "./SearchBar";

const CharacterContainer = () => {
  const topDiv = useRef(null);

  const [page, setPage] = useState(1);

  const [name, setName] = useState("");

  const { error, isPending, data } = useFetch(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`
  );

  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo({
      top: topDiv.current.offsetTop,
      behavior: "smooth",
    });
  };

  function handleNameChange(value) {
    setPage(1);
    console.log(page);
    setName(value);
    window.scrollTo({
      top: topDiv.current.offsetTop,
      behavior: "smooth",
    });
  }

  return (
    <div className="w-11/12 flex flex-col ">
      <div className="flex justify-center my-28">
        <SearchBar change={handleNameChange} />
      </div>
      <div ref={topDiv} className="flex flex-col">
        {error && <div>{error}</div>}
        <div className="flex justify-center">
          {isPending && <CircularProgress className="" />}
        </div>

        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10">
          {data &&
            data.results.map((character) => (
              <div key={character.id} className="flex justify-center w-auto">
                <CharacterCard character={character} />
              </div>
            ))}
        </div>
      </div>
      <Stack spacing={2} className="mt-14 flex justify-center">
        <Pagination
          className="flex justify-center"
          count={(data && data.info.pages) || 0}
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
};

export default CharacterContainer;
