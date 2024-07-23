import { useState } from "react";
import { X } from "lucide-react";
const CustomerIntakeForm = () => {
  const [customerComplaint, setCustomerComplaint] = useState("");
  const [mechanicNotes, setMechanicNotes] = useState("");
  const [activeDTCs, setActiveDTCs] = useState("");

  const handleSave = () => {
    // Handle save functionality here
  };

  const handleCancel = () => {
    // Handle cancel functionality here
  };

  return (
    <div className="bg-black/60 rounded-lg p-8 w-full max-w-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Customer Intake</h2>
        <button className="text-white hover:text-gray-900">
          <X />
        </button>
      </div>
      <p className="text-white mb-4">Let's gather some basic info</p>
      <div className="mb-4">
        <label className="block text-white mb-2" htmlFor="customer-complaint">
          Enter Customer Complaint
        </label>
        <input
          id="customer-complaint"
          type="text"
          className="w-full p-2  border border-gray-400 rounded-full"
          placeholder="Describe the issues the customer mentioned"
          value={customerComplaint}
          onChange={(e) => setCustomerComplaint(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-white mb-2" htmlFor="mechanic-notes">
          Enter Mechanic Notes
        </label>
        <input
          id="mechanic-notes"
          type="text"
          className="w-full p-2 border border-gray-400 rounded-full"
          placeholder="Share your initial pre-check and what you’d like to check first"
          value={mechanicNotes}
          onChange={(e) => setMechanicNotes(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-white mb-2" htmlFor="active-dtcs">
          Active DTCs
        </label>
        <input
          id="active-dtcs"
          type="text"
          className="w-full p-2 border border-gray-400 rounded-full"
          placeholder="List all active DTCs activate on the vehicle"
          value={activeDTCs}
          onChange={(e) => setActiveDTCs(e.target.value)}
        />
      </div>
      <div className="flex justify-between gap-5">
        <button
          className="px-4 py-2 bg-white w-6/12 text-gray-700 border border-gray-400 rounded-full hover:bg-gray-100"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-black w-6/12 text-white rounded-full hover:bg-gray-800"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CustomerIntakeForm;
