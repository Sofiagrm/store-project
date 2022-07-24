import React from 'react';
import { useState, useEffect } from 'react';
import styles from './ProductManager.module.scss';
import { insertProduct, getProduct, updateProduct, removeProduct } from '../../data-service/product-service';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getCategory, insertCategory, removeCategory, updateCategory } from '../../data-service/category-service';
import { List } from '../List/List';

export function ProductManager () {
	let catList = useSelector( state => state.categories );

	const [display_prod_error, SetDisplay_prod_error] = useState(false);
	const [display_prod_success, SetDisplay_prod_success] = useState(false);
	const [prod_error_message, SetProd_error_message] = useState("");
	

	const [product, setProduct] = useState({
		designation: '',
		price: '',
		prodref: '',
		imgurl: '',
		stock: 0,
		prodCat_fk: '',
		description: ''
	});


	const [designation, setDesignation] = useState('');
	const [prodref, setProdref] = useState('');
	const [price, setPrice] = useState('');
	const [imgurl, setImgurl] = useState('');
	const [prodcat, setProdcat_fk] = useState('');
	const [description, setDescription] = useState('');

	const [prod_ref, setProd_ref] = useState();
	const [products_change, setProductsChange] = useState(0);


	function clearErrors() {
			SetDisplay_prod_error(false);
			SetDisplay_prod_success(false);
			SetProd_error_message("");
			SetDisplay_cat_error(false);
			SetDisplay_cat_success(false);
			SetCat_error_message("");
	}

	
	//PRODUCTS MANAGEMENT
	function updateDesignation(evt) {
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

	function updateProdCategory(evt){
		product.prodCat_fk = evt.target.value;
		setProdcat_fk(product.prodCat_fk);
		setProduct(product);
	}

	function updateDescription(evt){
		product.description = evt.target.value;
		setDescription(product.description);
		setProduct(product);
	}

	function updateProdRef(evt) {
		setProd_ref(evt.target.value);
	}

	async function insertNewProduct() {
		clearErrors();

		let res = await insertProduct(product);

		if(res[0].message && res[0].message.includes('Duplicate entry')) {
			SetDisplay_prod_error(true);
			SetProd_error_message("Product with reference " + product.prodref + " already exists!");
		}
		else if (res[0].sqlMessage) {
			SetDisplay_prod_error(true);
			SetProd_error_message("Ops! An error has occured!");
		} else {
			setProduct({
				designation: '',
				price: '',
				prodref: '',
				imgurl: '',
				stock: 0,
				prodCat_fk: '',
				description: ''
			});
			
			setProductsChange(products_change + 1);

			SetDisplay_prod_success(true);
			SetProd_error_message("Product succefully created!");
		}
	}

	async function removeProductRef() {
		clearErrors();
		let res = await removeProduct(prod_ref);

		if(res[0].message && res[0].message.includes('Not found')) {
			SetDisplay_prod_error(true);
			SetProd_error_message(res[0].message);
		}
		else if (res[0].sqlMessage) {
			SetDisplay_prod_error(true);
			SetProd_error_message("Ops! An error has occured!");
		} else {
			if (res[0].affectedRows > 0){
				setProduct({
					designation: '',
					price: '',
					prodref: '',
					imgurl: '',
					stock: 0,
					prodCat_fk: '',
					description: ''
				});

				setProductsChange(products_change + 1);
				setProd_ref("");

				SetDisplay_prod_success(true);
				SetProd_error_message("Product succefully removed!");
			}
		}
	}

	async function getProductRef() {
		clearErrors();	
		const res = await getProduct(prod_ref);

		if(res[0].product && res[0].product.message && res[0].product.message.includes('Not found')) {
			SetDisplay_prod_error(true);
			SetProd_error_message(`Not found Products with category reference ${prod_ref}`);
		}
		else if (res[0].product.sqlMessage) {
			SetDisplay_prod_error(true);
			SetProd_error_message("Ops! An error has occured!");
		} else {
			setProduct(res[0].product);
		}

	}

	async function modifyProduct() {
		clearErrors();

		if(product.prodref === prod_ref) {
			const prod = await updateProduct(product);

			if(prod[0].product && prod[0].product.message) {
				SetDisplay_prod_error(true);
				SetProd_error_message(prod[0].product.message);
			} 
			else if (prod[0].sqlMessage) {
				SetDisplay_prod_error(true);
				SetProd_error_message("Ops! An error has occured!");
			} else {

				const data = {
					designation: prod[0].designation,
					price: prod[0].price,
					prodref: prod[0].prodref,
					imgurl: prod[0].imgurl,
					stock: prod[0].stock,
					prodCat_fk: prod[0].prodCat_fk,
					description: prod[0].description
				}

				setProductsChange(products_change + 1);
				setProduct(data);

				SetDisplay_prod_success(true);
				SetProd_error_message("Product succefully modified!");
			}
		}
		else {
				SetDisplay_prod_error(true);
				SetProd_error_message("Product reference can not be modified!");
		}
	}

	//CATEGORIES MANAGEMENT
	const [display_cat_error, SetDisplay_cat_error] = useState(false);
	const [cat_error_message, SetCat_error_message] = useState("");
	const [display_cat_success, SetDisplay_cat_success] = useState(false);


	const [categories_change, setCategoriesChange] = useState(0);

	const [category, setCategory] = useState({
		catdesignation: '',
		catref: ''
	});

	const [cat_ref, setCat_ref] = useState();

	const [cat_designation, setCat_designation] = useState('');
	const [catref, setCatref] = useState('');

	function updateCategoryDesignation(evt) {
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
		clearErrors();
		const cat = await getCategory(cat_ref);

		if(cat[0].category && cat[0].category.message && cat[0].category.message.includes('Not found')) {
			SetDisplay_cat_error(true);
			SetCat_error_message(`Not found Category with category reference ${cat_ref}`);
		}
		else if (cat[0].sqlMessage) {
			SetDisplay_cat_error(true);
			SetCat_error_message("Ops! An error has occured!");
		}

		let category = {
			catref: cat[0].category.catref,
			catdesignation: cat[0].category.designation
		}

		setCategory(category);
	}

	async function modifyCategory() {
		clearErrors();

		if(category.catref === cat_ref) {
			const data = {
				designation: category.catdesignation,
				catref: category.catref,
			}

			const cat = await updateCategory(data);

			if(cat[0] && cat[0].message) {
				SetDisplay_cat_error(true);
				SetCat_error_message(cat[0].message);
			}
			else if (cat[0].sqlMessage) {
				SetDisplay_cat_error(true);
				SetCat_error_message("Ops! An error has occured!");
			} else {
				setCategory(cat);
				setCategoriesChange(categories_change + 1);
				
				SetDisplay_cat_success(true);
				SetCat_error_message("Category succefully modified!");
			}
		}
		else {
			SetDisplay_cat_error(true);
			SetCat_error_message("Category reference can not be modified!");
		}

	}

	async function insertNewCategory() {
		clearErrors();
		const cat = {
			designation: category.catdesignation,
			catref: category.catref,
		}
		
		let res = await insertCategory(cat);

		if(res[0].message && res[0].message.includes('Duplicate entry')) {
			SetDisplay_cat_error(true);
			SetCat_error_message("Category with reference " + cat.catref + " already exists!");
		}
		else if (res[0].sqlMessage) {
			SetDisplay_cat_error(true);
			SetCat_error_message("Ops! An error has occured!");
		} else {
			setCategory({
				catdesignation: '',
				catref: ''
			});
			
			setCategoriesChange(categories_change + 1)

			SetDisplay_cat_success(true);
			SetCat_error_message("Category succefully created!");
		}
	}

	async function removeCategoryRef() {
		clearErrors();
		let res = await removeCategory(cat_ref);

		if(res[0].message && res[0].message.includes('Not found')) {
			SetDisplay_cat_error(true);
			SetCat_error_message(res[0].message);
		} else {
			if (res[0].affectedRows > 0){
				setCategory({
					catdesignation: '',
					catref: ''
				});
	
				setCat_ref("");
				setCategoriesChange(categories_change + 1)

				SetDisplay_cat_success(true);
				SetCat_error_message("Category succefully removed!");
			}
		}
	}

	const dispatch = useDispatch();

	useEffect(() => {
		( async function() {
			const categories = await getCategories();


			dispatch({
				type: "SET_CATEGORIES",
				categories_list: categories
			  });
		})();
	}, [dispatch, categories_change, products_change]);

	const filterCarList = () => {
		let list = catList[0].data.filter(option => {
			return option.catref !== product.prodCat_fk;
		});

		return list;
	}

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
				{/*Product Category: <input type="text" value={product.prodCat_fk} onChange={updateProdCategory} />*/}
				Product Category: 	<select value={product.prodCat_fk} onChange={updateProdCategory}>
										<option value={""} key={""} defaultValue={product.prodCat_fk === "" ? true : false}></option>
										{
											catList && catList[0] && catList[0].data ?
												filterCarList().map(	(option, index) => (
													<option value={option.catref} 
														defaultValue={(option.catref === product.prodCat_fk) ? true : false}
															key={index}
													>
														{option.designation}
													</option>
												))
												: "wait"
										}										
									</select>
				<br/>
				Product Description: <textarea type="text" value={product.description} onChange={updateDescription} />
				<br/>
				{
					display_prod_error ? <div><span className={styles.red}>{prod_error_message}</span><br/></div> : ""
				}
				{
					display_prod_success ? <div><span className={styles.green}>{prod_error_message}</span><br/></div> : ""
				}
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
				Category Reference: <input type="text" value={cat_ref} onChange={updateCatRef} />
				<br/>
				{
					display_cat_error ? <div><span className={styles.red}>{cat_error_message}</span><br/></div> : ""
				}
				{
					display_cat_success ? <div><span className={styles.green}>{cat_error_message}</span><br/></div> : ""
				}
				<button onClick={getCategoryRef}>Get</button>
				<button onClick={removeCategoryRef}>Remove</button>
			</div>
		</div>
  	)
}