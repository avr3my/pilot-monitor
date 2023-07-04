import './app.css'
import { useState, useEffect } from 'react'

import Switch from './components/switch/Switch'
import Compass from './components/compass/Compass'
import Attitude from './components/atitude/Attitude'
import Alt from './components/alt/Alt'
import usePreviousState from "./hooks/usePreviousState"
import { io } from 'socket.io-client';
import Temp from './Temp'

//set to my local host
const URL = 'http://10.100.102.13:3500';


const socket = io(URL);




function App() {
  const [displayVisual, setDisplayVisual] = useState(true)
  const [data, setData, prev] = usePreviousState({
    Altitude: 0,
    HIS: 0,
    ADI: 0,
  });
  useEffect(() => {
    function onReceiveData(value) {
      setData(value);
    };

    socket.on('receive-data', onReceiveData);
    return () => {
      socket.off('receive-data', onReceiveData);
    };
  }, []);
  // useEffect(() => {
  //   console.log("p =" , prev)
  // }, [prev])
  
  return (
    <main className={displayVisual? "visual":""}>
      <Switch displayVisual={displayVisual} setDisplayVisual={setDisplayVisual} />
      <Alt displayVisual={displayVisual} prev={prev?.Altitude} val={data.Altitude}/>
      <Compass displayVisual={displayVisual}  val={data.HIS}/>
      <Attitude displayVisual={displayVisual} val={data.ADI}/>
      <Temp curr={data} setValues={setData} prev={prev} />
    </main>
  )
}

export default App