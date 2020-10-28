import React from "react";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";


class Map extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.city = [52.38333, 4.9];
    this.icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    this.zoom = 12;
  }

  initMap() {
    this.map = leaflet.map(`map`, {
      center: this.city,
      zoom: this.zoom,
      zoomControl: false,
      marker: true
    });
    this.map.setView(this.city, this.zoom);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);
    this.offerCords = [52.3709553943508, 4.89309666406198];
    const icon = this.icon;
    leaflet
       .marker(this.offerCords, {icon})
       .addTo(this.map);
  }

  render() {
    return (<div id="map" ref={this.mapRef}></div>);
  }

}

export default Map;
