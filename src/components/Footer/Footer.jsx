import React from 'react';
import styles from './Footer.module.scss';

export function Footer () {

  return (
    <footer className={styles.Footer}>
        <section className={styles.footerMainContainer}>
            <section className={styles.footerServices}>
                <span>Serviços</span>
                
                <div className={styles.footerServicesList}>
                    <p>Devoluções</p>
                    
                    <p>Política de Privacidade</p>
                    
                    <p>Ajuda</p>
                </div>
            </section>

            <section className={styles.footerPayment}>
                <div className={styles.payment}>

                    <div className={styles.paymentTitle}>
                        <span>Métodos de Pagamento</span>
                    </div>

                    <div className={styles.paymentList}>
                        <a href="https://www.mbway.pt/" target="_blank">
                            <img src="http://localhost/store/footer/mbway.png" className={styles.logopay}/>
                        </a>

                        <a href="https://www.visa.pt/" target="_blank">
                            <img src="http://localhost/store/footer/visa.png"className={styles.logopay}/>
                        </a>

                        <a href="https://www.paypal.com/pt/business" target="_blank">
                            <img src="http://localhost/store/footer/PayPal.png" className={styles.logopay}/>
                        </a>

                        <a href="https://www.mastercard.pt/" target="_blank">
                            <img src="http://localhost/store/footer/mastercard.png"className={styles.logopay}/>
                        </a>
                    </div>
                </div>
            </section>

            <section className={styles.footerContactos}>
                <span>Contactos</span>
                
                <section className={styles.contactos}>
                    <p>Av. Óscar Monteiro Torres 55</p>
                    <p>1000-220 Lisboa</p>
                    <p>info@greenpeakstudio.com</p>
                </section>
            </section>

            <section className={styles.footerContent}>
                <span>Siga-nos nas redes sociais!</span>

				<div className={styles.redesSociais}>
						<a href="https://www.facebook.com/" target="_blank">
                            <i className="bi bi-facebook"></i>
						</a>

						<a href="https://www.twitter.com/" target="_blank">
                            <i className="bi bi-twitter"></i>
						</a>

						<a href="https://www.linkedin.com/" target="_blank">
                            <i className="bi bi-linkedin"></i>
						</a>

						<a href="https://www.youtube.com/" target="_blank">
                            <i className="bi bi-youtube"></i>
						</a>

						<a href="https://www.instagram.com/" target="_blank">
                            <i className="bi bi-instagram"></i>
						</a>
                </div>
            </section>
        </section>



        <section className={styles.footerBottom}>
            <section className={styles.footerBottomSectionOne}>
                <p>
					&copy;2021 Green Peak Studio. Desenvolvido por <a
                        href="https://www.linkedin.com/in/sofia-moreira-60705610b" target="_blank">Sofia
                        Moreira</a>.
                </p>
            </section>

            <section className={styles.footerBottomSectionTwo}>
                <div>
                    <a href="participacoes.html">participações</a>
                    <a href="talentosdevoz.html">talentos de voz</a>
                    <a href="loja.html">loja</a>
                </div>
            </section>
        </section>

   		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous">
        </script>
    </footer>
  );
}