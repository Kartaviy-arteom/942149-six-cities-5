import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import {withFormState} from "./with-form-state";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withFormState(MockComponent);

it(`withFormState is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped>
      <React.Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
