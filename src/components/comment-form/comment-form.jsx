import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {postingComment} from "../../store/api-actions";
import {withActiveItem} from "../../hocs/with-active-item/with-active-item";
import {withTextValue} from "../../hocs/with-text-value/with-text-value";
import {withActiveFlag} from "../../hocs/with-active-flag/with-active-flag";
import {withFormState} from "../../hocs/with-form-state/with-form-state";
import {adaptCommentToServer} from "../../utils";
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

export class CommentForm extends PureComponent {
  constructor(props) {
    super(props);
    this._handleTextAreaChange = this._handleTextAreaChange.bind(this);
    this._handleChooseRating = this._handleChooseRating.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._onSuccessFormSubmit = this._onSuccessFormSubmit.bind(this);
    this._onErrorFormSubmit = this._onErrorFormSubmit.bind(this);
  }

  _handleChooseRating(evt) {
    this.props.onItemActive(evt.target.id);
  }

  _handleTextAreaChange(evt) {
    this.props.onTextChange(evt.target.value);
  }

  _checkFormStatus() {
    const isTextAreaValid = this.props.text.length >= MIN_COMMENT_LENGTH && this.props.text.length <= MAX_COMMENT_LENGTH;
    this._isFormValid = Boolean(this.props.activeElement && isTextAreaValid);
  }

  _handleSubmit(evt) {
    this.props.changeErrorStatus(false);
    const onSuccess = this._onSuccessFormSubmit;
    const onError = this._onErrorFormSubmit;
    const {postComment, currentOfferId, text, activeElement, onActiveChange: switchSubmitBtn} = this.props;
    evt.preventDefault();
    this.props.changePostStatus(true);
    switchSubmitBtn();
    const newComment = adaptCommentToServer(text, Number(activeElement.slice(0, 1)));
    postComment(currentOfferId, newComment, {onSuccess, onError});
  }

  _onSuccessFormSubmit() {
    this.props.clearItemActive();
    this.props.changePostStatus(false);
    this.props.clearTextValue();
  }

  _onErrorFormSubmit() {
    this.props.changePostStatus(false);
    this.props.changeErrorStatus(true);
  }

  componentDidUpdate() {
    this._checkFormStatus();
    const {isActive: isSubmitBtnActive, onActiveChange: switchSubmitBtn, isPosting} = this.props;
    if (this._isFormValid && !isSubmitBtnActive && !isPosting) {
      switchSubmitBtn();
    }

  }

  render() {
    const {text, activeElement, isActive: isSubmitBtnActive, isPosting, isError} = this.props;
    return (
      <form className="reviews__form form" action="#" method="post" onSubmit={this._handleSubmit}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating" >
          {starConfigs.map(({id, value, title}) => (
            <React.Fragment key={`${id}-stars`}>
              <input className="form__rating-input visually-hidden" name="rating" value={value} id={id} type="radio" checked={id === activeElement ? true : false} onChange={this._handleChooseRating} disabled={isPosting}/>
              <label htmlFor={id} className="reviews__rating-label form__rating-label" title={title}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </React.Fragment>
          ))}
        </div>
        <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={this._handleTextAreaChange} value={text} readOnly={isPosting}></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className={`reviews__submit form__submit button ${isError ? `shake` : ``}`} type="submit" disabled={!isSubmitBtnActive}>Submit</button>
        </div>
      </form>
    );
  }
}

CommentForm.propTypes = {
  onItemActive: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  activeElement: PropTypes.string,
  changeErrorStatus: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  onActiveChange: PropTypes.func.isRequired,
  isPosting: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  changePostStatus: PropTypes.func.isRequired,
  clearTextValue: PropTypes.func.isRequired,
  clearItemActive: PropTypes.func.isRequired,
  currentOfferId: PropTypes.number.isRequired,
  postComment: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  postComment(hotelId, {comment, rating}, {onSuccess, onError}) {
    dispatch(postingComment(hotelId, {comment, rating}, {onSuccess, onError}));
  },
});

export default connect(null, mapDispatchToProps)(withFormState(withActiveFlag(withTextValue(withActiveItem(CommentForm)))));
