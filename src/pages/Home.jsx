import React from 'react';
import Categories from '../components/Categories';
import Pizzas from '../components/Pizzas'
import Skeleton from '../components/Skeleton';

const NotFound = () => {

const [items, setItems] = React.useState([])
const [isLoading, setIsLoading] = React.useState(true)
const fakeArr = [...new Array(8)]
const categories = [{
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

React.useEffect(() => {
    fetch("https://6319e5bb8e51a64d2befd040.mockapi.io/pizzaItems")
        .then((res) => res.json())
        .then((arr) => {
        setItems(arr)
        setIsLoading(false)
    })
}, []);
    return (
        <>
            <Categories categories={categories}  />
            {isLoading && fakeArr.map((_, i) => <Skeleton key={i} />)}
            <Pizzas items={items}/>
        </>
    );
}

export default NotFound;
