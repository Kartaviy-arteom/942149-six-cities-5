import React from "react";
import renderer from "react-test-renderer";
import PropertyPage from "./property-page";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import reducer from "../../store/reducers/root-reducer";
import {createAPI} from "../../services/api";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const api = createAPI(() => {});

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

const noop = () => {};

const match = {
  params: {
    id: 1,
  }
};

it(`PropertyPage component render correctly`, () => {
  const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <PropertyPage
            redirectToRoute={noop}
            onItemActive={noop}
            match={match}
            activeElement={``}
          />
        </BrowserRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
