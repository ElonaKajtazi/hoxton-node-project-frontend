import { Autocomplete, AutocompleteRenderInputParams, Stack } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import { json, Link } from "react-router-dom";

export function SearchBar () {
    const [searchResults, setSearchResults] = useState([]);

    function getSearchResults(){
        fetch("http://localhost:4444")
        .then((resp) => resp.json())
        .then ((data) => setSearchResults(data));
    }
    useEffect(() => {
        getSearchResults();
      }, []);
      console.log(searchResults)
    return (
    <Stack sx={{ width: 300, margin: "auto"}}>
        <Autocomplete renderInput={function (params: AutocompleteRenderInputParams): ReactNode {
                throw new Error("Function not implemented.");
            } } options={[]}/>
        </Stack>
    )
}