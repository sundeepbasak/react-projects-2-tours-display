import React, { useState } from "react";

const TourItem = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <section className="card bg-white rounded-md mb-5">
      <img src={image} alt={name} className="rounded-t-md block w-full h-80" />
      <div className="card-info p-5 flex flex-col">
        <div className="flex justify-between mt-2">
          <h2 className="font-bold">{name}</h2>
          <h2 className="font-bold text-blue-500">{price}</h2>
        </div>
        <p className="my-4 text-sm text-gray-500 text-justify">
          {readMore ? info : `${info.substring(0, 200)}... `}
          <button
            className="text-blue-500"
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {readMore? 'Read Less' : 'Read More'}
          </button>
        </p>
        <button
          type="button"
          onClick={() => {removeTour(id)}}
          className="px-4 py-2 rounded mx-auto mb-2 font-medium text-red-400 border border-red-400 hover:bg-red-500 hover:text-white hover:border-none"
        >
          Not Interested
        </button>
      </div>
    </section>
  );
};

export default TourItem;


//toggle Read More - Read Less with !readMore