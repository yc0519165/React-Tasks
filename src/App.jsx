import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Body from "./pages/Body";
import CounterApp from "./pages/CounterApp";
import TodoList from "./pages/TodoList";
import FetchApi from "./pages/FetchApi";
import ToggleVisibility from "./pages/ToggleVisibility";
import SearchFilter from "./pages/SearchFilter";
import ColorSwitcher from "./pages/ColorSwitcher";
import AccordionCompo from "./pages/AccordionCompo";
import ImageCarousel from "./pages/ImageCarousel";
import WeatherApp from "./pages/WeatherApp";
import ClickTacker from "./pages/ClickTacker";
import SimpleAddition from "./pages/SimpleAddition";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/counterApp",
        element: <CounterApp />,
      },
      {
        path: "/todoApp",
        element: <TodoList />,
      },
      {
        path: "/fetchDataApi",
        element: <FetchApi />,
      },
      {
        path: "/toggleVisibility",
        element: <ToggleVisibility />,
      },
      {
        path: "/searhFilter",
        element: <SearchFilter />,
      },
      {
        path: "/colorswitcher",
        element: <ColorSwitcher />,
      },
      {
        path: "/accordingComponents",
        element: <AccordionCompo />,
      },
      {
        path: "/imageCarousel",
        element: <ImageCarousel />,
      },
      {
        path: "/weatherApp",
        element: <WeatherApp />,
      },
      {
        path: "/clickTracker",
        element: <ClickTacker />,
      },
      {
        path: "/simpleAdditionApp",
        element: <SimpleAddition />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
