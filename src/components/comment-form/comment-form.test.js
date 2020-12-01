import React from 'react';
import renderer from 'react-test-renderer';
import CommentForm from './comment-form';

const noop = () => {};

it(`Should CommentForm render correctly`, () => {
  const tree = renderer
    .create(<CommentForm
      onItemActive={noop}
      onTextChange={noop}
      text={``}
      activeElement={`1-star`}
      postComment={noop}
      currentOfferId={2}
      onActiveChange={noop}
      changePostStatus={noop}
      isPosting: {false},
      isError: {false},
      isActive: {false},
      changeErrorStatus={noop}
      clearTextValue={noop}
      clearItemActive={noop}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
