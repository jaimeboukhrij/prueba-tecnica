import styles from './Options.module.css'

export default function Options ({ setMap, resetMap, setReresetMap }) {
  return (
    <section className={styles.section}>
      <div>
        <button onClick={() => setMap('')}>Ajustes</button>
      </div>

      <div>
        <button onClick={() => setReresetMap(!resetMap)}>Reiniciar</button>

      </div>

    </section>
  )
}
