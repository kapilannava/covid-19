import React, { useState, useEffect } from 'react';
import './App.css';
require('dotenv').config()


const App = () =>  {

  const [deaths, setDeaths] = useState([]);
 
  const getData = async () => {

  const response= await fetch(`https://covid-19-statistics.p.rapidapi.com/reports/total/`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
      "x-rapidapi-key": process.env.REACT_APP_API_KEY
    }
  })
  const data = await response.json();
  setDeaths(data.data);
}

    useEffect( ()=>{
      getData();
    }, []);

return(
  <div className="App">
Last Updated: {deaths.last_update} <br />
Confirmed cases: {deaths.confirmed}<br />
Recovered: {deaths.recovered} <br />
Deaths: {deaths.deaths} <br />
Active cases: {deaths.active} <br />
Fatality Rate: {deaths.fatality_rate}%
</div>
)
}

export default App;
