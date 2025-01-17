import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Documentation() {
  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Real Ale API Documentation - IN DEVELOPMENT</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Overview</h2>
        <p>
          The Real Ale API provides access to detailed information about breweries, beers, and beer styles, and filter them based on different attributes.
          This API is built using **Python** and **Flask** and deployment using AWS Amplify and ELastic Beanstalk is in development.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Base URL</h2>
        <p className="text-gray-700">The base URL for accessing the API is:</p>
        <code className="block bg-gray-200 p-2">http://DEPLOYEDDOMAINTOBESPECIFIED/api</code>
      </div>

      <AccordionSection title="Endpoints" content={apiEndpoints} />
    </div>
  );
}

// Accordion Component

function AccordionSection({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left bg-blue-500 text-white p-2 rounded-md"
      >
        {title}
      </button>
      {isOpen && (
        <div className="mt-2 p-2 bg-gray-100 rounded-md">
          {content}
        </div>
      )}
    </div>
  );
}

AccordionSection.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

const apiEndpoints = (
  <div>
    <h3 className="font-semibold">1. Get All Breweries</h3>
    <p><strong>GET</strong> /api/breweries</p>
    <p>Returns a list of all breweries. Can be filtered by name, location, or county using query parameters.</p>

    <h3 className="font-semibold">2. Get Brewery by ID</h3>
    <p><strong>GET</strong> /api/breweries/{`<string:brewery_id>`}</p>
    <p>Returns details of a specific brewery based on its ID.</p>

    <h3 className="font-semibold">3. Get All Beers</h3>
    <p><strong>GET</strong> /api/beers</p>
    <p>Returns a list of all beers. Filters available include name, style, ABV, brewery ID, and dietary information (e.g., vegan, vegetarian, unfined).</p>

    <h3 className="font-semibold">4. Get Beer by ID</h3>
    <p><strong>GET</strong> /api/beers/{`<string:beer_id>`}</p>
    <p>Returns details of a specific beer based on its ID.</p>

    <h3 className="font-semibold">5. Get All Beer Styles</h3>
    <p><strong>GET</strong> /api/styles</p>
    <p>Returns a list of all beer styles. Can be filtered by style name.</p>

    <h3 className="font-semibold">6. Get Beer Style by ID</h3>
    <p><strong>GET</strong> /api/styles/{`<string:style_id>`}</p>
    <p>Returns details of a specific beer style based on its ID.</p>

    <h3 className="font-semibold">7. Get Subtypes by Beer Style ID</h3>
    <p><strong>GET</strong> /api/styles/{`<string:style_id>`}/subtypes</p>
    <p>Returns all subtypes associated with a given beer style.</p>

    <h3 className="font-semibold">8. Get Beer Subtype by ID</h3>
    <p><strong>GET</strong> /api/styles/{`<string:style_id>`}/subtypes/{`<string:subtype_id>`}</p>
    <p>Returns details of a specific beer subtype based on its ID.</p>
  </div>
);
