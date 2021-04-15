import React from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import { SearchControl, OpenStreetMapProvider } from 'react-leaflet-geosearch'
import "./App.css";
import "./Geosearch.css";
import { Icon } from "leaflet";
import useSwr from "swr";
import axios from "axios";
import { features } from "../SFNeighborhoods-copy.json"
// import './example/react-leaflet-geosearch.css';
// import { features } from "./SSFZoning.json"
// import { features } from "./bayareacounties.json"

export const icon = new Icon({
  iconUrl: "/building.png",
  iconSize: [25, 25],
});

export const groceriesIcon = new Icon({
  iconUrl: "/groceries.png",
  iconSize: [25, 25],
});

function Mapp() {

  const SFHoodData = features;

  // const countyData = features

  const onEachFeature = function (feature, layer) {
    if (feature.properties && feature.properties.name)
      layer.bindPopup(feature.properties.name); //How to add more content to the popup?!? Add component here?
  };

  const rating = [
    {
      area_name: "Lake Street",
      average_area_rating: "4"
    },
    {
      area_name: "Seacliff",
      average_area_rating: "3"
    }
  ]

  // r = rating
  const getColor = (r) => {
    return r === "1"
      ? "red"
      : r === "2"
      ? "yellow"
      : r === "3"
      ? "blue"
      : r === "4"
      ? "green"
      : r === "5"
      ? "orange"
      : "gray";
  };

  // Y u no work? 
  const ratings = [
    {
    area_name: "Lake Street",
    average_area_rating: "4"
    },
    {
    area_name: "Seacliff",
    average_area_rating: "3"
    }
  ]

  const mapStyle = (feature) => {
    return {
      fillColor: getColor(feature.properties.rating),
      weight: 0.5,
      color: "black",
    };
  };

  const buildings = [
    {
      id: 1,
      area_id: 1,
      name: "Mission Bay Apartments",
      address: "718 LONG BRIDGE ST #800",
      neighbourhood: "Mission Bay",
      image_url: "https://images.unsplash.com/photo-1571264781039-6e8ebc5bb92d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80",
      latitude: 37.77131354,
      longitude: -122.3944362
      },
      {
      id: 2,
      area_id: 1,
      name: "Tenderloin Apartments",
      address: "201 TURK ST #218",
      neighbourhood: "Tenderloin",
      image_url: "https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
      latitude: 37.78280907,
      longitude: -122.4129985
      },
      {
      id: 3,
      area_id: 1,
      name: "Outer Mission Apartments",
      address: "53 A HARRINGTON ST",
      neighbourhood: "Outer Mission",
      image_url: "https://images.unsplash.com/photo-1569167419644-26705408a98f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      latitude: 37.72549964,
      longitude: -122.4356074
      },
      {
      id: 4,
      area_id: 1,
      name: "Castro/Upper Market Apartments",
      address: "508 CHURCH ST",
      neighbourhood: "Castro/Upper Market",
      image_url: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
      latitude: 37.76273903,
      longitude: -122.428641
      },
      {
      id: 5,
      area_id: 1,
      name: "Hayes Valley Apartments",
      address: "77 VAN NESS AVE #505",
      neighbourhood: "Hayes Valley",
      image_url: "https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
      latitude: 37.77609727,
      longitude: -122.4196852
      },
      {
      id: 6,
      area_id: 1,
      name: "Potrero Hill Apartments",
      address: "2080 03RD ST",
      neighbourhood: "Potrero Hill",
      image_url: "https://images.unsplash.com/photo-1571264781039-6e8ebc5bb92d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80",
      latitude: 37.76330176,
      longitude: -122.3891
      },
      {
      id: 7,
      area_id: 1,
      name: "Outer Richmond Apartments",
      address: "865 37TH AVE",
      neighbourhood: "Outer Richmond",
      image_url: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
      latitude: 37.77266596,
      longitude: -122.4974238
      },
      {
      id: 8,
      area_id: 1,
      name: "Bayview Hunters Point Apartments",
      address: "160 CASHMERE ST #C",
      neighbourhood: "Bayview Hunters Point",
      image_url: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
      latitude: 37.73676775,
      longitude: -122.3846219
      },
      {
      id: 9,
      area_id: 1,
      name: "Potrero Hill Apartments",
      address: "451 KANSAS ST #400",
      neighbourhood: "Potrero Hill",
      image_url: "https://images.unsplash.com/photo-1569167419644-26705408a98f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      latitude: 37.76401123,
      longitude: -122.4032414
      },
      {
      id: 10,
      area_id: 1,
      name: "South of Market Apartments",
      address: "328 TEHAMA ST #610",
      neighbourhood: "South of Market",
      image_url: "https://images.unsplash.com/photo-1569167419644-26705408a98f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      latitude: 37.78233678,
      longitude: -122.4029064
      },
      {
        id: 11,
        area_id: 1,
        name: "Outer Richmond Apartments",
        address: "767 45TH AVE",
        neighbourhood: "Outer Richmond",
        image_url: "https://images.unsplash.com/photo-1569167419644-26705408a98f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        latitude: 37.77406466,
        longitude: -122.5061237
        },
        {
        id: 12,
        area_id: 1,
        name: "West of Twin Peaks Apartments",
        address: "530 DORADO TER #15",
        neighbourhood: "West of Twin Peaks",
        image_url: "https://images.unsplash.com/photo-1571264781039-6e8ebc5bb92d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80",
        latitude: 37.72562677,
        longitude: -122.4616313
        },
        {
        id: 13,
        area_id: 1,
        name: "Castro/Upper Market Apartments",
        address: "1467 CLAYTON ST",
        neighbourhood: "Castro/Upper Market",
        image_url: "https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
        latitude: 37.7581683,
        longitude: -122.4449725
        },
        {
        id: 14,
        area_id: 1,
        name: "Nob Hill Apartments",
        address: "1080 SUTTER ST #801",
        neighbourhood: "Nob Hill",
        image_url: "https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
        latitude: 37.78814989,
        longitude: -122.4180418
        },
        {
        id: 15,
        area_id: 1,
        name: "Nob Hill Apartments",
        address: "1017 GREEN ST",
        neighbourhood: "Nob Hill",
        image_url: "https://images.unsplash.com/photo-1571264781039-6e8ebc5bb92d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80",
        latitude: 37.79841571,
        longitude: -122.4159453
        },
        {
        id: 16,
        area_id: 1,
        name: "Outer Richmond Apartments",
        address: "4625 ANZA ST",
        neighbourhood: "Outer Richmond",
        image_url: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
        latitude: 37.77731261,
        longitude: -122.4979148
        },
        {
        id: 17,
        area_id: 1,
        name: "Treasure Island Apartments",
        address: "1411 FLOUNDER CT",
        neighbourhood: "Treasure Island",
        image_url: "https://images.unsplash.com/photo-1571264781039-6e8ebc5bb92d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80",
        latitude: 37.82674668,
        longitude: -122.374657
        },
        {
        id: 18,
        area_id: 1,
        name: "Inner Richmond Apartments",
        address: "213 CLEMENT ST",
        neighbourhood: "Inner Richmond",
        image_url: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
        latitude: 37.78282973,
        longitude: -122.4615996
        },
        {
        id: 19,
        area_id: 1,
        name: "Hayes Valley Apartments",
        address: "490 HAYES ST",
        neighbourhood: "Hayes Valley",
        image_url: "https://images.unsplash.com/photo-1569167419644-26705408a98f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        latitude: 37.77680438,
        longitude: -122.4244117
        },
        {
        id: 20,
        area_id: 1,
        name: "Financial District/South Beach Apartments",
        address: "501 BEALE ST #9 F",
        neighbourhood: "Financial District/South Beach",
        image_url: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
        latitude: 37.78623679,
        longitude: -122.3890662
        },
        {
        id: 21,
        area_id: 1,
        name: "Bernal Heights Apartments",
        address: "61 HIGHLAND AVE",
        neighbourhood: "Bernal Heights",
        image_url: "https://images.unsplash.com/photo-1569167419644-26705408a98f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        latitude: 37.7374579,
        longitude: -122.4243194
        },
        {
        id: 22,
        area_id: 1,
        name: "Bayview Hunters Point Apartments",
        address: "2189 BAY SHORE BLVD #101 COMML",
        neighbourhood: "Bayview Hunters Point",
        image_url: "https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
        latitude: 37.71229082,
        longitude: -122.4011668
        },
        {
        id: 23,
        area_id: 1,
        name: "Marina Apartments",
        address: "3536 BRODERICK ST",
        neighbourhood: "Marina",
        image_url: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
        latitude: 37.80309775,
        longitude: -122.4448955
        },
        {
        id: 24,
        area_id: 1,
        name: "Russian Hill Apartments",
        address: "1020 CHESTNUT ST",
        neighbourhood: "Russian Hill",
        image_url: "https://images.unsplash.com/photo-1571264781039-6e8ebc5bb92d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80",
        latitude: 37.80314453,
        longitude: -122.4203289
        },
        {
        id: 25,
        area_id: 1,
        name: "Mission Bay Apartments",
        address: "620 LONG BRIDGE ST",
        neighbourhood: "Mission Bay",
        image_url: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
        latitude: 37.77354081,
        longitude: -122.3920279
        },
        {
        id: 26,
        area_id: 1,
        name: "Bernal Heights Apartments",
        address: "27 CARVER ST",
        neighbourhood: "Bernal Heights",
        image_url: "https://images.unsplash.com/photo-1549499090-c9203d2b20ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        latitude: 37.74284629,
        longitude: -122.4097929
        },
        {
        id: 27,
        area_id: 1,
        name: "Hayes Valley Apartments",
        address: "533 LINDEN ST",
        neighbourhood: "Hayes Valley",
        image_url: "https://images.unsplash.com/photo-1571264781039-6e8ebc5bb92d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80",
        latitude: 37.77581036,
        longitude: -122.4266889
        },
        {
        id: 28,
        area_id: 1,
        name: "Bayview Hunters Point Apartments",
        address: "1411 MINNESOTA ST",
        neighbourhood: "Bayview Hunters Point",
        image_url: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
        latitude: 37.75192247,
        longitude: -122.3894203
        },
        {
        id: 29,
        area_id: 1,
        name: "Hayes Valley Apartments",
        address: "400 GROVE ST #205",
        neighbourhood: "Hayes Valley",
        image_url: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
        latitude: 37.77792272,
        longitude: -122.423346
        },
        {
        id: 30,
        area_id: 1,
        name: "Potrero Hill Apartments",
        address: "2030 03RD ST #1",
        neighbourhood: "Potrero Hill",
        image_url: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
        latitude: 37.76365981,
        longitude: -122.3891339
        },
        {
        id: 31,
        area_id: 1,
        name: "Hayes Valley Apartments",
        address: "530 GOUGH ST",
        neighbourhood: "Hayes Valley",
        image_url: "https://images.unsplash.com/photo-1549499090-c9203d2b20ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        latitude: 37.77849361,
        longitude: -122.4229548
        },
        {
        id: 32,
        area_id: 1,
        name: "Pacific Heights Apartments",
        address: "1965 CLAY ST",
        neighbourhood: "Pacific Heights",
        image_url: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
        latitude: 37.79156941,
        longitude: -122.4252892
        },
        {
        id: 33,
        area_id: 1,
        name: "Hayes Valley Apartments",
        address: "77 VAN NESS AVE #804",
        neighbourhood: "Hayes Valley",
        image_url: "https://images.unsplash.com/photo-1571264781039-6e8ebc5bb92d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80",
        latitude: 37.77609727,
        longitude: -122.4196852
        },
        {
        id: 34,
        area_id: 1,
        name: "Financial District/South Beach Apartments",
        address: "140 NEW MONTGOMERY ST",
        neighbourhood: "Financial District/South Beach",
        image_url: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
        latitude: 37.78661202,
        longitude: -122.4000055
        },
        {
        id: 35,
        area_id: 1,
        name: "Oceanview/Merced/Ingleside Apartments",
        address: "322 RANDOLPH ST",
        neighbourhood: "Oceanview/Merced/Ingleside",
        image_url: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
        latitude: 37.71449769,
        longitude: -122.4655788
        },
        {
        id: 36,
        area_id: 1,
        name: "Lakeshore Apartments",
        address: "28 BUCARELI DR",
        neighbourhood: "Lakeshore",
        image_url: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
        latitude: 37.71734702,
        longitude: -122.4796613
        },
        {
        id: 37,
        area_id: 1,
        name: "Bayview Hunters Point Apartments",
        address: "107 OTTER COVE TER",
        neighbourhood: "Bayview Hunters Point",
        image_url: "https://images.unsplash.com/photo-1569167419644-26705408a98f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        latitude: 37.71244319,
        longitude: -122.3949113
        },
        {
        id: 38,
        area_id: 1,
        name: "Financial District/South Beach Apartments",
        address: "338 SPEAR ST #35 C",
        neighbourhood: "Financial District/South Beach",
        image_url: "https://images.unsplash.com/photo-1549499090-c9203d2b20ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        latitude: 37.78937597,
        longitude: -122.390972
        },
        {
        id: 39,
        area_id: 1,
        name: "Haight Ashbury Apartments",
        address: "3 CASTRO ST",
        neighbourhood: "Haight Ashbury",
        image_url: "https://images.unsplash.com/photo-1571264781039-6e8ebc5bb92d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80",
        latitude: 37.77024736,
        longitude: -122.4365055
        },
        {
        id: 40,
        area_id: 1,
        name: "Inner Sunset Apartments",
        address: "315 A PARNASSUS AVE",
        neighbourhood: "Inner Sunset",
        image_url: "https://images.unsplash.com/photo-1549499090-c9203d2b20ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        latitude: 37.76401871,
        longitude: -122.4548882
        },
        {
          id: 41,
          area_id: 1,
          name: "Tenderloin Apartments",
          address: "155 LEAVENWORTH ST",
          neighbourhood: "Tenderloin",
          image_url: "https://images.unsplash.com/photo-1549499090-c9203d2b20ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
          latitude: 37.78256334,
          longitude: -122.4141911
          },
          {
          id: 42,
          area_id: 1,
          name: "Bernal Heights Apartments",
          address: "48 MULLEN AVE",
          neighbourhood: "Bernal Heights",
          image_url: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
          latitude: 37.74619771,
          longitude: -122.4098225
          },
          {
          id: 43,
          area_id: 1,
          name: "Outer Mission Apartments",
          address: "4770 MISSION ST #205",
          neighbourhood: "Outer Mission",
          image_url: "https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
          latitude: 37.72181807,
          longitude: -122.43741
          },
          {
          id: 44,
          area_id: 1,
          name: "Bayview Hunters Point Apartments",
          address: "14 BERTHA LN #BLDG# 14",
          neighbourhood: "Bayview Hunters Point",
          image_url: "https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
          latitude: 37.73343882,
          longitude: -122.3804676
          },
          {
          id: 45,
          area_id: 1,
          name: "Bayview Hunters Point Apartments",
          address: "1 MEGAN DR",
          neighbourhood: "Bayview Hunters Point",
          image_url: "https://images.unsplash.com/photo-1549499090-c9203d2b20ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
          latitude: 37.71412212,
          longitude: -122.3986594
          },
          {
          id: 46,
          area_id: 1,
          name: "Russian Hill Apartments",
          address: "1100 LOMBARD ST #2",
          neighbourhood: "Russian Hill",
          image_url: "https://images.unsplash.com/photo-1571264781039-6e8ebc5bb92d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80",
          latitude: 37.80211731,
          longitude: -122.4200055
          },
          {
          id: 47,
          area_id: 1,
          name: "Financial District/South Beach Apartments",
          address: "425 01ST ST #2302",
          neighbourhood: "Financial District/South Beach",
          image_url: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
          latitude: 37.78582936,
          longitude: -122.3922757
          },
          {
          id: 48,
          area_id: 1,
          name: "Financial District/South Beach Apartments",
          address: "2 BAYSIDE VILLAGE PL #209",
          neighbourhood: "Financial District/South Beach",
          image_url: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
          latitude: 37.78491857,
          longitude: -122.3903273
          },
          {
          id: 49,
          area_id: 1,
          name: "Financial District/South Beach Apartments",
          address: "575 HARRISON ST #310",
          neighbourhood: "Financial District/South Beach",
          image_url: "https://images.unsplash.com/photo-1569167419644-26705408a98f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
          latitude: 37.7844205,
          longitude: -122.3943806
          },
          {
          id: 50,
          area_id: 1,
          name: "Financial District/South Beach Apartments",
          address: "201 FOLSOM ST #20H",
          neighbourhood: "Financial District/South Beach",
          image_url: "https://images.unsplash.com/photo-1571264781039-6e8ebc5bb92d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80",
          latitude: 37.78873245,
          longitude: -122.3923138
          },
          {
          id: 51,
          area_id: 1,
          name: "South of Market Apartments",
          address: "788 HARRISON ST #613",
          neighbourhood: "South of Market",
          image_url: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
          latitude: 37.78133158,
          longitude: -122.3996689
          },
          {
          id: 52,
          area_id: 1,
          name: "Sunset/Parkside Apartments",
          address: "2408 30TH AVE",
          neighbourhood: "Sunset/Parkside",
          image_url: "https://images.unsplash.com/photo-1571264781039-6e8ebc5bb92d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80",
          latitude: 37.74232703,
          longitude: -122.4872426
          },
          {
          id: 53,
          area_id: 1,
          name: "Potrero Hill Apartments",
          address: "601 16TH ST #T. TRAILER",
          neighbourhood: "Potrero Hill",
          image_url: "https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
          latitude: 37.76652725,
          longitude: -122.3911117
          },
          {
          id: 54,
          area_id: 1,
          name: "Treasure Island Apartments",
          address: "1430 GATEVIEW AVE",
          neighbourhood: "Treasure Island",
          image_url: "https://images.unsplash.com/photo-1571264781039-6e8ebc5bb92d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80",
          latitude: 37.82845777,
          longitude: -122.3727265
          },
          {
          id: 55,
          area_id: 1,
          name: "Financial District/South Beach Apartments",
          address: "318 SPEAR ST #8 H",
          neighbourhood: "Financial District/South Beach",
          image_url: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
          latitude: 37.78937597,
          longitude: -122.390972
          },
          {
          id: 56,
          area_id: 1,
          name: "Outer Richmond Apartments",
          address: "861 36TH AVE",
          neighbourhood: "Outer Richmond",
          image_url: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
          latitude: 37.77278319,
          longitude: -122.496363
          },
          {
          id: 57,
          area_id: 1,
          name: "Bayview Hunters Point Apartments",
          address: "1448 KIRKWOOD AVE #BLDG 3H",
          neighbourhood: "Bayview Hunters Point",
          image_url: "https://images.unsplash.com/photo-1549499090-c9203d2b20ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
          latitude: 37.73650795,
          longitude: -122.3874914
          },
          {
          id: 58,
          area_id: 1,
          name: "Mission Apartments",
          address: "2754 A FOLSOM ST",
          neighbourhood: "Mission",
          image_url: "https://images.unsplash.com/photo-1569167419644-26705408a98f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
          latitude: 37.75315192,
          longitude: -122.414582
          },
          {
          id: 59,
          area_id: 1,
          name: "Lakeshore Apartments",
          address: "595 BUCKINGHAM WAY #515",
          neighbourhood: "Lakeshore",
          image_url: "https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
          latitude: 37.73026176,
          longitude: -122.4762092
          },
          {
          id: 60,
          area_id: 1,
          name: "Japantown Apartments",
          address: "1630 POST ST",
          neighbourhood: "Japantown",
          image_url: "https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
          latitude: 37.78596608,
          longitude: -122.4286755
          },
          {
            id: 61,
            area_id: 1,
            name: "Financial District/South Beach Apartments",
            address: "733 FRONT ST #209",
            neighbourhood: "Financial District/South Beach",
            image_url: "https://images.unsplash.com/photo-1549499090-c9203d2b20ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            latitude: 37.79802708,
            longitude: -122.4000919
            },
            {
            id: 62,
            area_id: 1,
            name: "Outer Richmond Apartments",
            address: "710 LA PLAYA",
            neighbourhood: "Outer Richmond",
            image_url: "https://images.unsplash.com/photo-1569167419644-26705408a98f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            latitude: 37.77453646,
            longitude: -122.5097951
            },
            {
            id: 63,
            area_id: 1,
            name: "Marina Apartments",
            address: "1754 FILBERT ST #1",
            neighbourhood: "Marina",
            image_url: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
            latitude: 37.79927027,
            longitude: -122.4284164
            },
            {
            id: 64,
            area_id: 1,
            name: "Mission Apartments",
            address: "3279 22ND ST",
            neighbourhood: "Mission",
            image_url: "https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
            latitude: 37.75517139,
            longitude: -122.4204371
            },
            {
            id: 65,
            area_id: 1,
            name: "Bernal Heights Apartments",
            address: "6 LUNDYS LN",
            neighbourhood: "Bernal Heights",
            image_url: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
            latitude: 37.74571622,
            longitude: -122.4178413
            },
            {
            id: 66,
            area_id: 1,
            name: "Inner Richmond Apartments",
            address: "623 03RD AVE",
            neighbourhood: "Inner Richmond",
            image_url: "https://images.unsplash.com/photo-1549499090-c9203d2b20ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            latitude: 37.77687802,
            longitude: -122.461089
            },
            {
            id: 67,
            area_id: 1,
            name: "Russian Hill Apartments",
            address: "1124 CHESTNUT ST",
            neighbourhood: "Russian Hill",
            image_url: "https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
            latitude: 37.80282245,
            longitude: -122.4218468
            },
            {
            id: 68,
            area_id: 1,
            name: "Western Addition Apartments",
            address: "368 ELM ST #407",
            neighbourhood: "Western Addition",
            image_url: "https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
            latitude: 37.78138004,
            longitude: -122.4231439
            },
            {
            id: 69,
            area_id: 1,
            name: "Bayview Hunters Point Apartments",
            address: "204 EAST CRYSTAL COVE TER",
            neighbourhood: "Bayview Hunters Point",
            image_url: "https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
            latitude: 37.71206421,
            longitude: -122.3936635
            },
            {
            id: 70,
            area_id: 1,
            name: "South of Market Apartments",
            address: "479 NATOMA ST #505",
            neighbourhood: "South of Market",
            image_url: "https://images.unsplash.com/photo-1571264781039-6e8ebc5bb92d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80",
            latitude: 37.78042276,
            longitude: -122.407083
            },
            {
            id: 71,
            area_id: 1,
            name: "Mission Apartments",
            address: "3620 19TH ST #8",
            neighbourhood: "Mission",
            image_url: "https://images.unsplash.com/photo-1569167419644-26705408a98f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            latitude: 37.76015956,
            longitude: -122.4242426
            },
            {
            id: 72,
            area_id: 1,
            name: "Western Addition Apartments",
            address: "1320 SUTTER ST",
            neighbourhood: "Western Addition",
            image_url: "https://images.unsplash.com/photo-1569167419644-26705408a98f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            latitude: 37.78774065,
            longitude: -122.4223091
            },
            {
            id: 73,
            area_id: 1,
            name: "Excelsior Apartments",
            address: "191 STONERIDGE LN",
            neighbourhood: "Excelsior",
            image_url: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
            latitude: 37.7103656,
            longitude: -122.4254585
            },
            {
            id: 74,
            area_id: 1,
            name: "Treasure Island Apartments",
            address: "1236 NORTHPOINT DR",
            neighbourhood: "Treasure Island",
            image_url: "https://images.unsplash.com/photo-1549499090-c9203d2b20ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            latitude: 37.83122666,
            longitude: -122.3741507
            },
            {
            id: 75,
            area_id: 1,
            name: "Chinatown Apartments",
            address: "654 VALLEJO ST",
            neighbourhood: "Chinatown",
            image_url: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
            latitude: 37.79887695,
            longitude: -122.4085555
            },
            {
            id: 76,
            area_id: 1,
            name: "Russian Hill Apartments",
            address: "1264 UNION ST",
            neighbourhood: "Russian Hill",
            image_url: "https://images.unsplash.com/photo-1571264781039-6e8ebc5bb92d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80",
            latitude: 37.79925704,
            longitude: -122.4200271
            },
            {
            id: 77,
            area_id: 1,
            name: "Sunset/Parkside Apartments",
            address: "2946 TARAVAL ST",
            neighbourhood: "Sunset/Parkside",
            image_url: "https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
            latitude: 37.74232267,
            longitude: -122.4978445
            },
            {
            id: 78,
            area_id: 1,
            name: "Mission Apartments",
            address: "680 FLORIDA ST #429",
            neighbourhood: "Mission",
            image_url: "https://images.unsplash.com/photo-1569167419644-26705408a98f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            latitude: 37.76083605,
            longitude: -122.4111647
            },
            {
            id: 79,
            area_id: 1,
            name: "Excelsior Apartments",
            address: "4451 MISSION ST #202",
            neighbourhood: "Excelsior",
            image_url: "https://images.unsplash.com/photo-1569167419644-26705408a98f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            latitude: 37.72684239,
            longitude: -122.4328305
            },
            {
            id: 80,
            area_id: 1,
            name: "Noe Valley Apartments",
            address: "4031 26TH ST",
            neighbourhood: "Noe Valley",
            image_url: "https://images.unsplash.com/photo-1569167419644-26705408a98f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            latitude: 37.74807356,
            longitude: -122.4300623
            },
            {
            id: 81,
            area_id: 1,
            name: "Bayview Hunters Point Apartments",
            address: "900 GILMAN AVE #2",
            neighbourhood: "Bayview Hunters Point",
            image_url: "https://images.unsplash.com/photo-1571264781039-6e8ebc5bb92d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80",
            latitude: 37.71756817,
            longitude: -122.3864357
            },
            {
            id: 82,
            area_id: 1,
            name: "Inner Sunset Apartments",
            address: "79 CARMEL ST",
            neighbourhood: "Inner Sunset",
            image_url: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
            latitude: 37.76066045,
            longitude: -122.4483775
            },
            {
            id: 83,
            area_id: 1,
            name: "West of Twin Peaks Apartments",
            address: "2809 14TH AVE",
            neighbourhood: "West of Twin Peaks",
            image_url: "https://images.unsplash.com/photo-1549499090-c9203d2b20ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            latitude: 37.73768303,
            longitude: -122.4689238
            },
            {
            id: 84,
            area_id: 1,
            name: "Noe Valley Apartments",
            address: "4257 24TH ST",
            neighbourhood: "Noe Valley",
            image_url: "https://images.unsplash.com/photo-1569167419644-26705408a98f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            latitude: 37.75084217,
            longitude: -122.4375153
            },
            {
            id: 85,
            area_id: 1,
            name: "Outer Mission Apartments",
            address: "5486 MISSION ST",
            neighbourhood: "Outer Mission",
            image_url: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
            latitude: 37.71291432,
            longitude: -122.4448264
            },
            {
            id: 86,
            area_id: 1,
            name: "Mission Bay Apartments",
            address: "718 LONG BRIDGE ST #403",
            neighbourhood: "Mission Bay",
            image_url: "https://images.unsplash.com/photo-1571264781039-6e8ebc5bb92d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80",
            latitude: 37.77131354,
            longitude: -122.3944362
            },
            {
            id: 87,
            area_id: 1,
            name: "Financial District/South Beach Apartments",
            address: "0 THE EMBARCADERO #48 H",
            neighbourhood: "Financial District/South Beach",
            image_url: "https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
            latitude: 37.78812404,
            longitude: -122.3863637
            },
            {
            id: 88,
            area_id: 1,
            name: "Mission Apartments",
            address: "851 A ALABAMA ST",
            neighbourhood: "Mission",
            image_url: "https://images.unsplash.com/photo-1571264781039-6e8ebc5bb92d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80",
            latitude: 37.75833532,
            longitude: -122.411227
            },
            {
            id: 89,
            area_id: 1,
            name: "Lone Mountain/USF Apartments",
            address: "667 PARKER AVE",
            neighbourhood: "Lone Mountain/USF",
            image_url: "https://images.unsplash.com/photo-1569167419644-26705408a98f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            latitude: 37.77593515,
            longitude: -122.4532753
            },
            {
            id: 90,
            area_id: 1,
            name: "Pacific Heights Apartments",
            address: "3138 WASHINGTON ST",
            neighbourhood: "Pacific Heights",
            image_url: "https://images.unsplash.com/photo-1569167419644-26705408a98f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            latitude: 37.79050592,
            longitude: -122.4450372
            },
            {
            id: 91,
            area_id: 1,
            name: "Mission Apartments",
            address: "555 BARTLETT ST #402",
            neighbourhood: "Mission",
            image_url: "https://images.unsplash.com/photo-1571264781039-6e8ebc5bb92d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80",
            latitude: 37.74837254,
            longitude: -122.4190379
            },
            {
            id: 92,
            area_id: 1,
            name: "Marina Apartments",
            address: "2831 PIERCE ST",
            neighbourhood: "Marina",
            image_url: "https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
            latitude: 37.79616946,
            longitude: -122.439036
            },
            {
            id: 93,
            area_id: 1,
            name: "Castro/Upper Market Apartments",
            address: "211 UPPER TER",
            neighbourhood: "Castro/Upper Market",
            image_url: "https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
            latitude: 37.7636276,
            longitude: -122.4442507
            },
            {
            id: 94,
            area_id: 1,
            name: "Tenderloin Apartments",
            address: "201 TURK ST #407",
            neighbourhood: "Tenderloin",
            image_url: "https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
            latitude: 37.78280907,
            longitude: -122.4129985
            },
            {
            id: 95,
            area_id: 1,
            name: "Hayes Valley Apartments",
            address: "77 VAN NESS AVE #410",
            neighbourhood: "Hayes Valley",
            image_url: "https://images.unsplash.com/photo-1569167419644-26705408a98f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            latitude: 37.77609727,
            longitude: -122.4196852
            },
            {
            id: 96,
            area_id: 1,
            name: "Castro/Upper Market Apartments",
            address: "66 BELCHER ST #2",
            neighbourhood: "Castro/Upper Market",
            image_url: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
            latitude: 37.76824239,
            longitude: -122.4304588
            },
            {
            id: 97,
            area_id: 1,
            name: "South of Market Apartments",
            address: "1190 MISSION ST #1406",
            neighbourhood: "South of Market",
            image_url: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
            latitude: 37.77791963,
            longitude: -122.4127733
            },
            {
            id: 98,
            area_id: 1,
            name: "Bayview Hunters Point Apartments",
            address: "1433 HUDSON AVE",
            neighbourhood: "Bayview Hunters Point",
            image_url: "https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
            latitude: 37.73808465,
            longitude: -122.3853502
            },
            {
            id: 99,
            area_id: 1,
            name: "Mission Apartments",
            address: "3500 19TH ST #308",
            neighbourhood: "Mission",
            image_url: "https://images.unsplash.com/photo-1571264781039-6e8ebc5bb92d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80",
            latitude: 37.76020078,
            longitude: -122.4217485
            },
            {
            id: 100,
            area_id: 1,
            name: "Lone Mountain/USF Apartments",
            address: "621 BAKER ST",
            neighbourhood: "Lone Mountain/USF",
            image_url: "https://images.unsplash.com/photo-1569167419644-26705408a98f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            latitude: 37.77675737,
            longitude: -122.4419423
            },
  ]

  const prov = OpenStreetMapProvider();
  const GeoSearchControlElement = SearchControl;


  return (
    <MapContainer center={[37.75220204901914, -122.45808060394913]} zoom={13}>
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {buildings.map((building) => (
        <Marker
          key={building.id}
          position={[building.latitude, building.longitude]}
          icon={icon}
        >
          <Popup>
            <div>
              <h2>{building.name}</h2>
            </div>
          </Popup>
        </Marker>
      ))}

      <GeoJSON
        data={SFHoodData}
        style={mapStyle}
        onEachFeature={onEachFeature}
      />

      {/* <GeoSearchControlElement
          provider={prov}
          showMarker={true}
          showPopup={false}
          popupFormat={({ query, result }) => result.label}
          maxMarkers={3}
          retainZoomLevel={false}
          animateZoom={true}
          autoClose={false}
          searchLabel={"Enter address, please"}
          keepResult={true}
      /> */}
    </MapContainer>
  );
}

export default Mapp;