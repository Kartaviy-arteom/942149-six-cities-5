import React from "react";
import PropTypes from "prop-types";
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


class Map extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();

    this._icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    this._zoom = 12;
  }

  initMap() {
    this._city = CityCenterCord[this.props.activeCity];
    this._offersCord = this.props.offersCord;
    this.map = leaflet.map(`map`, {
      center: this._city,
      zoom: this._zoom,
      zoomControl: false,
      marker: true
    });
    this.map.setView(this._city, this._zoom);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);
    const icon = this._icon;
    this._offersCord.forEach((element) => {
      leaflet
       .marker(element, {icon})
       .addTo(this.map);
    });
  }

  componentDidMount() {
    this.initMap();
  }

  componentWillUnmount() {
    this.map.remove();
  }

  componentDidUpdate() {
    this.map.remove();
    this.initMap();
  }


  render() {
    return (<div id="map" ref={this.mapRef} style={{width: `100%`, height: `100%`}}></div>);
  }

}

Map.propTypes = {
  offersCord: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number).isRequired).isRequired,
  activeCity: PropTypes.string.isRequired
};

export default Map;
