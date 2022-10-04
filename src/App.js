import './App.css';
import Header from './components/Header';
import Categories from './components/Categories';
import Pizzas from './components/Pizzas';

function App() {

  const items = [{
    id: 0,
    title: "All"
},
{
    id: 1,
    title: "Meat"
},
{
    id: 2,
    title: "Vegan"
},
{
    id: 3,
    title: "Grill"
},
{
    id: 4,
    title: "Seafood"
},
{
    id: 5,
    title: "Spicy"
}]

  return (
    <div className="App">
      <div className='wrapper'>
        <Header />
        <Categories items={items} />
        <Pizzas />
      </div>
    </div>
  );
}

export default App;
