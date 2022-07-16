import React from 'react';
import styles from './ProductShowCase.module.scss';

export function ProductShowCase () {

	return (
		<div className={styles.ProductShowcase}>
			<div className={styles.ShowcaseContainer}>
				<div className={styles.ShowcaseProductCard}>
					<a href="prod-detail-tshirt-1.html">
						<img src="http://localhost/store/images/Tshirt01.png" alt="skateboard deck" />
					</a>
					<span className="deck-name">T-SHIRT1</span>
					<span className="deck-specs">S | M | L</span>
					<span className="deck-price">24,99 EUR</span>
				</div>
				
				<div className={styles.ShowcaseProductCard}>
					<a href="prod-detail-tshirt-1.html">
						<img src="http://localhost/store/images/Tshirt01.png" alt="skateboard deck" />
					</a>
					<span className="deck-name">T-SHIRT1</span>
					<span className="deck-specs">S | M | L</span>
					<span className="deck-price">24,99 EUR</span>
				</div>

				<div className={styles.ShowcaseProductCard}>
					<a href="prod-detail-tshirt-1.html">
						<img src="http://localhost/store/images/Tshirt01.png" alt="skateboard deck" />
					</a>
					<span className="deck-name">T-SHIRT1</span>
					<span className="deck-specs">S | M | L</span>
					<span className="deck-price">24,99 EUR</span>
				</div>

				<div className={styles.ShowcaseProductCard}>
					<a href="prod-detail-tshirt-1.html">
						<img src="http://localhost/store/images/Tshirt01.png" alt="skateboard deck" />
					</a>
					<span className="deck-name">T-SHIRT1</span>
					<span className="deck-specs">S | M | L</span>
					<span className="deck-price">24,99 EUR</span>
				</div>
			</div>
		</div>
	)
}