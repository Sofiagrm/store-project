import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MovieList } from './components/MovieList';
import { MovieDetail } from './components/MovieDetail';
import { ProductShowCase } from './components/ProductShowCase/ProductShowCase';
import { Footer } from './components/Footer/Footer';
import { ProductManager } from './components/ProductManager/ProductManager';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<div id="layout">
		<header>Header</header>
		
		<nav>
			<div className="cat-list-line">
				<a href="/MovieList/Samurai">
					Samurai
				</a>
			</div>
		</nav>
		
		<main id="main-content" className="main-content-container">
			<React.StrictMode>
				<BrowserRouter>
					<Provider store={store}>
						<Routes>
							<Route path="/" element={<App/>}>
								<Route path="/" element={<ProductShowCase/>}/>
							</Route>
							<Route path="/MovieList/:catId" element={<MovieList/>}/>
							<Route path="/MovieDetail/" element={<MovieDetail/>}/>
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
