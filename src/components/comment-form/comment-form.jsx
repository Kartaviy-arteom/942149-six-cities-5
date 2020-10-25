import React, {PureComponent} from "react";
import {MAX_RATING_VALUE} from "../../consts";

let starRatingValues = [];
for (let i = MAX_RATING_VALUE; i > 0; i--) {
  starRatingValues.push(i);
}

class CommentForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeStarId: null,
      comment: ``,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    this.handleChooseRating = this.handleChooseRating.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
  }

  handleChooseRating(evt) {
    if (evt.target.classList.contains(`form__rating-input`)) {
      evt.preventDefault();
      this.setState({activeStarId: +evt.target.value});
    }
  }

  handleTextAreaChange(evt) {
    this.setState({comment: evt.target.value});
  }

  render() {
    return (
      <form className="reviews__form form" action="#" method="post" onSubmit={this.handleSubmit}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating" >
          {starRatingValues.map((el) => (
            <React.Fragment key={`${el}-stars`}>
              <input className="form__rating-input visually-hidden" name="rating" value={el} id={`${el}-stars`} type="radio" checked={el === this.state.activeStarId ? true : false} onChange={this.handleChooseRating}/>
              <label htmlFor={`${el}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </React.Fragment>
          ))}
        </div>
        <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={this.handleTextAreaChange}></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
        </div>
      </form>
    );
  }
}

export default CommentForm;
