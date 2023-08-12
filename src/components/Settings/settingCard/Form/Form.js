export default function Form ({ setAction }) {
  return (
    <>
      <button onClick={() => setAction('start')}>Selecionar inicio</button>
      <button onClick={() => setAction('final')}>Selecionar final</button>
      <button onClick={() => setAction('obstacules')}>Selecionar obstacules</button>
    </>
  )
}
