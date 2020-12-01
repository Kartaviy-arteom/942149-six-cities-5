import React from "react";
import renderer from "react-test-renderer";
import {CitiesList as CitiesListWithoutStore} from "./cities-list";

const noop = () => {};
const cities = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];
const activeCity = `Paris`;

it(`Should CitiesList render correctly`, () => {
  const tree = renderer
    .create(<CitiesListWithoutStore
      changeCity={noop}
      getHoveredOffer={noop}
      activeCity={activeCity}
      cities={cities}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
