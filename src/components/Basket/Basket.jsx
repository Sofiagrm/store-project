import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Basket.module.scss';

export function Basket () {
	const temp_basket = useSelector( state => state.basket );
	const [, updateState] = React.useState();
 	const forceUpdate = React.useCallback(() => updateState({}), []);

	const dispatch = useDispatch();

	const removeFromCart = (evt) => {
		temp_basket.pop(evt.target.value);


		dispatch({
            type: "SET_BASKET",
            basket_products: temp_basket
        });

        dispatch({
            type: "SET_BASKET_LINES",
			basket_lines: temp_basket.length
        });
		
	}

	const calcLineSubTotal = (quantity, price) => {
		let subTotal = parseFloat(price) * parseFloat(quantity);
		return subTotal.toFixed(2);
	}

	const calcBasketTotal = () => {
		const total = temp_basket.reduce((total, value) => { 
			return total + (parseFloat(value.product[0].price) * parseFloat(value.amount));
		}, 0);

		return total.toFixed(2);
	}

	const reduceAmount = (evt) => {
		const basketIndex = evt.target.value;
		
		if(temp_basket[basketIndex].amount === 1) {
			temp_basket.pop(evt.target.value);
		}
		else {
			temp_basket[basketIndex].amount = temp_basket[basketIndex].amount - 1; 
		}

		dispatch({
            type: "SET_BASKET",
            basket_products: temp_basket
        });

        dispatch({
            type: "SET_BASKET_LINES",
			basket_lines: temp_basket.length
        });

		forceUpdate();
	}

	const increaseAmount = (evt) => {
		const basketIndex = evt.target.value;
		temp_basket[basketIndex].amount = temp_basket[basketIndex].amount + 1; 
	
		dispatch({
			type: "SET_BASKET",
			basket_products: temp_basket
		});

		dispatch({
			type: "SET_BASKET_LINES",
			basket_lines: temp_basket.length
		});

		forceUpdate();
	}


	return (
		<div className={styles.Basket}>
			<table>
				<thead>
					<tr>
						<th>Product</th>
						<th></th>
						<th>Price</th>	
						<th>Quantity</th>
						<th>Subtotal</th>
						<th>Remove</th>
					</tr>
				</thead>
				<tbody>
					{
						temp_basket.map((cart_line, index) => (
							<tr key={cart_line.prod_ref}>
								<td>
									<img className={styles.prodImage} src={cart_line.product[0].imgurl} alt={cart_line.product[0].designation}/>
								</td>
								<td>
									<span>{cart_line.product[0].description}</span>
								</td>
								<td>
									<span>&euro;{cart_line.product[0].price}</span>
								</td>
								<td className={styles.amount}>
									<button value={index} onClick={reduceAmount}>-</button>
									<span>{cart_line.amount}</span>
									<button value={index} onClick={increaseAmount}>+</button>
								</td>
								<td>
									<span>&euro;{calcLineSubTotal(cart_line.amount, cart_line.product[0].price)}</span>
								</td>
								<td>
									<button value={index} onClick={removeFromCart}>X</button>
								</td>
							</tr>
						))
					}
				</tbody>
				<tfoot>
				    <tr>
      					<th colSpan="4">Total</th>
      					<td>&euro;{calcBasketTotal()}</td>
    				</tr>
  				</tfoot>
			</table>

			<div>
				<button>Pay</button>
			</div>		
		</div>
  	)
}