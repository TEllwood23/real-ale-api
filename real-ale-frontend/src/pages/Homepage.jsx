import { NavLink } from 'react-router-dom';
import logo from '../assets/Real_Ale_API_logo_green.png'

export default function Homepage() {
  return (
    <div className="flex flex-col mx-10 lg:flex-row lg:justify-around h-screen lg:mx-20:mx-40">
      <div className="flex flex-col items-left py-4 lg:py-12">
        <h1 className="text-6xl md:text-8xl text-center font-bold font-primary text-black border-solid leading-tight mb-4">Real Ale API</h1>
        <NavLink
          to="/key" // Path for API Key page
          className="px-8 py-3 text-white bg-green rounded-lg shadow-md text-lg sm:text-xl md:text-3xl text-center font-semibold hover:bg-neon-dark active:bg-neon-dark transition-colors duration-200 mb-6"
        >
          Get Your API Key
        </NavLink>
        <NavLink
          to="/documentation" // Path for Documentation page
          className="px-8 py-3 text-neon bg-transparent border-2 border-neon rounded-lg shadow-md text-lg sm:text-xl md:text-3xl text-center font-semibold hover:bg-neon-light active:bg-neon-dark transition-colors duration-200 justify"
        >
          Read the Documentation
        </NavLink>
      </div>
       <img
        alt="Real Ale API logo"
        src={logo}
        className="max-w-full h-auto lg:h-80 lg:mt-4 lg:w-auto"
      />
    </div>
  );
}
