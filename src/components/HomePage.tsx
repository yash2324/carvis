import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const pages = [
    { name: "Settings", path: "/settings" },
    { name: "Vehicle Info", path: "/vehicle-info" },
    { name: "My Plan", path: "/pricing" },
    { name: "Chatbot", path: "/chatbot" },
    { name: "Chatbot Info", path: "/chatbot-info" },
    { name: "Mechanical Dashboard", path: "/screen1" },
    { name: "Service Writer Dashboard", path: "/screen2" },
    { name: "Service Writer Input", path: "/screen3" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Carvis Assignment Screens</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {pages.map((page) => (
              <button
                key={page.path}
                onClick={() => navigate(page.path)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                {page.name}
              </button>
            ))}
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p className="mt-2">
          Made with ❤️ by{" "}
          <a href="https://github.com/yash2324" target="__blank">
            Yash Gupta
          </a>
          {" , "}
          <a href="https://github.com/prajjwal2-3" target="__blank">
            Prajjwal Sharma
          </a>
          {" , "}
          <a href="https://github.com/adarshsingh9540" target="__blank">
            Adarsh Singh
          </a>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
