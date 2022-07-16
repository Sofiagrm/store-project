import React from 'react';
import { useState, useEffect } from "react";
import styles from './ProductManager.module.scss';
import { insertProduct, getProduct, updateProduct, removeProduct } from '../../data-service/product-service';

export function ProductManager () {
	const [product, setProduct] = useState({
		designation: '',
		price: '',
		prodref: '',
		imgurl: ''
	});

	const [designation, setDesignation] = useState();
	const [prodref, setProdref] = useState();
	const [price, setPrice] = useState();
	const [imgurl, setImgurl] = useState();

	const [ref, setRef] = useState();
  
	function updateDesignation(evt) {
		console.log(evt);
		console.log(evt.target.value);
		product.designation = evt.target.value;
		setDesignation(product.designation);
		setProduct(product);
		console.log('updateDesignation', product);
	}
  
	function updatePrice(evt) {
		console.log(evt);
		console.log(evt.target.value);
		product.price = evt.target.value;
		setPrice(product.price);
		setProduct(product);
		console.log('updatePrice', product);

	}

	function updateProductReference(evt) {
		console.log(evt);
		console.log(evt.target.value);
		product.prodref = evt.target.value;
		setProdref(product.prodref);
		setProduct(product);
		console.log('updateProductReference', product);
	}

	function updateImageURL(evt) {
		console.log(evt);
		console.log(evt.target.value);
		product.imgurl = evt.target.value;
		setImgurl(product.imgurl);
		setProduct(product);
		console.log('updateImageURL', product);
	}

	function updateProdRef(evt) {
		setRef(evt.target.value);
		console.log('updateProdRef', ref);
	}

	function insertNewProduct() {
		console.log(product);
		insertProduct(product);

		setProduct({
			designation: '',
			price: '',
			prodref: '',
			imgurl: ''
		});
	}

	async function removeProductRef() {
		console.log(ref);
		let res = await removeProduct(ref);
		console.log("removeProductRef res", res[0].affectedRows);
		if (res[0].affectedRows > 0){
			setProduct({
				designation: '',
				price: '',
				prodref: '',
				imgurl: ''
			});
			setRef("");
		}
	}

	async function getProductRef() {

		const prod = await getProduct(ref);

		console.log("product", prod);
		console.log("product", prod[0].product);

		setProduct(prod[0].product);
		setRef("");

		console.log("product", product);
	}

	async function modifyProduct() {

		console.log(product);

		const prod = await updateProduct(product);

		console.log("modifyProduct 1", prod);
		console.log("modifyProduct 2", prod[0]);
		
		const data = {
			designation: prod[0].designation,
			price: prod[0].price,
			prodref: prod[0].prodref,
			imgurl: prod[0].imgurl
		}

		setProduct(data);

		console.log("modifyProduct 3", product);
	}



	
	useEffect(() => {
		console.log('useEffect product', product);
		console.log('useEffect ref', ref);
/*
		(async function() {

			console.log("product update", getRef.update);
			
			if(getRef.update) {
				const prod = await getProduct(getRef.prodref);

				console.log("products", prod);

				setProduct(prod);

				console.log("products", prod);
			}
        })();*/
	//}, [product, getRef.update]);
	}, [product, ref]);
/*
	useEffect(() => {
        ( async function() {

			console.log("product update", getRef.update);
			
			if(getRef.update) {
				const prod = await getProduct(getRef.prodref);

				console.log("products", prod);

				setProduct(prod);

				console.log("products", prod);
			}
        })();
    }, [getRef.update])
	value={getRef.prodref} onChange={updateGetProdRef}
	onClick={getRefProduct}
*/
	return (
		<div className={styles.ProductManager}>
            <div>
				Designation: <input type="text" value={product.designation} onChange={updateDesignation}/>
				Price: <input type="text" value={product.price} onChange={updatePrice} />
				Product Reference: <input type="text" value={product.prodref} onChange={updateProductReference} />
				Image URL: <input type="text" value={product.imgurl} onChange={updateImageURL} />
				<hr/>
				<button onClick={insertNewProduct}>Create</button>
				<button onClick={modifyProduct}>Update</button>
				<hr/>
				Product Reference: <input type="text" value={ref} onChange={updateProdRef} />
				<button onClick={getProductRef}>Get</button>
				<button onClick={removeProductRef}>Remove</button>
			</div>
		</div>
  	)
}