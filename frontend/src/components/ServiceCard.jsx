/* eslint-disable react/prop-types */

const ServiceCard = ({ service }) => {
  const { title, description } = service;
  return (
    <div className="bg-gray-200 w-full border border-gray-400  rounded-lg shadow-md max-w-sm mx-auto">
      <h2 className="text-xl p-6 font-bold text-black mb-2 border-b-2 border-gray-400 pb-2">
        {title}
      </h2>
      <p className="text-black p-6 text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;
