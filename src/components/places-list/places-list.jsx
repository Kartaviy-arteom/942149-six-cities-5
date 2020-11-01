import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card";

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: null,
    };
    this.onHover = this.onHover.bind(this);
  }

  onHover(currentCard) {
    this.setState(() => ({
      activeCard: currentCard,
    }));
  }

  render() {
    const {offers, className, childClassName} = this.props;
    return (
      <div className={`${className} places__list`}>
        {offers.map((el, index) => (
          <PlaceCard className={childClassName} offer = {el} onHover = {this.onHover} key = {`${el.title}-${index}`}/>
        ))}
      </div>
    );
  }
}

PlacesList.propTypes = {
  offers: PropTypes.array.isRequired,
  className: PropTypes.string,
  childClassName: PropTypes.string,
};

export default PlacesList;
