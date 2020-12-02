import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {withTextValue} from "./with-text-value";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withTextValue(MockComponent);

it(`Should add and clear text value`, () => {
    const wrapper = shallow(<MockComponentWrapped/>);
  
    wrapper.props().onTextChange(`new text`);
    expect(wrapper.props().text).toEqual(`new text`);
  
    wrapper.props().clearTextValue();
    expect(wrapper.props().isPosting).toEqual(``);

  });
  