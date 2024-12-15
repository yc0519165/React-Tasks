import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const navItems = [
    {
      text: "Counter App",
      path: "/counterApp",
    },
    {
      text: "Todo App",
      path: "/todoApp",
    },
    {
      text: "Fetch Data From api",
      path: "/fetchDataApi",
    },
    {
      text: "Toggle Visibility",
      path: "/toggleVisibility",
    },
    {
      text: "Search Filter",
      path: "/searhFilter",
    },
    {
      text: "Color Switcher",
      path: "/colorswitcher",
    },
    {
      text: "According Components",
      path: "/accordingComponents",
    },
    {
      text: "Image Carousel",
      path: "/imageCarousel",
    },
    {
      text: "Weather App",
      path: "/weatherApp",
    },
    {
      text: "Click Tracker",
      path: "/clickTracker",
    },
    {
      text: "Simple Addition App",
      path: "/simpleAdditionApp",
    },
  ];

  const onHandelPath = (path) => {
    navigate(path);
  };

  const filteredItems = navItems.filter((item) =>
    item.text.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <div className="flex flex-col w-[25%] border-r h-[90vh] text-white">
        <div className="h-[15%] border-b w-full flex items-center p-5 justify-between">
          <div
            onClick={() => navigate("/")}
            className="flex items-center cursor-pointer gap-5"
          >
            <img
              className="h-16 w-16 rounded-full object-cover"
              src="./images.jpg"
              alt=""
            />
            <p className="text-xl font-medium">Irina Doe</p>
          </div>
        </div>
        <div>
          <div className="p-5 flex items-center border-b">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="outline-none border-b bg-transparent p-3 text-gray-500"
              type="text"
              placeholder="Search task..."
            />
          </div>
        </div>
        <div className="h-full p-5 overflow-scroll scrollbar-hide">
          <div className="flex flex-col gap-5 w-full">
            {filteredItems.map((items, id) => {
              return (
                <>
                  <button
                    key={id}
                    onClick={() => onHandelPath(items.path)}
                    className="w-full flex items-center justify-between gap-5 text-lg"
                  >
                    <p
                      className={active === items.text ? "border-b" : ""}
                      onClick={() => setActive(items.text)}
                    >
                      {items.text}
                    </p>
                  </button>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
