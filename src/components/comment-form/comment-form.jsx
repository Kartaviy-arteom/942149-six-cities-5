import React from "react";
import {withActiveItem} from "../../hocs/with-active-item/with-active-item";
import {withTextValue} from "../../hocs/with-text-value/with-text-value";
import {withActiveFlag} from "../../hocs/with-active-flag/with-active-flag";
import PropTypes from "prop-types";

const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 300;

const starConfigs = [
  {
    id: `5-stars`,
    value: 5,
    title: `perfect`,
  },
  {
    id: `4-stars`,
    value: 4,
    title: `good`,
  },
  {
    id: `3-stars`,
    value: 3,
    title: `not bad`,
  },
  {
    id: `2-stars`,
    value: 2,
    title: `badly`,
  },
  {
    id: `1-star`,
    value: 1,
    title: `terribly`,
  },
];

const CommentForm = ({onItemActive, onTextChange, text, activeElement, isActive: isFormValid, onActiveChange: switchDisableFormStatus}) => {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // TODO: implement submit logic
  };

  const handleChooseRating = (evt) => {
    onItemActive(evt.target.id);
  };

  const handleTextAreaChange = (evt) => {
    onTextChange(evt.target.value);
  };

  const isTextAreaValid = text.length >= MIN_COMMENT_LENGTH && MAX_COMMENT_LENGTH <= 300;

  const switchFormValid = () => {
    if (activeElement && (text.length >= 50 && text.length <= 300)) {
      switchDisableFormStatus();
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating" >
        {starConfigs.map(({id, value, title}) => (
          <React.Fragment key={`${id}-stars`}>
            <input className="form__rating-input visually-hidden" name="rating" value={value} id={id} type="radio" checked={id === activeElement ? true : false} onChange={handleChooseRating}/>
            <label htmlFor={id} className="reviews__rating-label form__rating-label" title={title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleTextAreaChange} value={text}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

CommentForm.propTypes = {
  onItemActive: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  activeElement: PropTypes.string
};

export default withActiveFlag(withTextValue(withActiveItem(CommentForm)));
