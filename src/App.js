import React, {useState, useEffect} from 'react';
import KarakterList from './components/KarakterList';
import axios from 'axios';
const App = () => {
  const [chars, setChars] = useState([]);

  const fetchChars = async () => {
      const response = await axios.get('https://swapi.dev/api/people/');
      setChars(response.data);
      console.log(response.data);
  } 

  useEffect(() => {
    fetchChars();
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      <KarakterList chars = {chars} />
    </div>
  );
}

export default App;
