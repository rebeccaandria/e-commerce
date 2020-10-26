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
                        <img src="/navbar/connecte.png" alt="Logo compte" className="NavbarIMG" />
                    </Link>
                </div>

            </header>

            <main>
                <h1 className="title">Votre Panier :</h1>
                <h2></h2>
                <div>
                    <p className="infoAviS date">Ref :</p>
                    <p className="infoAviS">Photo :</p>
                    <p className="infoAviS">Commande :</p>
                    <p className="infoAviS">Supprimer :</p>
                </div>
                <div className="aviS">
                    <div className="avis">
                        <p className="infoAvis textDate">#0024574jd29qls</p>
                        <img src="/maquette/prothese7.jpg" alt="jambes homme" className="produitExemple infoAvis" style={{ width: '100px', marginLeft: '200px' }}></img>
                        <p className="infoAvis" style={{ marginLeft: '170px' }}>Jambe bionique avec pied intégré T.E.F.L.E</p>
                        <img src="/maquette/supprimer.jpg" alt="effacer une carte" title="supprimer" className="buttonSupprimerCarte" style={{ width: '50px', marginLeft: '220px' }}></img>
                    </div>
                    <div className="avis">
                        <p className="infoAvis textDate">#002423574skdf32kss</p>
                        <img src="/maquette/homme_assis.jpg" alt="homme assis" className="produitExemple infoAvis" style={{ width: '100px', marginLeft: '200px' }}></img>
                        <p className="infoAvis" style={{ marginLeft: '170px' }}>Jambe inspiration look casual B.I.G.G.Y</p>
                        <img src="/maquette/supprimer.jpg" alt="effacer une carte" title="supprimer" className="buttonSupprimerCarte" style={{ width: '50px', marginLeft: '220px' }}></img>
                    </div>
                </div>
                <div>
                    <Link href="/posts/boutique">
                        <p className="BttnPanier" style={{ marginRight: '250px' }}>Continuer les achats</p>
                    </Link>
                    <p className="BttnPanier">Aller au paiement</p>
                </div>
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

        .aviS {
          width: 100%;
          border-top: 3px solid lightgray;
          border-bottom: 3px solid lightgray;
          padding-bottom: 20px;
          margin-top: 20px;
        }

        .infoAviS {
          display: inline;
          margin-left: 330px;
        }

        .date {
          margin: 0;
        }

        .infoAvis {
            display: inline;
          letter-spacing: 1px;
        }

        .BttnPanier {
            background: white;
            letter-spacing: 1px;
            color: rgb(120, 116, 212);
            border: rgb(120, 116, 212) solid 1px;
            padding: 15px 10px;
            cursor: pointer;
            margin-top: 20px;
            display: inline-block;
        }

        .BttnPanier:hover {
            font-size: 17px;
            font-weight: bolder;
            border: 2px solid rgb(120, 116, 212);
            box-shadow: 0 10px 10px lightgray;
            cursor: pointer;
        }

        h2 {
          margin-bottom: 50px;
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

