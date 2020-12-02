import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "../../store/reducers/root-reducer";
import {CommentForm} from "./comment-form";

configure({adapter: new Adapter()});

const store = createStore(reducer);

it(`CommentForm should call _handleSubmit 1 time`, () => {
  jest.spyOn(CommentForm.prototype, `_handleSubmit`);

  const onItemActive = jest.fn();
  const onTextChange = jest.fn();
  const text = `111111111111111111111111111ssssssssssssssssssssss111111111111111111111111111111`;
  const activeElement = `1-star`;
  const changeErrorStatus = jest.fn();
  const isActive = true;
  const onActiveChange = jest.fn();
  const isPosting = false;
  const isError = false;
  const changePostStatus = jest.fn();
  const clearTextValue = jest.fn();
  const clearItemActive = jest.fn();
  const currentOfferId = 10;
  const postComment = jest.fn();


  const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <CommentForm
            onItemActive={onItemActive}
            onTextChange={onTextChange}
            text={text}
            activeElement={activeElement}
            changeErrorStatus={changeErrorStatus}
            isActive={isActive}
            onActiveChange={onActiveChange}
            isPosting={isPosting}
            isError={isError}
            changePostStatus={changePostStatus}
            clearTextValue={clearTextValue}
            clearItemActive={clearItemActive}
            currentOfferId={currentOfferId}
            postComment={postComment}
          />
        </BrowserRouter>
      </Provider>
  );

  wrapper.find(`.reviews__form.form`).at(0).simulate(`submit`, {preventDefault: () => {}});

  expect(CommentForm.prototype._handleSubmit).toHaveBeenCalledTimes(1);
});
