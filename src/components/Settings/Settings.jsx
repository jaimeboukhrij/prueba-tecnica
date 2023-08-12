import { useState } from 'react'
import mapPicture from '../../assest/img/pantalla-grid-grande@3x.png'
import styles from './Settings.module.css'
import Form from './settingCard/Form/Form'
import SettingCard from './settingCard/SettingCard'
export default function Settings ({ setMap, properties, setProperties }) {
  const [action, setAction] = useState('reset')

  return (
    <main className={styles.main}>
      <section
        style={{ backgroundImage: `url(${mapPicture})` }}
        className={styles.section}
      >
        <SettingCard action={action} properties={properties} setProperties={setProperties} />
      </section>
      <section className={styles.form}>
        <Form setAction={setAction} action={action} setMap={setMap} />
      </section>
    </main>

  )
}
