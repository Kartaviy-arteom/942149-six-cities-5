import React from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";


class Map extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this._city = [52.38333, 4.9];
    this._icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    this._zoom = 12;
    this._offersCord = this.props.offersCord;
  }

  initMap() {
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
    leaflet.remove();
  }


  render() {
    return (<div id="map" ref={this.mapRef} style={{width: `100%`, height: `100%`}}></div>);
  }

}

Map.propTypes = {
  offersCord: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number).isRequired).isRequired,
};

export default Map;
