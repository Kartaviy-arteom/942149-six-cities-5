import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {withActiveFlag} from "./with-active-flag";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveFlag(MockComponent);

it(`Should change active flag`, () => {
  const wrapper = shallow(<MockComponentWrapped/>);

  wrapper.props().onActiveChange();
  expect(wrapper.props().isActive).toEqual(true);

  wrapper.props().onActiveChange();
  expect(wrapper.props().isActive).toEqual(false);
});
