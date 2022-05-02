import React, { useState } from "react";

import Modal from "../components/Modal";

import Backdrop from "@mui/material/Backdrop";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import "./Country.css";

const Country = ({ country }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      {open && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
          style={{ height: "100vh" }}
        >
          <Modal country={country} />
        </Backdrop>
      )}
      <Card
        sx={{ maxWidth: 345 }}
        className="h-100 countryCard"
        onClick={handleToggle}
      >
        <CardMedia component="img" height="140" image={country.flags.svg} />
        <CardContent className=" text-start">
          <Typography gutterBottom variant="h5" component="div">
            {country.name.common}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {country.capital}
          </Typography>{" "}
          <Typography variant="body2" color="text.secondary">
            {country.continents[0]}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Country;
