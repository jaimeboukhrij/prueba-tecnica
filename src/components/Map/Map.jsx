import { useState } from 'react'
import mapPicture from '../../assest/img/pantalla-grid-grande@3x.png'
import Card from './Card/Card'
import styles from './Map.module.css'
import Options from './Options/Options'
export default function Map ({ properties, setMap }) {
  const [resetMap, setReresetMap] = useState(false)
  return (
    <main className={styles.main}>
      <section
        style={{ backgroundImage: `url(${mapPicture})` }}
        className={styles.section}
      >
        <Card properties={properties} resetMap={resetMap} setReresetMap={setReresetMap} />
      </section>
      <section className={styles.form}>
        <Options setMap={setMap} resetMap={resetMap} setReresetMap={setReresetMap} />
      </section>
    </main>
  )
}
