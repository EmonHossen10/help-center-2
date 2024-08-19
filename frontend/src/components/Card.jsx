import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Card = ({ query }) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://backend-rho-roan.vercel.app/services")
      .then((res) => res.json())
      .then((services) => setServices(services));
  }, []);

  // filter here
  const filterCountry = services.filter((service) =>
    service.title.toLowerCase().includes(query)
  );
  console.log(filterCountry);

  return (
    <div>
      <div className="grid grid-cols-2  my-5  gap-10 items-center justify-center w-10/12 mx-auto">
        {services
          .filter((service) => service.title.toLowerCase().includes(query))
          .map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
      </div>
    </div>
  );
};

export default Card;
