import { Settings, MessageSquare,CarFront,Play } from "lucide-react";
import { MoreVertical, ChevronRight, UserPlus } from 'lucide-react';
import CustomerIntakeForm from "./CustomerIntakeForm";

export default function Screen3() {
    const recentCompletedJobs = [
        { car: "Ford Explorer 2020", issue: "transmission leak" },
        { car: "Toyota Corolla 2018", issue: "engine oil" },
        { car: "GMC Sierra 2015", issue: "brake fluid" },
        { car: "Toyota Prius 2023", issue: "change tires" },
        { car: "Ford Fusion 2015", issue: "electrical wiring" },
      ];
  return (
    <div className="flex  bg-gray-100">
        <div className="w-1/4 bg-black/60 p-4 flex min-h-screen flex-col">
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
          <h3 className="font-bold mb-2 text-2xl h-1/6">Recent Vehicles</h3>
          <section className="flex flex-col justify-between h-4/6">
            {recentCompletedJobs.map((job, index) => (
              <p key={index} className="mb-2 text-base font-medium">
               Vehicle {index+1}
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
      <div className="p-10 w-3/4">
        <section className="flex gap-2  w-full border-b-4 pb-4">
            <img src={'../../public/car17.jpg'} alt="" />
            <section>
                <p className="text-2xl font-bold">BMW M3 2020</p>
                <p className="font-medium text-black/60">Miles: 50,000</p>
                <p className="font-medium text-black/60">Last Service Date: 05/2024</p>
                <p className="font-medium text-black/60">Engine Type: V6</p>
            </section>
        </section>
       <section className="flex flex-col justify-center items-center mt-10">
       <CustomerIntakeForm/>
       <div className="mt-16 w-full">
        <input type="text" name="" id="" placeholder="Type your message here..." className="outline-none w-full border-[12px] p-2 border-black/30"/>
       </div>
       </section>
      </div>
    </div>
  )
}
