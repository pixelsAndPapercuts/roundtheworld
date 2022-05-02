import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PublicIcon from "@mui/icons-material/Public";
import { TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { CountryActions } from "../store/Store";

import instance from "../axios";
import styles from "./Continents.css";

const Continents = () => {
  const dispatch = useDispatch();
  const { filteredCountries } = useSelector((state) => state.country);
  const [styles, setStyles] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
  });
  const continentRef = useRef();

  const changeHandler = async (e) => {
    continentRef.current.value = e.target.value;
    let continent = continentRef.current.value;
    if (continent === "all") {
      try {
        dispatch(CountryActions.getCountriesStart());
        const res = await instance.get("all");
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
    } else {
      dispatch(
        CountryActions.setFilteredCountries({
          continent,
        })
      );
    }
  };

  const changeStyleHandler = (id) => {
    let newStyles = styles;
    for (let key in newStyles) {
      if (key == id) {
        newStyles[key] = "continentClicked";
      } else newStyles[key] = "";
    }
    setStyles(newStyles);
  };

  return (
    <div className="d-flex flex-row  flex-sm-column align-items-start  align-items-sm-start continentsWrapper">
      <div className="w-100 pb-2 mx-5 mx-sm-0 d-none d-sm-flex ps-4 ">
        <PublicIcon className="me-2" />
        Continents
      </div>

      <div className="border-bottom d-none d-sm-block w-100 "></div>

      <div className="w-100 d-flex justify-content-start me-2 mb-sm-5">
        <button
          className=" bg-transparent border-0 d-flex align-items-center dropdown-toggle text-white d-sm-none continents"
          type="button"
          id="defaultDropdown"
          data-bs-toggle="dropdown"
          data-bs-auto-close="true"
          aria-expanded="false"
        >
          <PublicIcon className="" />
        </button>

        <ul
          className="dropdown-menu d-sm-block bg-transparent w-100"
          id="dropdown-menu"
          aria-labelledby="defaultDropdown"
        >
          <FormControl className="text-start w-100">
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Show all"
              name="radio-buttons-group"
              ref={continentRef}
              onChange={changeHandler}
            >
              <FormControlLabel
                value="all"
                control={<Radio className="text-white" />}
                className={`dropdown-item text-white w-100 ms-2 mb-sm-2 p-1  ${styles[1]}`}
                label="Show all"
                onClick={changeStyleHandler.bind(this, 1)}
              />
              <FormControlLabel
                value="Africa"
                control={<Radio className="text-white" />}
                className={`dropdown-item text-white w-100   ms-2 mb-sm-2 p-1 ${styles[2]}`}
                label="Africa"
                onClick={changeStyleHandler.bind(this, 2)}
              />
              <FormControlLabel
                value="Antarctica"
                control={<Radio className="text-white" />}
                className={`dropdown-item text-white w-100   ms-2 mb-sm-2 p-1 ${styles[3]}`}
                label="Antarctica"
                onClick={changeStyleHandler.bind(this, 3)}
              />
              <FormControlLabel
                value="Asia"
                control={<Radio className="text-white" />}
                className={`dropdown-item text-white w-100   ms-2 mb-sm-2 p-1 ${styles[4]}`}
                label="Asia"
                onClick={changeStyleHandler.bind(this, 4)}
              />
              <FormControlLabel
                value="Oceania"
                control={<Radio className="text-white" />}
                className={`dropdown-item text-white w-100   ms-2 mb-sm-2 p-1 ${styles[5]}`}
                label="Australia"
                onClick={changeStyleHandler.bind(this, 5)}
              />
              <FormControlLabel
                value="Europe"
                control={<Radio className="text-white" />}
                className={`dropdown-item text-white w-100   ms-2 mb-sm-2 p-1 ${styles[6]}`}
                label="Europe"
                onClick={changeStyleHandler.bind(this, 6)}
              />
              <FormControlLabel
                value="North America"
                control={<Radio className="text-white" />}
                className={`dropdown-item text-white w-100   ms-2 mb-sm-2 p-1 ${styles[7]}`}
                label="North America"
                onClick={changeStyleHandler.bind(this, 7)}
              />
              <FormControlLabel
                value="South America"
                control={<Radio className="text-white" />}
                className={`dropdown-item text-white w-100   ms-2 mb-sm-2 p-1 ${styles[8]}`}
                label="South America"
                onClick={changeStyleHandler.bind(this, 8)}
              />
            </RadioGroup>
          </FormControl>
        </ul>
      </div>
    </div>
  );
};

export default Continents;
