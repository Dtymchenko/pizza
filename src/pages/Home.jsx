import React from 'react';
import { useSelector } from 'react-redux';
import Categories from '../components/Categories';
import Pizzas from '../components/Pizzas'
import Skeleton from '../components/Skeleton';
import { SearchContext } from './../App';
import { sortList, setFilters } from '../redux/slices/filterSlice';
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Home = () => {

const navigate = useNavigate()
const dispatch = useDispatch()
const { searchInput } = React.useContext(SearchContext)

const isActive = useSelector((state) => state.filterSlice.categoryId)
const setIsActive = () => {}
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

const sortValue = useSelector((state) => state.filterSlice.sort.value)

React.useEffect(() => {
    if (window.location.search) {
        const params = qs.parse(window.location.search.substring(1))
        const sort = sortList.find(obj => obj.value === params.sortValue)
        // dispatch(
        //     setFilters({
        //         ...params,
        //     sort})
        // )
    }
},[isActive, sortValue, searchInput])

React.useEffect(() => {
    const category = isActive > 0 ? `category=${isActive}` : ''
    const sortBy = sortValue.replace('-', '')
    const order = !sortValue.includes('-') ? 'order=asc' : 'order=desc'

    setIsLoading(true)
    axios.get(`https://6319e5bb8e51a64d2befd040.mockapi.io/pizzaItems?${category}&sortBy=${sortBy}&${order}`)
        .then((res) => {
        setItems(res.data)
        setIsLoading(false)
    })
}, [isActive, sortValue, searchInput]);

React.useEffect(() => {
    const queryString = qs.stringify({
        isActive,
        sortValue
    })

    navigate(`?${queryString}`)
}, [isActive, sortValue, searchInput])
    return (
        <>
            <Categories sortList={sortList} categories={categories} isActive={isActive} setIsActive={setIsActive} />
            {isLoading && fakeArr.map((_, i) => <Skeleton key={i} />)}
            <Pizzas categories={categories} isActive={isActive} items={items}/>
        </>
    );
}

export default Home;
