import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "../../store/reducers/root-reducer";
import {LoginPage} from "./login-page";
import {AuthorizationStatus} from "../../consts";

configure({adapter: new Adapter()});

const store = createStore(reducer);

it(`LoginPage should call handleSubmit 1 time`, () => {
  const onSubmit = jest.fn();

  const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <LoginPage
            activeCity={`Paris`}
            authorizationStatus={AuthorizationStatus.NO_AUTH}
            onSubmit={onSubmit}
          />
        </BrowserRouter>
      </Provider>
  );

  wrapper.find(`input[type="email"]`).instance().value = `lalala@2rubl.ru`;
  wrapper.find(`input[type="password"]`).instance().value = `1111`;
  wrapper.find(`.login__form`).simulate(`submit`, {preventDefault: () => {}});

  expect(onSubmit).toHaveBeenCalledTimes(1);
});
