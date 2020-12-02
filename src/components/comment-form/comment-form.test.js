import React from 'react';
import renderer from 'react-test-renderer';
import CommentForm from './comment-form';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import reducer from "../../store/reducers/root-reducer";
import {createStore} from "redux";

const store = createStore(reducer);
const noop = () => {};

it(`Should CommentForm render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <CommentForm
              onItemActive={noop}
              onTextChange={noop}
              text={``}
              activeElement={`1-star`}
              postComment={noop}
              currentOfferId={2}
              onActiveChange={noop}
              changePostStatus={noop}
              isPosting={false}
              isError={false}
              isActive={false}
              changeErrorStatus={noop}
              clearTextValue={noop}
              clearItemActive={noop}
            />
          </BrowserRouter>
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
