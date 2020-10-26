import Head from 'next/head'
import Link from 'next/link'

export default function aPropos() {
  return (
    <div className="container">
      <Head>
        <title>HéphaTech Infos Produits</title>
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
        <h1>Nous nous engageons envers notre clientèle à "offrir une expertise technique de pointe en appareillage orthopédique", ceci en maintenant nos connaissances à jour et en assurant une amélioration constante de la qualité de nos services ainsi que l'innovation.</h1>
        <h2>Pour une amputation de membre supérieur: que ce soit pour le doigt, la main , l’avant bras, le bras ou l’épaule, il existe trois types d’appareillages possibles.</h2>
        <p>Selon la classification LPP (liste des produits et prestations, définie par l’assurance maladie) : il existe les prothèses de travail, les prothèses de service et de vie sociale ou esthétique.<br></br>Il existe des prothèses myoelectriques fonctionnant avec un ou des moteurs, commandés par des capteurs situés à la surface de la peau et s’activant grâce aux microvolts parcourant la surface de la peau produit par le mouvement des muscles.</p>
        <h2>Quelque soit votre âge : la conception et la fabrication d’une prothèse d’orteil, d’une prothèse de pied, d’une prothèse de jambe, ou d’une prothèse de cuisse, peut variée selon l’origine de l’amputation, la condition physique, l’âge, et l’activité souhaitée.</h2>
        <p>Selon la classification LPP (liste des produits et prestations, définie par l’assurance maladie) : il existe différentes classes de produits, admissibles au patient selon certaines conditions bien précises.</p>
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
          text-align: center; 
          color: rgb(69, 71, 64);
          width: 60%;
        }

        main h2 {
          color: rgb(120, 116, 212);
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

