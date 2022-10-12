import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import movies from './movies';

function App() {

  return (
    <>
      <Header />
      {movies.map((movie, id) => (
        <Card key={id} movies={movies[id]} />
      ))}
    </>
  );
}


export default App;
