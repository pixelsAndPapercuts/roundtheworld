import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import "./CountryModal.css";

const CountryModal = ({ country }) => {
  return (
    <Card className="h-100 d-flex flex-column flex-sm-row">
      <div className="h-100 w-100">
        <CardMedia
          className="h-100 w-100"
          component="img"
          image={country.flags.svg}
        />
      </div>
      <CardContent className=" text-start w-100 countryModal">
        <div className="row d-flex flex-column flex-sm-row text-nowrap">
          <Typography gutterBottom variant="h5" component="div">
            {country.name.common}
          </Typography>
          <div className="col">
            <Typography variant="body2">
              <span className="fw-bold">Official name: </span>{" "}
              {country.name.official}
            </Typography>
            <Typography variant="body2">
              <span className="fw-bold">Capital: </span> {country.capital}
            </Typography>
            <Typography variant="body2">
              <span className="fw-bold">Population: </span> {country.population}
            </Typography>
          </div>
          <div className="col">
            <Typography variant="body2">
              <span className="fw-bold">Region: </span> {country.region}
            </Typography>
            <Typography variant="body2">
              <span className="fw-bold">Subregion: </span> {country.subregion}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CountryModal;
