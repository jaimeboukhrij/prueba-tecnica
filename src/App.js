import { useEffect, useState } from 'react'
import './App.css'
import Settings from './components/Settings/Settings'
import Map from './components/Map/Map'
import 'bootstrap/dist/css/bootstrap.min.css'

function App () {
  const [showMap, setMap] = useState('map')
  const [properties, setProperties] = useState({
    start: [0, 0],
    final: [0, 2],
    obstacules: []
  })

  useEffect(() => {
    if (showMap !== 'map') {
      setProperties(prevProperties => ({ ...prevProperties, obstacules: [] }))
    }
  }, [showMap])

  return (
    <main className='app_main'>
      {showMap === 'map'
        ? <Map properties={properties} setMap={setMap} />
        : <Settings setMap={setMap} properties={properties} setProperties={setProperties} />}
    </main>
  )
}

export default App
