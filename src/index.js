import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemDetail } from './components/ItemDetail/ItemDetail';
import { ProductShowCase } from './components/ProductShowCase/ProductShowCase';
import { ProductManager } from './components/ProductManager/ProductManager';
import React from 'react';
import { ItemList } from './components/ItemList/ItemList';
import { Footer } from './components/Footer/Footer';
import { Navigation } from './components/Navigation/Navigation';
import { Header } from './components/Header/Header';
import { Basket } from './components/Basket/Basket';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<div id="layout">
		<main id="main-content" className="main-content-container">
			<React.StrictMode>
				<BrowserRouter>
					<Provider store={store}>
						<Header/>
						<Navigation/>
						<Routes>
							<Route path="/" element={<App/>}>
								<Route index element={<ProductShowCase/>}></Route>
								<Route path="/ItemList/:catId" element={<ItemList/>}></Route>
								<Route path="/ItemDetail/" element={<ItemDetail/>}></Route>
								<Route path="/Basket/" element={<Basket/>}></Route>
								<Route path="/admin/" element={<ProductManager/>}></Route>
								<Route 
									path="*" 
									element={
										<main style={{ padding: "1rem" }}>
											<p>Nothing so see here!</p>
										</main>
									}
								></Route>
							</Route>
						</Routes>
					</Provider>
				</BrowserRouter>
			</React.StrictMode>
		</main>
		<Footer/>
	</div>
);
