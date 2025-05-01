import { useState } from 'react'
import  { useEffect} from "react";
import axios from "axios";

export default function App() {

   const [data, setdata] = useState([]);

    useEffect(() => {
      axios
        .get("http://localhost:3000/")
        .then((response) => {
          setdata(response.data); // update state with fetched data
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []);

  return (
    <>
      <div className="flex justify-center h-screen items-center">
        <h1 className="bg-green-700 text-black p-4 rounded-xl justify-center">
          {data}
        </h1>
      </div>
    </>
  );
}
