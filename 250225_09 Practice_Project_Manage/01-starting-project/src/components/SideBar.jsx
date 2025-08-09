import { FaHome, FaCog, FaUser } from "react-icons/fa";

function SideBar() {
  return (
    <div className="fixed left-0 top-0 w-64 h-screen bg-gray-800 text-white overflow-y-auto">
      <h2 className="text-2xl font-bold p-4 border-b border-gray-700">YOUR PROJECTS</h2>
      <ul className="space-y-1">
        <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
          <FaHome className="mr-2" /> Learning React
        </li>
        <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
          <FaCog className="mr-2" /> Mastering React
        </li>
        <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
          <FaUser className="mr-2" /> Profile
        </li>
      </ul>
    </div>
  );
}
export default SideBar;