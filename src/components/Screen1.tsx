import { Settings, MessageSquare, CarFront } from "lucide-react";

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
      image: "../../public/car1.jpg",
    },
    {
      id: "02",
      car: "Ford Expedition 2019",
      issue: "A/C leaking fluid, might be a broken hose.",
      image: "../../public/car2.jpg",
    },
  ];

  const vehiclesOnHold = [
    {
      id: "01",
      car: "Ford Mustang 2019",
      issue: "Waiting for transmission part",
      image: "../../public/car3.jpg",
    },
    {
      id: "02",
      car: "Honda Accord 2018",
      issue: "On hold for customer approval",
      image: "../../public/car4.jpg",
    },
  ];

  const guidesAndNews = [
    {
      title: "Common Repairs",
      author: "Steve Bob",
      image: "../../public/car6.jpg",
    },
    {
      title: "How to use this tool",
      author: "Bob Coupes",
      image: "../../public/car7.jpg",
    },
    {
      title: "New Ford update",
      author: "James Chris",
      image: "../../public/car8.jpg",
    },
  ];

  const toolsSearch = [
    {
      name: "Supercharger XYZ",
      status: "Available",
      image: "../../public/car9.jpg",
    },
    { name: "Turbo 2.3", status: "Request", image: "../../public/car10.jpg" },
    {
      name: "Engine Oil",
      status: "Available",
      image: "../../public/car11.jpg",
    },
    { name: "Brake", status: "Request", image: "../../public/car12.jpg" },
  ];

  return (
    <>
    <div className="flex  bg-gray-100">
      <div className="w-1/4 bg-black/60 p-4 flex flex-col">
        <button className="bg-black text-white py-2 px-4 rounded mb-4">
          Diagnose New Vehicle
        </button>
        <div className="flex justify-between mb-4">
          <button className="flex items-center">
            <MessageSquare className="mr-2" />
            Quick Chat
          </button>
          <button className="flex items-center">
            <Settings className="mr-2" />
            Settings
          </button>
        </div>
        <div className="h-4/6 bg-white  p-5 rounded-lg  overflow-y-auto">
          <h3 className="font-bold mb-2 text-2xl h-1/6">Recent Completed</h3>
          <section className="flex flex-col justify-between h-4/6">
            {recentCompletedJobs.map((job, index) => (
              <p key={index} className="mb-2 text-base font-medium">
                {job.car} - {job.issue}
              </p>
            ))}
          </section>
          <p className="text-sm text-blue-500">more vehicles...</p>
        </div>
        <button className="bg-transparent border-2 border-white py-2 px-4 rounded mt-4">
          View FAQ for Carvis
        </button>
        <button className="bg-transparent border-2 border-white py-2 px-4 rounded mt-4">
          Ask other mechanics (Link to WhatsApp)
        </button>
      </div>

      <div className="flex-grow p-4 ">
        <div className="bg-black/60 rounded-lg flex flex-col gap-8 p-5">
          <p className="text-lg font-semibold flex">
            <CarFront />
            My Mechanical Dashboard
          </p>
          <section className="flex gap-6">
            <div className="rounded-xl w-6/12 bg-white p-4 gap-3 flex flex-col">
              <p className="text-xl font-medium">My Bay</p>
              <p className="font-medium text-black/80">
                Newly Assigned Vehicles
              </p>
              {newlyAssignedVehicles.map((vehicle, index) => (
                <section key={index} className="flex my-2">
                  <img src={vehicle.image} alt="" className="w-3/12" />
                  <section className="w-8/12 flex flex-col px-5 py-3 justify-between ">
                    <p className="font-bold text-lg">{vehicle.car}</p>

                    <p className="font-medium text-black/60">{vehicle.issue}</p>
                  </section>
                  <p className="w-1/12 font-medium text-black/60 py-4">
                    {vehicle.id}
                  </p>
                </section>
              ))}
              <p className="font-medium text-black/80">Vehicles on hold</p>
              {vehiclesOnHold.map((vehicle, index) => (
                <section key={index} className="flex my-2">
                  <img src={vehicle.image} alt="" className="w-3/12" />
                  <section className="w-8/12 flex flex-col px-5 py-6 justify-between ">
                    <p className="font-bold text-lg">{vehicle.car}</p>

                    <p className="font-medium text-black/60">{vehicle.issue}</p>
                  </section>
                  <p className="w-1/12 font-medium text-black/60 py-4">
                    {vehicle.id}
                  </p>
                </section>
              ))}
            </div>
            <div className="w-6/12  flex flex-col gap-7">
              <section>
                <p className="font-medium text-black/80 mb-4">Guides & News</p>
                <section className="w-full flex flex-row gap-5">
                  <section className="bg-white rounded-2xl h-60 w-7/12 p-2">
                    <img src={"../../public/car5.jpg"} alt="" />
                    <section className="flex flex-col justify-between flex-grow  h-[40%]">
                      <p className="font-semibold text-lg my-1">
                        New tips for hybrids
                      </p>
                      <p className="">John Collins</p>
                    </section>
                  </section>
                  <section className="w-5/12 flex flex-col gap-3 h-60 ">
                    {guidesAndNews.map((guide, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl flex flex-row overflow-hidden p-1.5 h-2/6"
                      >
                        <div className="w-8/12 flex flex-col justify-between">
                          <p className="text-base font-medium">{guide.title}</p>
                          <p className="text-xs">{guide.author}</p>
                        </div>
                        <img src={guide.image} alt="" className="w-4/12" />
                      </div>
                    ))}
                  </section>
                </section>
              </section>
              <section className="bg-white rounded-xl p-7">
                <input
                  type="text"
                  className="font-medium bg-black/20 p-2 w-full outline-none rounded-lg"
                  placeholder="Tool Search"
                />
                <section className="flex flex-col gap-3">
                  {toolsSearch.map((tool, index) => (
                    <div
                      key={index}
                      className=" rounded-xl bg-white flex flex-row my-1 py-2 "
                    >
                      <img src={tool.image} alt="" className="" />
                      <section className="text-base font-medium flex px-5 flex-col w-8/12">
                        <p>{tool.name}</p>
                        <span className="text-sm text-black/80">
                          Conversation Preview...
                        </span>
                      </section>
                      <section className="text-base font-medium text-blue-500 w-32 text-center flex items-center">
                     {tool.status === "Available" ?
                    <section className="flex items-center">
                         <section className="bg-green-500 rounded-full w-2 h-2 mx-3"></section>
                         {tool.status}
                    </section> 
                     : 
                     <button className="mx-auto bg-black/60 text-white rounded-md p-1">Request</button>
                     }
                        
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
    <div className="w-full h-12 bg-black/80 text-white font-bold text-3xl text-center">CARVIS</div>
    </>
  );
}
