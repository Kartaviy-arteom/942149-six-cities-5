import React from "react";
import MainPage from "../main-page/main-page";
import PropTypes from "prop-types";

const App = (props) => {
  const {placesFoundedCount} = props;

  return (
    <MainPage placesFoundedCount = {placesFoundedCount} />
  );
};

App.propTypes = {
  placesFoundedCount: PropTypes.number.isRequired,
};

export default App;
