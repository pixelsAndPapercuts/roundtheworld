import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";

import { CountryActions } from "../store/Store";
import instance from "../axios";
import "./SearchBar.css";

const SearchBar = ({ display }) => {
  const searchRef = useRef();
  const searchTypeRef = useRef();
  const dispatch = useDispatch();

  const inputChangeHandler = (e) => {
    searchRef.current.value = e.target.value.trim();
  };

  const changeHandler = (e) => {
    searchTypeRef.current.value = e.target.value;
  };

  const searchHandler = async () => {
    let search = searchRef.current.value;
    let searchType = searchTypeRef.current.value;
    if (!searchType) {
      return;
    } else {
      try {
        dispatch(CountryActions.getCountriesStart());
        const res = await instance.get(`${searchType}/${search}`);
        searchRef.current.value = "";
        dispatch(
          CountryActions.getCountriesSuccess({
            res: res.data,
          })
        );
      } catch (err) {
        console.log(err);
        dispatch(
          CountryActions.getCountriesFailure({ err: err.response.status })
        );
      }
    }
  };
  const enterHandler = (e) => {
    if (
      e.key === "Enter" &&
      searchRef.current.value &&
      searchTypeRef.current.value
    ) {
      searchHandler();
    } else {
      return;
    }
  };

  return (
    <div
      className={`input-group p-0 searchBar w-75 d-flex  flex-nowrap ${display}`}
    >
      <input
        type="text"
        className="form-control shadow-none border-0"
        ref={searchRef}
        onChange={inputChangeHandler}
        onKeyDown={enterHandler}
        aria-label="Text input with segmented dropdown button"
      />
      <button type="button" className="searchButton " onClick={searchHandler}>
        <SearchIcon />
      </button>
      <button
        type="button"
        className="btn btn-outline-light  dropdown-toggle shadow-none dropdown-toggle-split toggleButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      ></button>
      <ul className="dropdown-menu dropdown-menu-end " id="dropdown-menuSearch">
        <FormControl className="text-start w-100">
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Show all"
            name="radio-buttons-group"
            ref={searchTypeRef}
            onChange={changeHandler}
          >
            <FormControlLabel
              value="name"
              control={<Radio className="text-white" />}
              className={`dropdown-item text-white w-100 ms-2 mb-sm-2 p-1 `}
              label="By country"
            />
            <FormControlLabel
              value="capital"
              control={<Radio className="text-white" />}
              className={`dropdown-item text-white w-100 ms-2 mb-sm-2 p-1 `}
              label="By capital"
            />
            <FormControlLabel
              value="lang"
              control={<Radio className="text-white" />}
              className={`dropdown-item text-white w-100 ms-2 mb-sm-2 p-1 `}
              label="By language"
            />
          </RadioGroup>
        </FormControl>
      </ul>
    </div>
  );
};

export default SearchBar;
