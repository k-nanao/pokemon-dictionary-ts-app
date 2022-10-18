import { useState, useEffect } from 'react';
import './App.css';
import { getAllPokemon } from './utils/pokemon';

// type FETCH = {
//   count: number;
//   next: string;
//   previous: string;
//   results: object;
// };

function App() {
  const initialURL = 'https://pokeapi.co/api/v2/pokemon';
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      let res: string | any = await getAllPokemon(initialURL);
      setLoading(false);
      loadPokemon(res.results);
    };
    fetchPokemon();

    const loadPokemon = (url: string) => {
      console.log(url);
    };
  }, []);
  return (
    <div className='App'>
      {loading ? (
        <div>
          <h1>ロード中です</h1>
        </div>
      ) : (
        <>
          <div>ポケモンゲットだぜ</div>
        </>
      )}
    </div>
  );
}

export default App;
