import { NavLink } from 'react-router-dom';
import logo from '../assets/Real_Ale_API_logo_green.png'

export default function Homepage() {
  return (
    <div className="flex flex-row justify-around h-screen">
      <div className="flex flex-col items-left py-4">
        <h1 className="text-6xl font-bold font-primary text-black border-solid leading-tight">Real Ale API</h1>
        <NavLink
          to="/key" // Path for API Key page
          className="px-8 py-3 text-white bg-green rounded-lg shadow-md text-xl font-semibold hover:bg-neon-dark active:bg-neon-dark transition-colors duration-200 mb-4"
        >
          Get Your API Key
        </NavLink>
        <NavLink
          to="/documentation" // Path for Documentation page
          className="px-8 py-3 text-neon bg-transparent border-2 border-neon rounded-lg shadow-md text-xl font-semibold hover:bg-neon-light active:bg-neon-dark transition-colors duration-200"
        >
          Read the Documentation
        </NavLink>
      </div>
       <img
        alt="Real Ale API logo"
        src={logo}
        className="h-64 w-auto"
      />
    </div>
  );
}
