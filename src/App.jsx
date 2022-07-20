import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { getCategories } from "./data-service/category-service";
import styles from './App.scss';


export default function App() {

	const dispatch = useDispatch();

	useEffect(  () => {
        ( async function() {
            const categories = await getCategories();

            console.log("categories", categories)

			dispatch({
                type: "SET_CATEGORIES",
                categories_list: categories
              });
        })();
    }, [dispatch])

	return (
		<div>	
			<Outlet/>
		</div>
	)
}