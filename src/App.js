import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Header from "./components/Header";
import Tours from "./components/Tours";
import Footer from "./components/Footer";

const projectName = "Tours Display Project";
const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const NoTours = () => {
    return (
      <div className="flex flex-col">
        <div className="tracking-wide pb-2 border-b-2 font-semibold text-center text-white text-2xl mb-2 mt-4">
        No Tours Left
      </div>
        <button onClick={fetchTours}
        className="px-4 py-1 bg-green-500 hover:bg-green-400 rounded font-medium"
        >Refresh</button>
      </div>
    );
  };

  return (
    <div className="bg-blue-500 w-screen min-h-screen h-auto">
      <main className="container w-3/5 lg:w-1/2 mx-auto flex flex-col justify-center items-center">
        <Header projectName={projectName} />
        {loading && <Loading />}
        {!loading && tours.length !==0 && <Tours tours={tours} removeTour={removeTour} />}
        {!loading && tours.length === 0 && <NoTours />}
        <Footer />
      </main>
    </div>
  );
};

export default App;
