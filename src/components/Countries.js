import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CountryActions } from "../store/Store";

import LoadingSpinner from "./LoadingSpinner";
import Error from "./Error";
import Country from "./Country";
import instance from "../axios";

const Content = () => {
  const dispatch = useDispatch();
  const { countries, filteredCountries, isFetching, isError, error } =
    useSelector((state) => state.country);
  const [count, setCount] = useState();

  useEffect(() => {
    const fetchCountries = async () => {
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
    };

    fetchCountries();
  }, []);

  let display;
  if (isFetching && !isError) {
    display = <LoadingSpinner />;
  } else if (!isFetching && isError) {
    display = <Error error={error} />;
  } else {
    if (filteredCountries && filteredCountries.length !== 0) {
      display = filteredCountries.map((country) => (
        <div className="text-dark col" key={country.name.common}>
          <Country country={country} />
        </div>
      ));
    } else {
      display = countries.map((country) => (
        <div className="text-dark col" key={country.name.common}>
          <Country country={country} />
        </div>
      ));
    }
  }
  return (
    <div className="row justify-content-center row-cols-2 row-cols-md-3 row-cols-lg-5 g-4 mt-5 mt-sm-0 pt-5 pt-sm-0 position-relative">
      {display}
    </div>
  );
};

export default Content;
