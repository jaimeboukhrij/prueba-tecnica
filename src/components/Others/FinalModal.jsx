import Modal from 'react-bootstrap/Modal'
import styles from './FinalModal.module.css'

function FinalModal ({ show, setShow, setReresetMap, resetMap, isOver }) {
  console.log(isOver)
  return (
    <>

      <Modal
        show={show}
        size='md'
        aria-labelledby='contained-modal-title-vcenter'
        centered
        backdrop='static'
        keyboard={false}

      >

        <Modal.Body className={styles.body}>
          <h4>{isOver
            ? '¡Lo siento, has perdido! 😢'
            : '¡HAS LLEGADO A LA META! 🥳'}
          </h4>
          <section>
            <button onClick={() => {
              setReresetMap(!resetMap)
              setShow(false)
            }}
            >Volver a jugar
            </button>
            <button>Ir al menu</button>
          </section>
        </Modal.Body>

      </Modal>
    </>
  )
}

export default FinalModal
