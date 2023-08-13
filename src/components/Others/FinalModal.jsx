import Modal from 'react-bootstrap/Modal'
import styles from './FinalModal.module.css'

function FinalModal ({ show, setShow, setReresetMap, resetMap }) {
  const handleClose = () => setShow(false)

  return (
    <>

      <Modal
        show={show} onHide={handleClose}
        size='md'
        aria-labelledby='contained-modal-title-vcenter'
        centered
        backdrop='static'
        keyboard={false}

      >

        <Modal.Body className={styles.body}>
          <h4>¡HAS LLEGADO A LA META! 🥳</h4>
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
