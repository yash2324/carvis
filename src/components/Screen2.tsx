import { Settings, MessageSquare, CarFront, Play } from "lucide-react";
import { MoreVertical, UserPlus } from "lucide-react";
export default function Screen2() {
  const recentCompletedJobs = [
    { car: "Ford Explorer 2020", issue: "transmission leak" },
    { car: "Toyota Corolla 2018", issue: "engine oil" },
    { car: "GMC Sierra 2015", issue: "brake fluid" },
    { car: "Toyota Prius 2023", issue: "change tires" },
    { car: "Ford Fusion 2015", issue: "electrical wiring" },
  ];
  const appointments = [
    { name: "Steve Demps", time: "10AM", vehicle: "BMW M3 2023" },
    { name: "Roger James", time: "11 AM", vehicle: "Ford Explorer 2024" },
    { name: "Valterri Bottas", time: "11:30 AM", vehicle: "Mercedes C43 2015" },
    { name: "Roger Dug", time: "2 PM", vehicle: "Honda Civic 2012" },
    { name: "Alex David", time: "4 PM", vehicle: "Chevy Malibu 2020" },
  ];

  const toolsSearch = [
    {
      name: "Steve Rogers",
      status: "Available",
      skill: "A tech",
      image: "../../public/car13.jpg",
    },
    {
      name: "Mike Bob",
      status: "Request",
      skill: "Master Tech",
      image: "../../public/car14.jpg",
    },
    {
      name: "James Rob",
      status: "Available",
      skill: "B tech",
      image: "../../public/car15.jpg",
    },
    {
      name: "Mike Green",
      status: "Request",
      skill: "Lube Tech",
      image: "../../public/car16.jpg",
    },
  ];
  return (
    <>
      <div className="flex  bg-gray-100">
        <div className="w-1/4 bg-black/60 p-4 flex min-h-screen flex-col">
          <button className="bg-black text-white py-2 px-4 rounded mb-4">
            New Customer Vehicle
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
            <h3 className="font-bold mb-2 text-2xl h-1/6">Recent Vehicles</h3>
            <section className="flex flex-col justify-between h-4/6">
              {recentCompletedJobs.map((_job, index) => (
                <p key={index} className="mb-2 text-base font-medium">
                  Vehicle {index + 1}
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
              My Shop Manager Dashboard
            </p>
            <section className="flex gap-6">
              <div className="rounded-xl w-6/12 bg-white p-4 gap-3 flex flex-col">
                <p className="text-4xl font-medium">Current Appointments</p>
                <div className="bg-white rounded-lg shadow p-4 max-w-md">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Appointments</h2>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 mr-2">Notes</span>
                      <span className="text-sm text-gray-500">Assign To</span>
                    </div>
                  </div>
                  <ul>
                    {appointments.map((appointment, index) => (
                      <li
                        key={index}
                        className="flex items-center py-3 border-b last:border-b-0"
                      >
                        <div className="bg-black/30  rounded-full mr-2 w-7 h-7 flex justify-center items-center">
                          <Play size={20} />
                        </div>
                        <div className="flex-grow px-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-black/80">
                              {appointment.name} - {appointment.time}
                            </span>
                            <div className="flex items-center">
                              <MoreVertical
                                className="text-black mr-10"
                                size={20}
                              />
                              <UserPlus className="text-black" size={20} />
                            </div>
                          </div>
                          <span className="text-sm text-gray-500">
                            {appointment.vehicle}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="w-6/12  flex flex-col gap-7">
                <section>
                  <p className="font-medium text-black/80 text-lg mb-4">
                    Job Status Tracking
                  </p>
                  <section className="flex justify-between gap-7">
                    <div className="bg-blue-200 border-blue-400 border rounded-full flex justify-center items-center w-4/12 h-20">
                      <p className="text-black font-medium text-xl">
                        <span className="text-3xl">3</span> Waiting
                      </p>
                    </div>
                    <div className="bg-blue-200 border-blue-400 border rounded-full flex justify-center items-center w-4/12 h-20">
                      <p className="text-black font-medium text-xl">
                        <span className="text-3xl">5</span> In Servive
                      </p>
                    </div>
                    <div className="bg-blue-200 border-blue-400 border rounded-full flex justify-center items-center w-4/12 h-20">
                      <p className="text-black font-medium text-xl">
                        <span className="text-3xl">10</span> Completed
                      </p>
                    </div>
                  </section>
                </section>
                <section className="bg-white rounded-xl p-7">
                  <input
                    type="text"
                    className="font-medium bg-black/20 p-2 w-full outline-none rounded-lg"
                    placeholder="Available Mechanics"
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
                            {tool.skill}
                          </span>
                        </section>
                        <section className="text-base font-medium text-blue-500 w-32 text-center flex items-center">
                          {tool.status === "Available" ? (
                            <section className="flex items-center">
                              <section className="bg-green-500 rounded-full w-2 h-2 mx-3"></section>
                              {tool.status}
                            </section>
                          ) : (
                            <button className="mx-auto bg-black/60 text-white rounded-md p-1">
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
      <div className="w-full h-12 bg-black/80 text-white font-bold text-3xl text-center">
        CARVIS
      </div>
    </>
  );
}
