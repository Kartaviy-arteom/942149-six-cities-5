import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {withActiveItem} from "./with-active-item";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);

it(`Should add and delete active item`, () => {
  const wrapper = shallow(<MockComponentWrapped/>);

  wrapper.props().onItemActive(`new-item`);
  expect(wrapper.props().activeElement).toEqual(`new-item`);

  wrapper.props().clearItemActive();
  expect(wrapper.props().activeElement).toEqual(null);
});

