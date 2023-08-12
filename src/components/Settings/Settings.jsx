import { useState } from 'react'
import mapPicture from '../../assest/img/pantalla-grid-grande@3x.png'
import styles from './Settings.module.css'
import Form from './settingCard/Form/Form'
import SettingCard from './settingCard/SettingCard'
export default function Settings () {
  const [action, setAction] = useState()
  const [properties, setProperties] = useState({
    start: [],
    final: [],
    obstacules: []
  })
  console.log(properties)
  return (
    <main className={styles.main}>
      <section
        style={{ backgroundImage: `url(${mapPicture})` }}
        className={styles.section}
      >
        <SettingCard action={action} properties={properties} setProperties={setProperties} />
      </section>
      <section className={styles.form}>
        <Form setAction={setAction} />
      </section>
    </main>

  )
}
