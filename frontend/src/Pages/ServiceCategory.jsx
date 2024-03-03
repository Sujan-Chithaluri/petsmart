import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import Pagenation from "../Components/Pagenation";
import ServiceItems from "../Components/ServiceCards/ServiceItems";

import all_services from "../Components/Assets/all_services";
import { service_locations } from "../Components/Assets/categories";
import all_service_categories from "../Components/Assets/all_service_categories";

import pin_png from "../Components/Assets/pin.png";

const SerivceCategory = (props) => {
  const filtered_services = all_services.filter(
    (item) => props.category === item.category
  );
  const customMarkerIcon = L.icon({
    iconUrl: pin_png,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  const [location, setLocation] = useState(service_locations[0].value);
  const [outlets, setoutlets] = useState(
    filtered_services.filter((item) => {
      return item.location === location;
    })
  );
  const [mapCenter, setMapCenter] = useState(outlets[0].coords);
  const [zoom, setZoom] = useState(outlets.length > 1 ? 12 : 15);

  const handleLocationChange = (event) => {
    const selectedLocation = event.target.value;
    const filteredoutlets =
      filtered_services.filter((item) => {
        return item.location === selectedLocation;
      }) || [];
    const center = filteredoutlets[0].coords;
    const zm = filteredoutlets.length > 1 ? 12 : 15;

    setMapCenter(center);
    setZoom(zm);
    setLocation(selectedLocation);
    setoutlets(filteredoutlets);
  };

  const ChangeView = ({ center, zoom }) => {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  };

  return (
    <>
      <div className="container py-5">
        <div className="border-start border-5 border-primary ps-5 mb-5">
          <h6 className="text-primary text-uppercase">Services</h6>
          <h1 className="display-5 text-uppercase mb-0">
            {
              all_service_categories.find((item) => {
                return item.category === props.category;
              }).name
            }
          </h1>
        </div>

        <div className="d-flex">
          <div className="park-search-container col-lg-8 mb-5">
            <div className="search-box mb-3">
              <span className="text-primary text-titlecase">
                Select Location
              </span>
              <select
                id="dropdown"
                value={location}
                onChange={handleLocationChange}
                className="form-select"
                style={{ maxWidth: "50%" }}
              >
                {service_locations.map((option) => (
                  <option key={option.id} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>

            {outlets.length === 0 && location && (
              <p className="no-results">No outlets found for {location}.</p>
            )}
            <MapContainer
              center={mapCenter}
              zoom={zoom}
              style={{ width: "100%", height: "400px" }}
            >
              <ChangeView center={mapCenter} zoom={zoom} />
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {outlets.map(({ coords, address }, index) => (
                <Marker key={index} position={coords} icon={customMarkerIcon}>
                  <Popup>{address}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>

        <div className="row g-5 mb-5">
          <div className="col-lg-9">
            {outlets.map((item, i) => {
              if (props.category === item.category) {
                return (
                  <ServiceItems
                    key={i.toString()}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    desc={item.desc}
                    rating={item.rating}
                    slotsAvailable={item.slotsAvailable}
                    category={item.category}
                    address={item.address}
                  />
                );
              } else {
                return null;
              }
            })}

            <Pagenation />
          </div>
        </div>
      </div>
    </>
  );
};

export default SerivceCategory;
