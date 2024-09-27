import { useEffect, useState } from 'react';
import myMap from './assets/philippines1.png';
import myFlag from './assets/philippines.png';
import './App.css';
import axios from 'axios';

function App() {
  const [array, setArray] = useState([]);

  const fetchApi = async () => {
    const response =await axios.get("http://localhost:8080/api");
    setArray(response.data.place);
  };

  useEffect(() => {
    fetchApi();
  }, [])

  return (
    <>
      <div className='img-container'>
        <img src={myMap} className="my-map" alt="Philippines Map" />
        <img src={myFlag} className="my-flag" alt="Philippines Flag" />
      </div>
    
      <h1>Philippines</h1>
      <div className="card">

        <p>
          7 Best Places in the Philippines
        </p>

        {array.map((place,index) => (
          <ul key= {index}>
            <li>{place}</li>
          </ul>
        ))}



      </div>
      <a className="read-the-docs">
        Click here to learn more about Philippines
      </a>
    </>
  )
}

export default App
