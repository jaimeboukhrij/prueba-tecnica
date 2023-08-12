import mapPicture from '../../assest/img/pantalla-grid-grande@3x.png'
import Card from '../Card/Card'
import styles from './Map.module.css'
export default function Map () {
  return (
    <main
      style={{ backgroundImage: `url(${mapPicture})` }}
      className={styles.main}
    >
      <Card />
    </main>
  )
}