import React, { useState as useStateMock } from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, getByTestId } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Recommended from "./Recommended";
import productsContext from "./../../../contexts/ProductsContext";
import loadContext from "./../../../contexts/LoadContext";
afterEach(cleanup);

// MOCKUP DE PRODUCT
const listProducts = [
  {
    id: 1,
    name: "Casa en Medellín",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim turpis et ex ullamcorper sodales",
    features: [
      {
        id: 2,
        name: "Agua caliente",
        icon: "FaFire",
        createAt: "2021-11-10T02:11:44.463+00:00",
      },
      {
        id: 1,
        name: "Aire acondicionado",
        icon: "FaSnowflake",
        createAt: "2021-11-10T02:11:44.456+00:00",
      },
      {
        id: 20,
        name: "Extintor",
        icon: "FaFireExtinguisher",
        createAt: "2021-11-10T02:11:44.537+00:00",
      },
      {
        id: 14,
        name: "Elementos basicos",
        icon: "FaToiletPaper",
        createAt: "2021-11-10T02:11:44.513+00:00",
      },
      {
        id: 10,
        name: "Wifi",
        icon: "FaWifi",
        createAt: "2021-11-10T02:11:44.496+00:00",
      },
    ],
    images: [
      {
        id: 5,
        title: "foto 5",
        url: "https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_960_720.jpg",
        createAt: "2021-11-10T02:11:43.553+00:00",
      },
      {
        id: 3,
        title: "foto 3",
        url: "https://cdn.pixabay.com/photo/2016/04/18/08/51/bathroom-1336167_960_720.jpg",
        createAt: "2021-11-10T02:11:43.543+00:00",
      },
      {
        id: 2,
        title: "foto 2",
        url: "https://cdn.pixabay.com/photo/2016/10/13/09/08/travel-1737171_960_720.jpg",
        createAt: "2021-11-10T02:11:43.538+00:00",
      },
      {
        id: 7,
        title: "foto 7",
        url: "https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_960_720.jpg",
        createAt: "2021-11-10T02:11:43.563+00:00",
      },
      {
        id: 6,
        title: "foto 6",
        url: "https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_960_720.jpg",
        createAt: "2021-11-10T02:11:43.558+00:00",
      },
      {
        id: 1,
        title: "foto 1",
        url: "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_960_720.jpg",
        createAt: "2021-11-10T02:11:43.531+00:00",
      },
      {
        id: 4,
        title: "foto 4",
        url: "https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_960_720.jpg",
        createAt: "2021-11-10T02:11:43.548+00:00",
      },
    ],
    category: {
      id: 1,
      title: "casas",
      description: "Casas con todas las comodidades necesarias",
      imageURL:
        "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_960_720.jpg",
      status: "CREATED",
      createAt: "2021-11-10T02:11:43.506+00:00",
    },
    city: {
      id: 1,
      name: "Cartagena",
      country: "Colombia",
      status: "CREATED",
      createAt: "2021-11-10T02:11:44.394+00:00",
    },
    available: true,
    latitude: 10.42036,
    longitude: -75.52488,
    score: 3.3,
  },
  {
    id: 2,
    name: "Casa en Bogotá",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim turpis et ex ullamcorper sodales",
    features: [
      {
        id: 2,
        name: "Agua caliente",
        icon: "FaFire",
        createAt: "2021-11-10T02:11:44.463+00:00",
      },
      {
        id: 1,
        name: "Aire acondicionado",
        icon: "FaSnowflake",
        createAt: "2021-11-10T02:11:44.456+00:00",
      },
      {
        id: 20,
        name: "Extintor",
        icon: "FaFireExtinguisher",
        createAt: "2021-11-10T02:11:44.537+00:00",
      },
      {
        id: 14,
        name: "Elementos basicos",
        icon: "FaToiletPaper",
        createAt: "2021-11-10T02:11:44.513+00:00",
      },
      {
        id: 12,
        name: "Piscina",
        icon: "FaSwimmingPool",
        createAt: "2021-11-10T02:11:44.505+00:00",
      },
      {
        id: 10,
        name: "Wifi",
        icon: "FaWifi",
        createAt: "2021-11-10T02:11:44.496+00:00",
      },
    ],
    images: [
      {
        id: 9,
        title: "foto 9",
        url: "https://cdn.pixabay.com/photo/2016/04/18/08/50/kitchen-1336160_960_720.jpg",
        createAt: "2021-11-10T02:11:43.573+00:00",
      },
      {
        id: 12,
        title: "foto 12",
        url: "https://cdn.pixabay.com/photo/2016/10/13/09/08/travel-1737171_960_720.jpg",
        createAt: "2021-11-10T02:11:43.587+00:00",
      },
      {
        id: 13,
        title: "foto 13",
        url: "https://cdn.pixabay.com/photo/2016/04/18/08/51/bathroom-1336167_960_720.jpg",
        createAt: "2021-11-10T02:11:43.592+00:00",
      },
      {
        id: 14,
        title: "foto 14",
        url: "https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_960_720.jpg",
        createAt: "2021-11-10T02:11:43.596+00:00",
      },
      {
        id: 8,
        title: "foto 8",
        url: "https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_960_720.jpg",
        createAt: "2021-11-10T02:11:43.568+00:00",
      },
      {
        id: 11,
        title: "foto 11",
        url: "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_960_720.jpg",
        createAt: "2021-11-10T02:11:43.583+00:00",
      },
      {
        id: 10,
        title: "foto 10",
        url: "https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_960_720.jpg",
        createAt: "2021-11-10T02:11:43.578+00:00",
      },
    ],
    category: {
      id: 1,
      title: "casas",
      description: "Casas con todas las comodidades necesarias",
      imageURL:
        "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_960_720.jpg",
      status: "CREATED",
      createAt: "2021-11-10T02:11:43.506+00:00",
    },
    city: {
      id: 2,
      name: "Bogotá",
      country: "Colombia",
      status: "CREATED",
      createAt: "2021-11-10T02:11:44.401+00:00",
    },
    available: true,
    latitude: 4.68421,
    longitude: -74.06259,
    score: 2.0,
  },
  {
    id: 3,
    name: "Casa en Medellín",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim turpis et ex ullamcorper sodales",
    features: [
      {
        id: 2,
        name: "Agua caliente",
        icon: "FaFire",
        createAt: "2021-11-10T02:11:44.463+00:00",
      },
      {
        id: 1,
        name: "Aire acondicionado",
        icon: "FaSnowflake",
        createAt: "2021-11-10T02:11:44.456+00:00",
      },
      {
        id: 20,
        name: "Extintor",
        icon: "FaFireExtinguisher",
        createAt: "2021-11-10T02:11:44.537+00:00",
      },
      {
        id: 14,
        name: "Elementos basicos",
        icon: "FaToiletPaper",
        createAt: "2021-11-10T02:11:44.513+00:00",
      },
      {
        id: 10,
        name: "Wifi",
        icon: "FaWifi",
        createAt: "2021-11-10T02:11:44.496+00:00",
      },
    ],
    images: [
      {
        id: 19,
        title: "foto 19",
        url: "https://cdn.pixabay.com/photo/2016/04/18/08/50/kitchen-1336160_960_720.jpg",
        createAt: "2021-11-10T02:11:43.618+00:00",
      },
      {
        id: 21,
        title: "foto 21",
        url: "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_960_720.jpg",
        createAt: "2021-11-10T02:11:43.628+00:00",
      },
      {
        id: 20,
        title: "foto 20",
        url: "https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_960_720.jpg",
        createAt: "2021-11-10T02:11:43.623+00:00",
      },
      {
        id: 18,
        title: "foto 18",
        url: "https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_960_720.jpg",
        createAt: "2021-11-10T02:11:43.614+00:00",
      },
      {
        id: 15,
        title: "foto 15",
        url: "https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_960_720.jpg",
        createAt: "2021-11-10T02:11:43.600+00:00",
      },
      {
        id: 17,
        title: "foto 17",
        url: "https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_960_720.jpg",
        createAt: "2021-11-10T02:11:43.610+00:00",
      },
      {
        id: 16,
        title: "foto 16",
        url: "https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_960_720.jpg",
        createAt: "2021-11-10T02:11:43.605+00:00",
      },
    ],
    category: {
      id: 1,
      title: "casas",
      description: "Casas con todas las comodidades necesarias",
      imageURL:
        "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_960_720.jpg",
      status: "CREATED",
      createAt: "2021-11-10T02:11:43.506+00:00",
    },
    city: {
      id: 3,
      name: "Medellin",
      country: "Colombia",
      status: "CREATED",
      createAt: "2021-11-10T02:11:44.406+00:00",
    },
    available: true,
    latitude: 6.25156,
    longitude: -75.58561,
    score: 5.0,
  },
  {
    id: 4,
    name: "Casa en Cali",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim turpis et ex ullamcorper sodales",
    features: [
      {
        id: 2,
        name: "Agua caliente",
        icon: "FaFire",
        createAt: "2021-11-10T02:11:44.463+00:00",
      },
      {
        id: 1,
        name: "Aire acondicionado",
        icon: "FaSnowflake",
        createAt: "2021-11-10T02:11:44.456+00:00",
      },
      {
        id: 20,
        name: "Extintor",
        icon: "FaFireExtinguisher",
        createAt: "2021-11-10T02:11:44.537+00:00",
      },
      {
        id: 14,
        name: "Elementos basicos",
        icon: "FaToiletPaper",
        createAt: "2021-11-10T02:11:44.513+00:00",
      },
      {
        id: 10,
        name: "Wifi",
        icon: "FaWifi",
        createAt: "2021-11-10T02:11:44.496+00:00",
      },
    ],
    images: [
      {
        id: 22,
        title: "foto 22",
        url: "https://cdn.pixabay.com/photo/2016/10/13/09/08/travel-1737171_960_720.jpg",
        createAt: "2021-11-10T02:11:43.633+00:00",
      },
      {
        id: 24,
        title: "foto 24",
        url: "https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_960_720.jpg",
        createAt: "2021-11-10T02:11:43.644+00:00",
      },
      {
        id: 25,
        title: "foto 25",
        url: "https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_960_720.jpg",
        createAt: "2021-11-10T02:11:43.649+00:00",
      },
      {
        id: 26,
        title: "foto 26",
        url: "https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_960_720.jpg",
        createAt: "2021-11-10T02:11:43.654+00:00",
      },
      {
        id: 23,
        title: "foto 23",
        url: "https://cdn.pixabay.com/photo/2016/04/18/08/51/bathroom-1336167_960_720.jpg",
        createAt: "2021-11-10T02:11:43.639+00:00",
      },
      {
        id: 27,
        title: "foto 27",
        url: "https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_960_720.jpg",
        createAt: "2021-11-10T02:11:43.658+00:00",
      },
      {
        id: 28,
        title: "foto 28",
        url: "https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_960_720.jpg",
        createAt: "2021-11-10T02:11:43.662+00:00",
      },
    ],
    category: {
      id: 1,
      title: "casas",
      description: "Casas con todas las comodidades necesarias",
      imageURL:
        "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_960_720.jpg",
      status: "CREATED",
      createAt: "2021-11-10T02:11:43.506+00:00",
    },
    city: {
      id: 4,
      name: "Cali",
      country: "Colombia",
      status: "CREATED",
      createAt: "2021-11-10T02:11:44.410+00:00",
    },
    available: true,
    latitude: 3.46461,
    longitude: -76.53603,
    score: 5.0,
  },
  {
    id: 5,
    name: "Casa en Barranquilla",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim turpis et ex ullamcorper sodales",
    features: [
      {
        id: 2,
        name: "Agua caliente",
        icon: "FaFire",
        createAt: "2021-11-10T02:11:44.463+00:00",
      },
      {
        id: 1,
        name: "Aire acondicionado",
        icon: "FaSnowflake",
        createAt: "2021-11-10T02:11:44.456+00:00",
      },
      {
        id: 20,
        name: "Extintor",
        icon: "FaFireExtinguisher",
        createAt: "2021-11-10T02:11:44.537+00:00",
      },
      {
        id: 14,
        name: "Elementos basicos",
        icon: "FaToiletPaper",
        createAt: "2021-11-10T02:11:44.513+00:00",
      },
      {
        id: 10,
        name: "Wifi",
        icon: "FaWifi",
        createAt: "2021-11-10T02:11:44.496+00:00",
      },
    ],
    images: [
      {
        id: 30,
        title: "foto 30",
        url: "https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_960_720.jpg",
        createAt: "2021-11-10T02:11:43.671+00:00",
      },
      {
        id: 33,
        title: "foto 33",
        url: "https://cdn.pixabay.com/photo/2016/04/18/08/51/bathroom-1336167_960_720.jpg",
        createAt: "2021-11-10T02:11:43.683+00:00",
      },
      {
        id: 32,
        title: "foto 32",
        url: "https://cdn.pixabay.com/photo/2016/10/13/09/08/travel-1737171_960_720.jpg",
        createAt: "2021-11-10T02:11:43.679+00:00",
      },
      {
        id: 35,
        title: "foto 35",
        url: "https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_960_720.jpg",
        createAt: "2021-11-10T02:11:43.691+00:00",
      },
      {
        id: 31,
        title: "foto 31",
        url: "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_960_720.jpg",
        createAt: "2021-11-10T02:11:43.675+00:00",
      },
      {
        id: 34,
        title: "foto 34",
        url: "https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_960_720.jpg",
        createAt: "2021-11-10T02:11:43.687+00:00",
      },
      {
        id: 29,
        title: "foto 29",
        url: "https://cdn.pixabay.com/photo/2016/04/18/08/50/kitchen-1336160_960_720.jpg",
        createAt: "2021-11-10T02:11:43.667+00:00",
      },
    ],
    category: {
      id: 1,
      title: "casas",
      description: "Casas con todas las comodidades necesarias",
      imageURL:
        "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_960_720.jpg",
      status: "CREATED",
      createAt: "2021-11-10T02:11:43.506+00:00",
    },
    city: {
      id: 5,
      name: "Barranquilla",
      country: "Colombia",
      status: "CREATED",
      createAt: "2021-11-10T02:11:44.414+00:00",
    },
    available: true,
    latitude: 11.01161,
    longitude: -74.8011,
    score: 5.0,
  },
  {
    id: 6,
    name: "Casa en Buenos Aires",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim turpis et ex ullamcorper sodales",
    features: [
      {
        id: 2,
        name: "Agua caliente",
        icon: "FaFire",
        createAt: "2021-11-10T02:11:44.463+00:00",
      },
      {
        id: 1,
        name: "Aire acondicionado",
        icon: "FaSnowflake",
        createAt: "2021-11-10T02:11:44.456+00:00",
      },
      {
        id: 20,
        name: "Extintor",
        icon: "FaFireExtinguisher",
        createAt: "2021-11-10T02:11:44.537+00:00",
      },
      {
        id: 14,
        name: "Elementos basicos",
        icon: "FaToiletPaper",
        createAt: "2021-11-10T02:11:44.513+00:00",
      },
      {
        id: 15,
        name: "Camara de seguridad",
        icon: "FaVideo",
        createAt: "2021-11-10T02:11:44.517+00:00",
      },
      {
        id: 10,
        name: "Wifi",
        icon: "FaWifi",
        createAt: "2021-11-10T02:11:44.496+00:00",
      },
    ],
    images: [
      {
        id: 38,
        title: "foto 38",
        url: "https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_960_720.jpg",
        createAt: "2021-11-10T02:11:43.704+00:00",
      },
      {
        id: 41,
        title: "foto 41",
        url: "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_960_720.jpg",
        createAt: "2021-11-10T02:11:43.715+00:00",
      },
      {
        id: 36,
        title: "foto 36",
        url: "https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_960_720.jpg",
        createAt: "2021-11-10T02:11:43.695+00:00",
      },
      {
        id: 39,
        title: "foto 39",
        url: "https://cdn.pixabay.com/photo/2016/04/18/08/50/kitchen-1336160_960_720.jpg",
        createAt: "2021-11-10T02:11:43.708+00:00",
      },
      {
        id: 42,
        title: "foto 42",
        url: "https://cdn.pixabay.com/photo/2016/10/13/09/08/travel-1737171_960_720.jpg",
        createAt: "2021-11-10T02:11:43.719+00:00",
      },
      {
        id: 40,
        title: "foto 40",
        url: "https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_960_720.jpg",
        createAt: "2021-11-10T02:11:43.711+00:00",
      },
      {
        id: 37,
        title: "foto 37",
        url: "https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_960_720.jpg",
        createAt: "2021-11-10T02:11:43.700+00:00",
      },
    ],
    category: {
      id: 1,
      title: "casas",
      description: "Casas con todas las comodidades necesarias",
      imageURL:
        "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_960_720.jpg",
      status: "CREATED",
      createAt: "2021-11-10T02:11:43.506+00:00",
    },
    city: {
      id: 6,
      name: "Buenos Aires",
      country: "Argentina",
      status: "CREATED",
      createAt: "2021-11-10T02:11:44.417+00:00",
    },
    available: true,
    latitude: -34.66378,
    longitude: -58.31751,
    score: 5.0,
  },
  {
    id: 7,
    name: "Casa en Córdoba",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim turpis et ex ullamcorper sodales",
    features: [
      {
        id: 2,
        name: "Agua caliente",
        icon: "FaFire",
        createAt: "2021-11-10T02:11:44.463+00:00",
      },
      {
        id: 1,
        name: "Aire acondicionado",
        icon: "FaSnowflake",
        createAt: "2021-11-10T02:11:44.456+00:00",
      },
      {
        id: 20,
        name: "Extintor",
        icon: "FaFireExtinguisher",
        createAt: "2021-11-10T02:11:44.537+00:00",
      },
      {
        id: 14,
        name: "Elementos basicos",
        icon: "FaToiletPaper",
        createAt: "2021-11-10T02:11:44.513+00:00",
      },
      {
        id: 10,
        name: "Wifi",
        icon: "FaWifi",
        createAt: "2021-11-10T02:11:44.496+00:00",
      },
    ],
    images: [
      {
        id: 47,
        title: "foto 47",
        url: "https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_960_720.jpg",
        createAt: "2021-11-10T02:11:43.739+00:00",
      },
      {
        id: 43,
        title: "foto 43",
        url: "https://cdn.pixabay.com/photo/2016/04/18/08/51/bathroom-1336167_960_720.jpg",
        createAt: "2021-11-10T02:11:43.723+00:00",
      },
      {
        id: 49,
        title: "foto 49",
        url: "https://cdn.pixabay.com/photo/2016/04/18/08/50/kitchen-1336160_960_720.jpg",
        createAt: "2021-11-10T02:11:43.747+00:00",
      },
      {
        id: 45,
        title: "foto 45",
        url: "https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_960_720.jpg",
        createAt: "2021-11-10T02:11:43.731+00:00",
      },
      {
        id: 44,
        title: "foto 44",
        url: "https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_960_720.jpg",
        createAt: "2021-11-10T02:11:43.727+00:00",
      },
      {
        id: 46,
        title: "foto 46",
        url: "https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_960_720.jpg",
        createAt: "2021-11-10T02:11:43.735+00:00",
      },
      {
        id: 48,
        title: "foto 48",
        url: "https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_960_720.jpg",
        createAt: "2021-11-10T02:11:43.743+00:00",
      },
    ],
    category: {
      id: 1,
      title: "casas",
      description: "Casas con todas las comodidades necesarias",
      imageURL:
        "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_960_720.jpg",
      status: "CREATED",
      createAt: "2021-11-10T02:11:43.506+00:00",
    },
    city: {
      id: 7,
      name: "Córdoba",
      country: "Argentina",
      status: "CREATED",
      createAt: "2021-11-10T02:11:44.421+00:00",
    },
    available: true,
    latitude: -31.41739,
    longitude: -64.18376,
    score: 5.0,
  },
  {
    id: 8,
    name: "Casa en Rosario",
    description:
      "HLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim turpis et ex ullamcorper sodales",
    features: [
      {
        id: 2,
        name: "Agua caliente",
        icon: "FaFire",
        createAt: "2021-11-10T02:11:44.463+00:00",
      },
      {
        id: 1,
        name: "Aire acondicionado",
        icon: "FaSnowflake",
        createAt: "2021-11-10T02:11:44.456+00:00",
      },
      {
        id: 20,
        name: "Extintor",
        icon: "FaFireExtinguisher",
        createAt: "2021-11-10T02:11:44.537+00:00",
      },
      {
        id: 14,
        name: "Elementos basicos",
        icon: "FaToiletPaper",
        createAt: "2021-11-10T02:11:44.513+00:00",
      },
      {
        id: 12,
        name: "Piscina",
        icon: "FaSwimmingPool",
        createAt: "2021-11-10T02:11:44.505+00:00",
      },
      {
        id: 10,
        name: "Wifi",
        icon: "FaWifi",
        createAt: "2021-11-10T02:11:44.496+00:00",
      },
    ],
    images: [
      {
        id: 51,
        title: "foto 51",
        url: "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_960_720.jpg",
        createAt: "2021-11-10T02:11:43.754+00:00",
      },
      {
        id: 54,
        title: "foto 54",
        url: "https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_960_720.jpg",
        createAt: "2021-11-10T02:11:43.766+00:00",
      },
      {
        id: 52,
        title: "foto 52",
        url: "https://cdn.pixabay.com/photo/2016/10/13/09/08/travel-1737171_960_720.jpg",
        createAt: "2021-11-10T02:11:43.758+00:00",
      },
      {
        id: 55,
        title: "foto 55",
        url: "https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_960_720.jpg",
        createAt: "2021-11-10T02:11:43.770+00:00",
      },
      {
        id: 56,
        title: "foto 56",
        url: "https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_960_720.jpg",
        createAt: "2021-11-10T02:11:43.774+00:00",
      },
      {
        id: 50,
        title: "foto 50",
        url: "https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_960_720.jpg",
        createAt: "2021-11-10T02:11:43.750+00:00",
      },
      {
        id: 53,
        title: "foto 53",
        url: "https://cdn.pixabay.com/photo/2016/04/18/08/51/bathroom-1336167_960_720.jpg",
        createAt: "2021-11-10T02:11:43.762+00:00",
      },
    ],
    category: {
      id: 1,
      title: "casas",
      description: "Casas con todas las comodidades necesarias",
      imageURL:
        "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_960_720.jpg",
      status: "CREATED",
      createAt: "2021-11-10T02:11:43.506+00:00",
    },
    city: {
      id: 8,
      name: "Rosario",
      country: "Argentina",
      status: "CREATED",
      createAt: "2021-11-10T02:11:44.425+00:00",
    },
    available: true,
    latitude: -32.95878,
    longitude: -60.62287,
    score: 5.0,
  },
];

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

