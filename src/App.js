import { useState } from 'react'
import './App.css'
// import Map from './components/Map/Map'
import Settings from './components/Settings/Settings'
import Map from './components/Map/Map'

function App () {
  const [showMap, setMap] = useState('set')
  const [properties, setProperties] = useState({
    start: [1, 3],
    final: [1, 0],
    obstacules: []
  })

  return (
    <>
      {showMap === 'map'
        ? <Map properties={properties} />
        : <Settings setMap={setMap} properties={properties} setProperties={setProperties} />}
    </>
  )
}

export default App
