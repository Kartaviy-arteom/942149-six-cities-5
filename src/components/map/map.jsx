import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

const PinPath = {
  DEFAULT: `/img/pin.svg`,
  ACTIVE: `/img/pin-active.svg`
};


class Map extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this._pins = [];
  }

  initMap() {
    this._offers = this.props.validOffers;
    this._city = this._offers[0].cityCords;
    this._zoom = this._offers[0].cityZoom;
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

    this._setPins();
  }

  _setPins() {
    const {activeOffer} = this.props;
    this._offers.forEach((element, index) => {
      const icon = leaflet.icon({
        iconUrl: (activeOffer && element.offerId === activeOffer.offerId) ? PinPath.ACTIVE : PinPath.DEFAULT,
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
    this._offers = this.props.validOffers;
    let targetCords;
    let zoom;
    if (this.props.activeOffer) {
      zoom = this.props.activeOffer.offerZoom;
      targetCords = this.props.activeOffer.cords;
    } else {
      zoom = this._zoom;
      targetCords = this._offers[0].cityCords;
    }
    this._pins.forEach((el) => {
      this.map.removeLayer(el);
    });
    this.map.flyTo(targetCords, zoom);
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
  activeOffer: PropTypes.object
};

const mapStateToProps = (state) => ({
  activeOffer: state.APLICATION_PROCESS.activeOffer,
  activeCity: state.APLICATION_PROCESS.activeCity
});

export default connect(mapStateToProps)(Map);
