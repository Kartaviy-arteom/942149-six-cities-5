import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {withFormState} from "./with-form-state";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withFormState(MockComponent);

it(`Should change statuses`, () => {
  const wrapper = shallow(<MockComponentWrapped/>);

  wrapper.props().changePostStatus(true);
  expect(wrapper.props().isPosting).toEqual(true);

  wrapper.props().changePostStatus(false);
  expect(wrapper.props().isPosting).toEqual(false);

  wrapper.props().changeErrorStatus(true);
  expect(wrapper.props().isError).toEqual(true);

  wrapper.props().changeErrorStatus(false);
  expect(wrapper.props().isError).toEqual(false);
});
