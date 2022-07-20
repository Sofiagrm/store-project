import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemDetail } from './components/ItemDetail/ItemDetail';
import { ProductShowCase } from './components/ProductShowCase/ProductShowCase';
import { Footer } from './components/Footer/Footer';
import { ProductManager } from './components/ProductManager/ProductManager';
import React from 'react';
import { Navigation } from './components/Navigation/Navigation';
import { ItemList } from './components/ItemList/ItemList';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<div id="layout">
		<header>Header</header>
{/*		
		<Provider store={store}>
			<Navigation/>
		</Provider>

		<nav>
			<div className="cat-list-line">
				<a href="/MovieList/Samurai">
					Samurai
				</a>
			</div>
		</nav>
*/}	
		<main id="main-content" className="main-content-container">
			<React.StrictMode>
				<BrowserRouter>
					<Provider store={store}>
						<Navigation/>
						<Routes>
							<Route path="/" element={<App/>}>
								<Route path="/" element={<ProductShowCase/>}/>
							</Route>
							<Route path="/ItemList/:catId" element={<ItemList/>}/>
							<Route path="/ItemDetail/" element={<ItemDetail/>}/>
							<Route path="/admin/" element={<ProductManager/>}/>
							<Route 
								path="*" 
								element={
									<main style={{ padding: "1rem" }}>
										<p>Nothing so see here!</p>
									</main>
								}
							/>
						</Routes>
					</Provider>
				</BrowserRouter>
			</React.StrictMode>
		</main>

		<Footer></Footer>
	</div>
);
