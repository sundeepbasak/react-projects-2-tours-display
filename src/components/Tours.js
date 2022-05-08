import React from "react";
import TourItem from "./TourItem";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="tracking-wide pb-2 border-b-2 font-semibold text-center text-white text-2xl my-4">
        Explore Tours
      </div>
      <div>
        {tours.map((tour) => {
          return <TourItem key={tour.id} {...tour} removeTour={removeTour}/>;
        })}
      </div>
    </section>
  );
};

export default Tours;
