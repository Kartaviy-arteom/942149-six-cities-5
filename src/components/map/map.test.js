  
import React from "react";
import renderer from "react-test-renderer";
import Map from "./map";

const validOffers = [];
const activeCity = `Paris`;
const activeOffer = validOffers[0];

describe(`<Map /> render`, () => {
  const div = document.createElement(`div`);
  div.id = `map`;
  document.body.appendChild(div);
  it(`renders Map correctly with `, () => {
    const mapComponent = renderer
      .create(<Map offers={offers} activeItem={5} />)
      .toJSON();

    expect(mapComponent).toMatchSnapshot();
  });
});
