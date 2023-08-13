import styles from './Form.module.css'
import robot from '../../../../assest/img/robot@2x.png'
import home from '../../../../assest/img/casa-robot@2x.png'
import obstacule from '../../../../assest/img/pngwing.com (19).png'

export default function Form ({ setAction, setMap, action }) {
  return (
    <section className={styles.section}>
      <div>
        <button onClick={() => setAction('start')}>Selecionar inicio</button>
        {action === 'start' && <img src={robot} alt='' />}
      </div>
      <div>
        <button onClick={() => setAction('final')}>Selecionar final</button>
        {action === 'final' && <img src={home} alt='' />}

      </div>
      <div style={{ marginBottom: '30%' }}>
        <button onClick={() => setAction('obstacules')}>Selecionar Arbustos</button>
        {action === 'obstacules' && <img
          src={obstacule}
          style={{ width: '130px' }}
                                    />}
      </div>
      <div>
        <button onClick={() => setAction('reset')}>Reiniciar</button>

      </div>
      <div>
        <button onClick={() => setMap('map')}>Guardar</button>

      </div>
    </section>
  )
}
