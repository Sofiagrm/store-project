import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { getCategories } from "./data-service/category-service";

export default function App() {
    const CategoriesList = useSelector( state => state.categories );

	const dispatch = useDispatch();

	useEffect( () => {
        ( async function() {
            const categories = await getCategories();

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