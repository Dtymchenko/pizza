import React from 'react';
import Categories from '../components/Categories';
import Pizzas from '../components/Pizzas'
import Skeleton from '../components/Skeleton';

const Home = () => {

const [isActive, setIsActive] = React.useState(0)
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
const sortList = [
    {
        id: 0,
        name: 'price ASC',
        value: 'price'
    },
    {
        id: 1,
        name: 'price DESC',
        value: '-price'
    },
    {
        id: 2,
        name: 'rate ASC',
        value: 'rating'
    },
    {
        id: 3,
        name: 'rate DESC',
        value: '-rating'
    },
    {
        id: 4,
        name: 'name ASC',
        value: 'title'
    },
    {
        id: 5,
        name: 'name DESC',
        value: '-title'
    }
]
const [sortValue, setSortValue] = React.useState(sortList[0].value)

React.useEffect(() => {
    const category = isActive > 0 ? `category=${isActive}` : ''
    const sortBy = sortValue.replace('-', '')
    const order = !sortValue.includes('-') ? 'order=asc' : 'order=desc'

    setIsLoading(true)
    fetch(`https://6319e5bb8e51a64d2befd040.mockapi.io/pizzaItems?${category}&sortBy=${sortBy}&${order}`)
        .then((res) => res.json())
        .then((arr) => {
        setItems(arr)
        setIsLoading(false)
    })
}, [isActive, sortValue]);
    return (
        <>
            <Categories sortList={sortList} categories={categories} isActive={isActive} setIsActive={setIsActive} setSortValue={setSortValue}  />
            {isLoading && fakeArr.map((_, i) => <Skeleton key={i} />)}
            <Pizzas categories={categories} isActive={isActive} items={items}/>
        </>
    );
}

export default Home;
