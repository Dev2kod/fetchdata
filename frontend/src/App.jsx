import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
    const [id, setId] = useState(0);
    const [data, setData] = useState({});

    useEffect(() => {
      setInterval(() => {
        
        const fetchUsers = async () => {
          if (id > 0) { // Ensure id is positive before making the request
              const res = await axios.get(`http://localhost:3000/userbyid?id=${id}`);
              setData(res.data);
          }
      };
      fetchUsers();
      }, 3000);
      
    }, [id]);

    return (
        <div>
            <button onClick={() => setId(1)}><h1>Task 1</h1></button>
            <button onClick={() => setId(2)}><h1>Task 2</h1></button>
            <button onClick={() => setId(3)}><h1>Task 3</h1></button>
            <button onClick={() => setId(4)}><h1>Task 4</h1></button>

            <div>
                <h1>{data.name}</h1>
                <h2>{data.work}</h2>
            </div>
        </div>
    );
}

export default App;
