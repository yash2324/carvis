import car from "../assets/car.svg";
import quickChat from "../assets/quickChat.svg";
import Carvis from "../assets/Carvis.png";
import settingSide from "../assets/settingsSide.svg";
const Sidebar = () => {
  return (
    <div className="bg-[#7F7F7F] h-screen w-[24%] flex flex-col">
      <div className="bg-[#111111] mx-4 rounded-lg mt-2 text-white px-4 py-2 cursor-pointer hover:brightness-200 text-center">
        <h1 className="text-[18px] font-bold font-body">
          Diagnose New Vehicle
        </h1>
      </div>

      <div className="flex justify-around p-4">
        <div className="text-center  hover:underline  cursor-pointer">
          <div className=" rounded-full w-12 h-12  mx-auto">
            <img src={quickChat} alt="Quick Chat" />
          </div>
          <span className="text-[14px] font-header">Quick Chat</span>
        </div>
        <div className="text-center  hover:underline cursor-pointer">
          <div className="rounded-full w-12 h-12  mx-auto">
            <img src={car} alt="car" />
          </div>
          <span className="text-[14px] font-header">MyGarage Dashboard</span>
        </div>
        <div className="text-center  hover:underline cursor-pointer">
          <div className=" rounded-full w-12 h-12  mx-auto">
            <img src={settingSide} alt="setting" />
          </div>
          <span className="text-[14px] font-header">Settings</span>
        </div>
      </div>

      <div className="bg-white m-4 p-4 h-[24rem]">
        <h2 className="mb-5 font-header ">Recent Vehicles</h2>
        <ul>
          {[1, 2, 3, 4, 5].map((num) => (
            <li
              key={num}
              className="mb-3 font-body font-semibold cursor-pointer hover:underline"
            >
              vehicle {num}
            </li>
          ))}
        </ul>
        <div className="mt-2 font-body cursor-pointer hover:underline">
          more vehicles....
        </div>
      </div>

      <div className="p-4 mt-auto">
        <button className="border-[1px] border-white font-body w-full p-2 mb-2 text-white rounded hover:bg-gray-700">
          View FAQ for Carvis
        </button>
        <button className="border-[1px] border-white font-body w-full p-2 mb-2 text-white rounded hover:bg-gray-700">
          Ask other mechanics (Link to WhatsApp)
        </button>
      </div>

      <div className="bg-[#111111] text-white p-4 text-center">
        <img className="w-44 mx-auto" src={Carvis} alt="logo" />
      </div>
    </div>
  );
};

export default Sidebar;
