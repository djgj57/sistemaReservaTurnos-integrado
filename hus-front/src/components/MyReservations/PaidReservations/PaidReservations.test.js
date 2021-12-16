
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render} from "@testing-library/react";
import { MemoryRouter } from "react-router";
import PaidReservations from "./PaidReservations"
afterEach(cleanup);
const product = {
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
};

it("Render Paid Reservations", () => {
  
  const  paidReservationsContainer = render(
    <MemoryRouter initialEntries={[`/my-reservations`]}>
      <PaidReservations data={[product]}/>
    </MemoryRouter>
  );
  expect (paidReservationsContainer.container).toHaveTextContent("Reservas pagadas");
});