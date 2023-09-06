import { useEffect, useState } from "react";
import { Tours } from "./components/Tours";

function App() {
  const URL = "https://course-api.com/react-tours-project";

  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      setTours(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getTours();
  }, []);

  if (loading) {
    return <h1 className="text-center">Loading...</h1>;
  }

  const deleteTour = (id) => {
    setTours((prv) => prv.filter((tour) => tour.id !== id));
  };

  if (tours.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <button
          onClick={() => getTours()}
          type="button"
          className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        >
          Refresh
        </button>
      </div>
    );
  }

  return (
    <main>
      <Tours data={tours} onDelete={deleteTour} />
    </main>
  );
}

export default App;
