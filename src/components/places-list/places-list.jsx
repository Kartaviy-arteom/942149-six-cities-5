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
    const {offers} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((el, index) => (
          <PlaceCard offer = {el} onHover = {this.onHover} key = {`${el.title}-${index}`}/>
        ))}
      </div>
    );
  }
}

PlacesList.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default PlacesList;
