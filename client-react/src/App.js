import './app.css'
import { useState, useEffect } from 'react'

import Switch from './components/switch/Switch'
import Compass from './components/compass/Compass'
import Attitude from './atitude/Attitude'
import Alt from './components/alt/Alt'

import { io } from 'socket.io-client';

//set to my local host
const URL = 'localhost:3500';


const socket = io(URL);

const placeHolderValues={
  altitude: 0,
  his: 0,
  adi:0
}

function App() {
  const [displayVisual, setDisplayVisual] = useState(true)
  const [data, setData] = useState({
    Altitude: 0,
    HIS: 0,
    ADI: 0,
  });
  useEffect(() => {
    function onReceiveData(value) {
      console.log(value);
      setData(value);
    };

    socket.on('receive-data', onReceiveData);
    return () => {
      socket.off('receive-data', onReceiveData);
    };
  }, []);
  
  return (
    <main className={displayVisual? "visual":""}>
      <Switch displayVisual={displayVisual} setDisplayVisual={setDisplayVisual} />
      <Alt displayVisual={displayVisual}  val={data.Altitude}/>
      <Compass displayVisual={displayVisual}  val={data.HIS}/>
      <Attitude displayVisual={displayVisual} val={data.ADI}/>
    </main>
  )
}

export default App