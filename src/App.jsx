import logo from './logo.svg';
import { Outlet } from "react-router-dom";


export default function App() {
	return (
		<div>	
			<Outlet/>
		</div>
	);
}