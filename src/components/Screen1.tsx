import car from "../assets/car.svg";
import quickChat from "../assets/quickChat.svg";
import Carvis from "../assets/Carvis.png";
import settingSide from "../assets/settingsSide.svg";

export default function Screen1() {
  // Mock data
  const recentCompletedJobs = [
    { car: "Ford Explorer 2020", issue: "transmission leak" },
    { car: "Toyota Corolla 2018", issue: "engine oil" },
    { car: "GMC Sierra 2015", issue: "brake fluid" },
    { car: "Toyota Prius 2023", issue: "change tires" },
    { car: "Ford Fusion 2015", issue: "electrical wiring" },
  ];

  const newlyAssignedVehicles = [
    {
      id: "01",
      car: "BMW M3 2020",
      issue: "Engine fault suspected, misfire sounds at high speeds.",
      image: "./car1.jpg",
    },
    {
      id: "02",
      car: "Ford Expedition 2019",
      issue: "A/C leaking fluid, might be a broken hose.",
      image: "./car2.jpg",
    },
  ];

  const vehiclesOnHold = [
    {
      id: "01",
      car: "Ford Mustang 2019",
      issue: "Waiting for transmission part",
      image: "./car3.jpg",
    },
    {
      id: "02",
      car: "Honda Accord 2018",
      issue: "On hold for customer approval",
      image: "./car4.jpg",
    },
  ];

  const guidesAndNews = [
    {
      title: "Common Repairs",
      author: "Steve Bob",
      image: "./car6.jpg",
    },
    {
      title: "How to use this tool",
      author: "Bob Coupes",
      image: "./car7.jpg",
    },
    {
      title: "New Ford update",
      author: "James Chris",
      image: "./car8.jpg",
    },
  ];

  const toolsSearch = [
    {
      name: "Supercharger XYZ",
      status: "Available",
      image: "./car9.jpg",
    },
    { name: "Turbo 2.3", status: "Request", image: "./car10.jpg" },
    {
      name: "Engine Oil",
      status: "Available",
      image: "./car11.jpg",
    },
    { name: "Brake", status: "Request", image: "./car12.jpg" },
  ];

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-grow bg-gray-100 overflow-hidden">
        <div className="bg-[#7F7F7F] w-[24%] flex flex-col">
          <div className="bg-[#111111] mx-3 rounded-lg mt-2 text-white px-3 py-1 cursor-pointer text-center">
            <h1 className="text-[16px] font-bold font-body">
              Diagnose New Vehicle
            </h1>
          </div>

          <div className="flex justify-between p-3">
            <div className="text-center cursor-pointer">
              <div className="rounded-full w-10 h-10 mx-auto">
                <img src={quickChat} alt="Quick Chat" />
              </div>
              <span className="text-[12px] font-header">Quick Chat</span>
            </div>
            <div className="text-center cursor-pointer">
              <div className="rounded-full w-10 h-10 mx-auto">
                <img src={settingSide} alt="setting" />
              </div>
              <span className="text-[12px] font-header">Settings</span>
            </div>
          </div>

          <div className="h-4/6 bg-white m-2 p-5 rounded-lg  overflow-y-auto">
            <h3 className="font-bold  text-2xl h-1/6 font-header">
              Recent Vehicles
            </h3>
            <section className="flex flex-col justify-between h-4/6">
              {recentCompletedJobs.map((job, index) => (
                <p key={index} className="mb-2 text-base font-medium">
                  {job.car} -{job.issue}
                </p>
              ))}
            </section>
            <p className="text-sm text-black mt-7">more vehicles...</p>
          </div>

          <div className="p-3 mt-auto">
            <button className="border-[1px] border-white font-body w-full p-2 hover:bg-gray-700 mb-2 text-white rounded text-sm">
              View FAQ for Carvis
            </button>
            <button className="border-[1px] border-white font-body w-full p-2 hover:bg-gray-700 mb-2 text-white rounded text-sm">
              Ask other mechanics (Link to WhatsApp)
            </button>
          </div>
        </div>

        <div className="flex-grow p-3 overflow-y-auto">
          <div className="h-[91vh] bg-[#7F7F7F] rounded-lg flex flex-col gap-4 p-3">
            <p className="text-lg font-semibold flex items-center">
              <img src={car} alt="setting" className="w-8 mr-2" />
              <p className="font-body">MyMechanical Dashboard</p>
            </p>
            <section className="flex gap-4">
              <div className="rounded-xl w-6/12 bg-white p-3 gap-2 flex flex-col">
                <p className="text-lg font-medium">My Bay</p>
                <p className="font-medium text-black/80 text-sm">
                  Newly Assigned Vehicles
                </p>
                {newlyAssignedVehicles.map((vehicle, index) => (
                  <section key={index} className="flex my-1">
                    <img src={vehicle.image} alt="" className="w-3/12" />
                    <section className="w-8/12 flex flex-col px-3 py-1 justify-between">
                      <p className="font-bold text-sm">{vehicle.car}</p>
                      <p className="font-medium text-black/60 text-xs">
                        {vehicle.issue}
                      </p>
                    </section>
                    <p className="w-1/12 font-medium text-black/60 py-1 text-xs">
                      {vehicle.id}
                    </p>
                  </section>
                ))}
                <p className="font-medium text-black/80 text-sm">
                  Vehicles on hold
                </p>
                {vehiclesOnHold.map((vehicle, index) => (
                  <section key={index} className="flex my-1">
                    <img src={vehicle.image} alt="" className="w-3/12" />
                    <section className="w-8/12 flex flex-col px-3 py-2 justify-between">
                      <p className="font-bold text-sm">{vehicle.car}</p>
                      <p className="font-medium text-black/60 text-xs">
                        {vehicle.issue}
                      </p>
                    </section>
                    <p className="w-1/12 font-medium text-black/60 py-1 text-xs">
                      {vehicle.id}
                    </p>
                  </section>
                ))}
              </div>
              <div className="w-6/12 flex flex-col gap-4">
                <section>
                  <p className="font-medium text-black/80 mb-2 text-sm">
                    Guides & News
                  </p>
                  <section className="w-full flex flex-row gap-3">
                    <section className="bg-white rounded-2xl h-48 w-7/12 p-2">
                      <img
                        src={"../../public/car5.jpg"}
                        alt=""
                        className="h-2/3 w-full object-cover"
                      />
                      <section className="flex flex-col justify-between flex-grow h-1/3">
                        <p className="font-semibold text-sm my-1">
                          New tips for hybrids
                        </p>
                        <p className="text-xs">John Collins</p>
                      </section>
                    </section>
                    <section className="w-5/12 flex flex-col gap-2 h-48">
                      {guidesAndNews.map((guide, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-xl flex flex-row overflow-hidden p-1 h-1/3"
                        >
                          <div className="w-8/12 flex flex-col justify-between">
                            <p className="text-xs font-medium">{guide.title}</p>
                            <p className="text-[10px]">{guide.author}</p>
                          </div>
                          <img
                            src={guide.image}
                            alt=""
                            className="w-4/12 object-cover"
                          />
                        </div>
                      ))}
                    </section>
                  </section>
                </section>
                <section className="bg-white rounded-xl p-3">
                  <input
                    type="text"
                    className="font-medium bg-black/20 p-1 w-full outline-none rounded-lg text-sm"
                    placeholder="Tool Search"
                  />
                  <section className="flex flex-col gap-2 mt-2">
                    {toolsSearch.map((tool, index) => (
                      <div
                        key={index}
                        className="rounded-xl border-b bg-white flex flex-row py-1"
                      >
                        <img src={tool.image} alt="" className="w-1/6" />
                        <section className="text-sm font-medium flex px-3 flex-col w-8/12">
                          <p>{tool.name}</p>
                          <span className="text-xs text-black/80">
                            Conversation Preview...
                          </span>
                        </section>
                        <section className="text-xs font-medium text-blue-500 w-3/12 text-center flex items-center">
                          {tool.status === "Available" ? (
                            <section className="flex items-center">
                              <section className="bg-green-500 rounded-full w-1 h-1 mx-1"></section>
                              {tool.status}
                            </section>
                          ) : (
                            <button className="mx-auto bg-black/60 text-white rounded-md p-1 text-[10px]">
                              Request
                            </button>
                          )}
                        </section>
                      </div>
                    ))}
                  </section>
                </section>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="bg-[#111111] text-white p-2 text-center">
        <img className="h-8 mx-auto" src={Carvis} alt="logo" />
      </div>
    </div>
  );
}