it("Render Loader recommended", () => {
  // USING STATLESS IN JEST
  const setState = jest.fn();
  useStateMock.mockImplementation(() => [true, setState]);

  const page = 0;
  const { container } = render(
    <MemoryRouter initialEntries={[`/`]}>
      <productsContext.Provider value={{ listProducts: {} }}>
        <loadContext.Provider value={{ page: { page } }}>
          <Recommended />
        </loadContext.Provider>
      </productsContext.Provider>
    </MemoryRouter>
  );
  const isLoaderHere = getByTestId(container, "loaderComponent");
  expect(isLoaderHere).toBeInTheDocument();
});
/*
it("Render cards in recommended", () => {
  // USING STATLESS IN JEST
  const setState = jest.fn();
  useStateMock.mockImplementation(() => [false, setState]);
  const page = 2;
  const fetchRandom = true;
  const requestFailed = false;
  const userData = {
    name: "Juan",
    lastname: "Perez",
    username: "juanperez@jp.com",
    favorites: [1, 2],
  };
  const { container } = render(
    <MemoryRouter initialEntries={[`/`]}>
      <productsContext.Provider value={{ listProducts }}>
        <loadContext.Provider
          value={{ page: { page }, fetchRandom: { fetchRandom } }}
        >
          <Recommended requestFailed={requestFailed} userData={userData} />
        </loadContext.Provider>
      </productsContext.Provider>
    </MemoryRouter>
  );
  const isListHere = getByTestId(container, "listComponent");
  expect(isListHere).toBeInTheDocument();
  const isLeftArrow = getByTestId(container, "leftArrow");
  expect(isLeftArrow).toBeInTheDocument();
});*/
