import React from 'react';
import { useState, useEffect } from 'react';
import styles from './ProductManager.module.scss';
import { insertProduct, getProduct, updateProduct, removeProduct } from '../../data-service/product-service';
import { useSelector } from 'react-redux';
import { getCategory, insertCategory, updateCategory } from '../../data-service/category-service';

export function ProductManager () {
	let catList = useSelector( state => state.categories );
	//const [categories, setCategories] = useState(catList);

	console.log("catList", catList);

	const [product, setProduct] = useState({
		designation: '',
		price: '',
		prodref: '',
		imgurl: '',
		stock: 0,
		prodcat_fk: ""
	});


	const [designation, setDesignation] = useState('');
	const [prodref, setProdref] = useState('');
	const [price, setPrice] = useState('');
	const [imgurl, setImgurl] = useState('');

	const [prod_ref, setProd_ref] = useState();

	
	//PRODUCTS MANAGEMENT
	function updateDesignation(evt) {
		console.log(evt);

		product.designation = evt.target.value;
		setDesignation(product.designation);
		setProduct(product);
	}
  
	function updatePrice(evt) {
		product.price = evt.target.value;
		setPrice(product.price);
		setProduct(product);
	}

	function updateProductReference(evt) {
		product.prodref = evt.target.value;
		setProdref(product.prodref);
		setProduct(product);
	}

	function updateImageURL(evt) {
		product.imgurl = evt.target.value;
		setImgurl(product.imgurl);
		setProduct(product);
	}

	function updateStock(evt){
		product.stock = evt.target.value;
		setImgurl(product.stock);
		setProduct(product);
	}

	function updateProdRef(evt) {
		setProd_ref(evt.target.value);
	}

	function insertNewProduct() {
		insertProduct(product);

		setProduct({
			designation: '',
			price: '',
			prodref: '',
			imgurl: '',
			stock: 0,
		});
	}

	async function removeProductRef() {
		let res = await removeProduct(prod_ref);

		if (res[0].affectedRows > 0){
			setProduct({
				designation: '',
				price: '',
				prodref: '',
				imgurl: '',
				stock: 0
			});

			setProd_ref("");
		}
	}

	async function getProductRef() {
		const prod = await getProduct(prod_ref);

		setProduct(prod[0].product);
		setProd_ref('');
	}

	async function modifyProduct() {
		product.prodcat_fk = "0001";

		const prod = await updateProduct(product);
		
		const data = {
			designation: prod[0].designation,
			price: prod[0].price,
			prodref: prod[0].prodref,
			imgurl: prod[0].imgurl,
			stock: prod[0].stock,
		}

		setProduct(data);
	}

	//CATEGORIES MANAGEMENT

	const [category, setCategory] = useState({
		catdesignation: '',
		catref: ''
	});

	const [cat_ref, setCat_ref] = useState();

	const [cat_designation, setCat_designation] = useState('');
	const [catref, setCatref] = useState('');

	function updateCategoryDesignation(evt) {
		console.log(evt);

		category.catdesignation = evt.target.value;
		setCat_designation(category.catdesignation);
		setProduct(category);
	}

	function updateCategoryReference(evt) {
		category.catref = evt.target.value;
		setCatref(category.catref);
		setProduct(category);
	}

	function updateCatRef(evt) {
		setCat_ref(evt.target.value);
	}

	
	async function getCategoryRef() {
		const cat = await getCategory(cat_ref);

		let category = {
			catref: cat[0].category.catref,
			catdesignation: cat[0].category.designation
		}

		console.log("category", category);

		setCategory(category);
		setCat_ref('');
	}

	async function modifyCategory() {
		const data = {
			designation: category.catdesignation,
			catref: category.catref,
		}

		const cat = await updateCategory(category);

		setCategory(data);
	}

	function insertNewCategory() {
		const cat = {
			designation: category.catdesignation,
			catref: category.catref,
		}
		insertCategory(cat);

		setCategory({
			catdesignation: '',
			catref: ''
		});
	}

	useEffect(() => {
		console.log('useEffect product', product);
		console.log('useEffect category', category);
		console.log('useEffect prodref', prod_ref);
		console.log('useEffect catref', cat_ref);
	}, [product, category, prod_ref, cat_ref]);

	return (
		<div className={styles.ProductManager}>
            <div id="ProductManager">
				Designation: <input type="text" value={product.designation} onChange={updateDesignation}/>
				<br/>
				Price: <input type="text" value={product.price} onChange={updatePrice} />
				<br/>
				Product Reference: <input type="text" value={product.prodref} onChange={updateProductReference} />
				<br/>
				Image URL: <input type="text" value={product.imgurl} onChange={updateImageURL} />
				<br/>
				Stock amount: <input type="text" value={product.stock} onChange={updateStock} />
				<br/>
				<button onClick={insertNewProduct}>Create</button>
				<button onClick={modifyProduct}>Update</button>
				<hr/>
				Product Reference: <input type="text" value={prod_ref} onChange={updateProdRef} />
				<br/>
				<button onClick={getProductRef}>Get</button>
				<button onClick={removeProductRef}>Remove</button>
			</div>
			
			<br/>
			<br/>
			<hr/>
			<br/>
			<br/>

			<div id="Category Manager">
				Category Designation: <input type="text" value={category.catdesignation} onChange={updateCategoryDesignation}/>
				<br/>
				Category Reference: <input type="text" value={category.catref} onChange={updateCategoryReference} />
				<br/>
				<button onClick={insertNewCategory}>Create</button>
				<button onClick={modifyCategory}>Update</button>
				<hr/>
				Product Reference: <input type="text" value={cat_ref} onChange={updateCatRef} />
				<br/>
				<button onClick={getCategoryRef}>Get</button>
			</div>
		</div>
  	)
}