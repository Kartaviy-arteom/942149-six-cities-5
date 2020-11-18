import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

const CityCenterCord = {
  Paris: [48.853410011111, 2.348800011111],
  Cologne: [50.941357, 	6.958307],
  Brussels: [50.8505, 4.3488],
  Amsterdam: [52.377956, 4.897070],
  Hamburg: [53.551086, 9.993682],
  Dusseldorf: [51.233334, 6.783333]
};

const ZOOM_LEVEL = 12;
const PinPath = {
  DEFAULT: `img/pin.svg`,
  ACTIVE: `img/pin-active.svg`
};


class Map extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this._zoom = 12;
    this._pins = [];
  }

  initMap() {
    this._city = CityCenterCord[this.props.activeCity] || CityCenterCord.Amsterdam;
    this._offers = this.props.validOffers;
    this.map = leaflet.map(`map`, {
      center: this._city,
      zoom: ZOOM_LEVEL,
      zoomControl: false,
      marker: true
    });
    this.map.setView(this._city, this._zoom);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    this._setPins();
  }

  _setPins() {
    const {activeOfferId} = this.props;
    this._offers.forEach((element, index) => {
      const icon = leaflet.icon({
        iconUrl: element.offerId === activeOfferId ? PinPath.ACTIVE : PinPath.DEFAULT,
        iconSize: [30, 30]
      });

      this._pins[index] = new leaflet
       .Marker(element.cords, {icon});
      this.map.addLayer(this._pins[index]);
    });
  }

  componentDidMount() {
    this.initMap();
  }

  componentWillUnmount() {
    this.map.remove();
  }

  componentDidUpdate() {
    this._pins.forEach((el) => {
      this.map.removeLayer(el);
    });
    this.map.flyTo(CityCenterCord[this.props.activeCity], ZOOM_LEVEL);
    this._pins = [];
    this._offers = this.props.validOffers;

    this._setPins();
  }


  render() {
    return (<div id="map" ref={this.mapRef} style={{width: `100%`, height: `100%`}}></div>);
  }

}

Map.propTypes = {
  validOffers: PropTypes.array.isRequired,
  activeCity: PropTypes.string.isRequired,
  activeOfferId: PropTypes.number
};

const mapStateToProps = (state) => ({
  activeOfferId: state.APLICATION_PROCESS.activeOfferId,
  activeCity: state.APLICATION_PROCESS.activeCity
});

export default connect(mapStateToProps)(Map);
