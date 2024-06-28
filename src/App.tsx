import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const searchMovie = (e) => {
    e.preventDefault();
    console.log("La fonction SearchMovie a ete appelle ")
  }

  return (
    <>
      <main>
        <h1>CINEMAX</h1>
        <h3>Trouvew les infos de films et series en 2 clics !</h3>
        <form onSubmit={searchMovie}>
          <input type='text' className='border' />
          <button className='border'>Rechercher</button>
        </form>


    </main>
    </>
  )
}

export default App
