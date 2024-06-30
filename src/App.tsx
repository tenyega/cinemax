
import { motion } from 'framer-motion'
import { useState } from 'react'
import Card from './components/Card';

export default function App() {

  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [listMovies, setListMovies] = useState([
 
    {
      "Title": "The Sword in the Stone",
      "Year": "1963",
      "imdbID": "tt0057546",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BODVmNGMyMzUtYTgyMy00YjJlLTg1ZmMtMGI1YmU4NmU1Mjg4XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Romancing the Stone",
      "Year": "1984",
      "imdbID": "tt0088011",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMWIwNWNmMWMtYzc4MC00ZTRhLTk1MDUtYTk3OGY0YTQ1NTUxXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg"
    },
    {
      "Title": "The Family Stone",
      "Year": "2005",
      "imdbID": "tt0356680",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNGM1MmRlMzItZjNmMi00NDNlLTgxYjktMzE0OWJmYTk2YTgxXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
    },
    {
      "Title": "Heart of Stone",
      "Year": "2023",
      "imdbID": "tt13603966",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTJhYjI1N2ItM2E4MC00ZmYzLTk2YzYtNTE5YTM1MDU0NjRiXkEyXkFqcGdeQXVyMTMxNjYyMTgw._V1_SX300.jpg"
    },
    {
      "Title": "Stone",
      "Year": "2010",
      "imdbID": "tt1423995",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTgxOTk4MDIyOF5BMl5BanBnXkFtZTcwMzI3Nzc3Mw@@._V1_SX300.jpg"
    },
    {
      "Title": "Dr. Stone",
      "Year": "2019–",
      "imdbID": "tt9679542",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYmU2MzEyMjAtOTQ5Yy00NGMxLTg0NmItMTQ0ZTM5OGY0NjUzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg"
    },
    {
      "Title": "Hands of Stone",
      "Year": "2016",
      "imdbID": "tt1781827",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjQxNzE4ODU1Nl5BMl5BanBnXkFtZTgwMDA4Njk0ODE@._V1_SX300.jpg"
    },
    {
      "Title": "The Deaths of Ian Stone",
      "Year": "2007",
      "imdbID": "tt0810823",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDg2NTgxODQ0NF5BMl5BanBnXkFtZTcwMzg1MTU1MQ@@._V1_SX300.jpg"
    },
    {
      "Title": "Voice from the Stone",
      "Year": "2017",
      "imdbID": "tt1544608",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzNzc2MDQ3OF5BMl5BanBnXkFtZTgwNTU2NzU2MTI@._V1_SX300.jpg"
    }
  ]);

  const searchMovie = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const url = `https://www.omdbapi.com/?apikey=63dda1f6&s=${query}`;
  
    try {
     
      const res = await fetch(url);
      const data = await res.json();

      if (data.Response === 'False') {
        setListMovies([]);
      } else {
        setListMovies(data.Search)
      }
    } catch(err) {
      setError("Une erreur est survenue lors votre recherche")
      console.log(error);
    }
    
  }

  return (
      <main>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Cinemax</h1>
        </motion.div>
        <motion.div
        
        >
        <h3 className='text-center'>Trouvez les infos de films et de séries en 2 clics !</h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={searchMovie}>
            <input 
            type="text" onChange={(e)=>setQuery(e.target.value)}
            />
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
              </svg>
            </button>
        </form>
      
      </motion.div>
      {
        listMovies.length>0? <Card movies={listMovies}/>:<p className='text-center'>Aucun resultat</p>
      }
        
      </main>

  )
}