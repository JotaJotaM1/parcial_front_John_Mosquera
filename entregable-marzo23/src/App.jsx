import { useState } from 'react'
import Card from './Card'

function App() {
  const [name, setName] = useState('')
  const [comida, setComida] = useState('')
  const [error, setError] = useState('')
  const [comidaFav, setComidaFav] = useState({})
  const [submitted, setSubmitted] = useState(false)


  const handleSubmit = (e) =>{

    e.preventDefault()

    if (!name || !comida) {
      setError('Porfavor rellena todos los campos')
      return
    }

    if (name.length < 3){
      setError(`longitud minima del campo name es de 3`)
      return
    }

    if (comida.length < 6){
      setError(`longitud minima del campo plato es de 6`)
      return
    }

    name.trimStart();

    const comidaFavorita = {
      name: name,
      comida: comida
    }

    setComidaFav(comidaFavorita)
    setSubmitted(true)
  }

  return (
    <div>
      <h1>Elige tu comida favorita</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Nombre</label>
          <input
            type='text'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='imgUrl'>Comida favorito</label>
          <input
            type='text'
            name='comida'
            value={comida}
            onChange={(e) => setComida(e.target.value)}
          />
        </div>
        <button type='submit'>Adicionar Comida</button>
      </form>
      {error && <p>{error}</p>}

      {submitted && <Card props={comidaFav} />}

    </div>
  )
}

export default App
