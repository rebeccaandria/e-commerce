import Head from 'next/head'
import Link from 'next/link'

export default function aPropos() {
  return (
    <div className="container">
      <Head>
        <title>HéphaTech infos livraison</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div className="logoInNavBar" style={{ marginLeft: '10px' }}>
          <Link href="/">
            <a><img src="/favicon.png " alt="Héphaïstos Technologies Logo" className="logoNav" /></a>
          </Link>
        </div>
        <div className="centerInNavBar">
          <Link href="/posts/boutique">
            <p className="pNavBar">Shop</p>
          </Link>
          <Link href="/posts/experts">
            <p className="pNavBar">Nos experts</p>
          </Link>
          <Link href="/posts/nosClients">
            <p className="pNavBar">Ils nous font confiance</p>
          </Link>
        </div>
        <div className="rightInNavBar" style={{ marginRight: '10px' }}>
          <img src="/navbar/recherche.png" alt="Logo de bar de recherche" className="NavbarIMG" />
          <Link href="/posts/panier">
            <img src="/navbar/panier.png" alt="Logo de panier" className="NavbarIMG" />
          </Link>
          <Link href="/posts/compte">
            <img src="/navbar/compte.png" alt="Logo compte" className="NavbarIMG" />
          </Link>
        </div>

      </header>

      <main>
        <h1>Comment cela se passe pour la Livaison ?</h1>
        <h2>Nous travaillons en partenariat avec <a href="https://www.chronopost.fr/fr#/step-home"><span className="chronopost">CHRONOPOST</span></a></h2>
        <p>Les livraisons peuvent se faire au domicile ou chez votre hôpital, selon votre préference. Vou décidez ! Il suffit de prévenir votre medecin.</p>
        <h2>Et le prix ?</h2>
        <p className="textLong">Le prix de la livraison peut varier selon la distance. Mais vou pouvez obtenir un tarif !<br></br>Avec le module <a href="https://www.chronopost.fr/small-webapp/#/step-one"><span className="chronopost2">E-chrono</span></a> de Chronopost, obtenez le coût d’envoi de votre colis en quelques clics seulement !<br></br>Renseignez le pays de départ, la destination en France, en Europe ou à l’étranger et la date d’envoi.<br></br>Pour une simulation complète, il est indispensable d’indiquer le poids de votre colis.</p>
        <p>Un service de suivi de colis est mis en place également avec chronopost</p>
      </main>

      <footer>
        <div className="footercard">
          <h3>Contact</h3>
          <p>75 Avenue de Clichy, 75018 Paris</p>
          <p>01 23 45 67 89</p>
          <p>hepha-tech@support.com</p>
        </div>

        <div className="footercard">
          <h3>Besoin d'aide ?</h3>
          <Link href="/posts/infoProduits">
            <p className="lienFooter">Sur nos produits</p>
          </Link>
          <Link href="/posts/partenariats">
            <p className="lienFooter">Nos partenariats</p>
          </Link>
          <Link href="/posts/avis">
            <p className="lienFooter">Avis</p>
          </Link>
        </div>

        <div className="footercard">
          <h3>Boutique</h3>
          <Link href="/posts/aPropos">
            <p className="lienFooter">A propos</p>
          </Link>
          <Link href="/posts/infoLivraison">
            <p className="lienFooter">Méthode de livraison</p>
          </Link>
          <Link href="/posts/expertise">
            <p className="lienFooter">Expertise technologique</p>
          </Link>
        </div>

        <div className="footercard">
          <h3>Mon compte</h3>
          <Link href="/posts/compte">
            <p className="lienFooter">Mon compte</p>
          </Link>
          <Link href="/posts/cartes">
            <p className="lienFooter">Mes cartes</p>
          </Link>
          <Link href="/posts/commandes">
            <p className="lienFooter">Mes commandes</p>
          </Link>
        </div>

      </footer>
      <footer2>
        Powered by{' '} <img src="/favicon.png" alt="Héphaïstos Technologies Logo" className="logo" /> Héphaïstos Technologies
      </footer2>

      <style jsx>{`
         .container {
          min-height: 100vh;
          padding: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
  
        header {
          width: 100%;
          height: 100px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgb(120, 116, 212);
          color: whitesmoke;
          font-size: 2rem;
          letter-spacing: 3px;
        }

        .logoNav {
          height: 2em;
        }
        
        .logoNav {
          height: 3em;
        }
    
        .pNavBar {
          display: inline;
          margin-right: 30px;
          cursor: pointer;
        }

        .pNavBar:hover {
          text-decoration: underline;
          color: rgb(169, 136, 91);
        }
    
        .NavbarIMG {
          height: 1em;
          margin-left: 30px;
          cursor: pointer;
        }
    
        .NavbarIMG:hover {
          height: 1.5em;
        }
    
        .background{
          background-position: fixed;
        }
        
    
           
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center; 
          color: rgb(69, 71, 64);         
        }

        .description p {
          width: 1050px;
        }
    
        .description img{
          height: 400px;
        }
        
        .fond img  {
          height: 500px;
        }  
    
        footer, footer2 {
          width: 100%;
          height: 220px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgb(69, 71, 64);
        }
    
        footer2 {
          height: 100px;
          color: whitesmoke;
        }
    
        
        footer .footercard {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: white;
          text-decoration: none;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
    
        .footercard h3 {
          color: whitesmoke;
        }
    
        .footercard p {
          color: rgb(120, 116, 212);
        }
    
        footer img {
          margin-left: 0.5rem;
        }
    
        footer a {
          display: flex;
          justify-content: left;
          align-items: center;
        }
    
        .lienFooter {
            cursor: pointer;
        }
    
        footer .lienFooter:hover {
          color: rgb(220, 194, 143);
        }

        slide {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          background: rgb(196, 196, 196);
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: rgb(143, 108, 66);
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: rgb(150, 55, 53);
          border-color: rgb(150, 55, 53);
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1.5em;
        }

        h2 {
          color: rgb(120, 116, 212);
        }
        
        .chronopost {
          color: rgb(220, 194, 143);
        }

        .chronopost:hover {
          color: rgb(120 116 212);
          font-size: 27px;
          text-decoration: underline;
        }

        .chronopost2 {
          color: rgb(120 116 212);
          font-weight: bold;
        }

        .chronopost2:hover {
          font-size: 20px;
          text-decoration: underline;
        }

        .textLong {
          text-align: center;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
          header {
            display: none;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          background: 
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div >
  )
}

