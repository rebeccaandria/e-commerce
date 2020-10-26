import Head from 'next/head'
import Link from 'next/link'

export default function aPropos() {
  return (
    <div className="container">
      <Head>
        <title>HéphaTech Produits</title>
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
        <slide>
          <h1 className="title"></h1>
          <div className="description">
            <div className="grid">
              <div className="card">
                <img src="/maquette/femme_debout.jpg" alt="jambes femme" style={{ height: '370px' }} className="produitExemple"></img>
                <div>
                  <h3>M.A.S.H.A </h3>
                  <p style={{ fontWeight: '0.7em' }}>à partir de 999 euros.</p>
                  <p style={{ fontSize: '0.7em' }}>Jambe bionique avec tronc cuissé.</p>
                  <p style={{ fontSize: '0.7em' }}>Color : argenté</p>
                </div>
                <div>
                  <p className="buttonProduits plus">Savoir plus</p>
                  <p className="buttonProduits ajouterAuPanier">Ajouter au panier</p>
                </div>
              </div>

              <div className="card">
                <img src="/produits/jambes_entieres/genouPowerKnee.jpg" alt="jambes homme" style={{ height: '400px' }} className="produitExemple"></img>
                <div>
                  <h3>K.A.R.L </h3>
                  <p style={{ fontWeight: '0.7em' }}>à partir de 999 euros.</p>
                  <p style={{ fontSize: '0.7em' }}>Jambe bionique avec pied intégré.</p>
                  <p style={{ fontSize: '0.7em' }}>Color : argenté</p>
                </div>
                <div>
                  <p className="buttonProduits plus">Savoir plus</p>
                  <p className="buttonProduits ajouterAuPanier">Ajouter au panier</p>
                </div>
              </div>

              <div className="card">
                <img src="/maquette/homme_assis.jpg" alt="homme assis" style={{ height: '380px' }} className="produitExemple"></img>
                <h3>B.I.G.G.Y</h3>
                <div>
                  <p style={{ fontWeight: '0.7em' }}>à partir de 999 euros.</p>
                  <p style={{ fontSize: '0.7em' }}>Jambe inspiration look casual</p>
                  <p style={{ fontSize: '0.7em' }}>Color : gris</p>
                </div>
                <div>
                  <p className="buttonProduits plus">Savoir plus</p>
                  <Link href="/posts/panier3">
                    <p className="buttonProduits ajouterAuPanier">Ajouter au panier</p>
                  </Link>
                </div>
              </div>

              <div className="card">
                <img src="/produits/jambes_entieres/genouRheoKnee.jpg" alt="jambes bion" style={{ height: '320px' }} className="produitExemple"></img>
                <div>
                  <h3>S.P.O.T </h3>
                  <p style={{ fontWeight: '0.7em' }}>à partir de 999 euros.</p>
                  <p style={{ fontSize: '0.7em' }}>Jambe bionique avec exquisse pied.</p>
                  <p style={{ fontSize: '0.7em' }}>Color : noir</p>
                </div>
                <div>
                  <p className="buttonProduits plus">Savoir plus</p>
                  <p className="buttonProduits ajouterAuPanier">Ajouter au panier</p>
                </div>
              </div>

              <div className="card">
                <img src="/maquette/prothese_mode.jpg" alt="jambes homme" style={{ height: '380px' }} className="produitExemple"></img>
                <div>
                  <h3>C.L.A.K </h3>
                  <p style={{ fontWeight: '0.7em' }}>à partir de 999 euros.</p>
                  <p style={{ fontSize: '0.7em' }}>Jambe bionique avec pied intégré.</p>
                  <p style={{ fontSize: '0.7em' }}>Color : argenté</p>
                </div>
                <div>
                  <p className="buttonProduits plus">Savoir plus</p>
                  <p className="buttonProduits ajouterAuPanier">Ajouter au panier</p>
                </div>
              </div>

              <div className="card">
                <img src="/maquette/homme_assis_fd_vert.jpg" alt="homme assis" style={{ height: '380px' }} className="produitExemple"></img>
                <h3>C.A.S.U.A.L</h3>
                <div>
                  <p style={{ fontWeight: '0.7em' }}>à partir de 999 euros.</p>
                  <p style={{ fontSize: '0.7em' }}>Jambe inspiration look casual</p>
                  <p style={{ fontSize: '0.7em' }}>Color : gris</p>
                </div>
                <div>
                  <p className="buttonProduits plus">Savoir plus</p>
                  <p className="buttonProduits ajouterAuPanier">Ajouter au panier</p>
                </div>
              </div>

              <div className="card">
                <img src="/maquette/prothese.png" alt="jambes bio" style={{ height: '330px' }} className="produitExemple"></img>
                <div>
                  <h3>U.K.O.O.P </h3>
                  <p style={{ fontWeight: '0.7em' }}>à partir de 999 euros.</p>
                  <p style={{ fontSize: '0.7em' }}>Jambe bionique avec tronc cuissé.</p>
                  <p style={{ fontSize: '0.7em' }}>Color : argenté</p>
                </div>
                <div>
                  <p className="buttonProduits plus">Savoir plus</p>
                  <p className="buttonProduits ajouterAuPanier">Ajouter au panier</p>
                </div>
              </div>

              <div className="card">
                <img src="/maquette/prothese2.jpeg" alt="jambes homme" style={{ height: '400px' }} className="produitExemple"></img>
                <div>
                  <h3>C.L.I </h3>
                  <p style={{ fontWeight: '0.7em' }}>à partir de 999 euros.</p>
                  <p style={{ fontSize: '0.7em' }}>Jambe bionique avec pied intégré.</p>
                  <p style={{ fontSize: '0.7em' }}>Color : argenté</p>
                </div>
                <div>
                  <p className="buttonProduits plus">Savoir plus</p>
                  <p className="buttonProduits ajouterAuPanier">Ajouter au panier</p>
                </div>
              </div>

              <div className="card">
                <img src="/maquette/femme_prothese.jpg" alt="femme debout" style={{ height: '360px' }} className="produitExemple"></img>
                <h3>G.I.R.L.Y</h3>
                <div>
                  <p style={{ fontWeight: '0.7em' }}>à partir de 999 euros.</p>
                  <p style={{ fontSize: '0.7em' }}>Jambe inspiration look casual</p>
                  <p style={{ fontSize: '0.7em' }}>Color : gris</p>
                </div>
                <div>
                  <p className="buttonProduits plus">Savoir plus</p>
                  <p className="buttonProduits ajouterAuPanier">Ajouter au panier</p>
                </div>
              </div>

              <div className="card">
                <img src="/maquette/prothese3.jpg" alt="jambes femme" style={{ height: '350px' }} className="produitExemple"></img>
                <div>
                  <h3>B.A.S.H </h3>
                  <p style={{ fontWeight: '0.7em' }}>à partir de 999 euros.</p>
                  <p style={{ fontSize: '0.7em' }}>Jambe bionique avec tronc cuissé.</p>
                  <p style={{ fontSize: '0.7em' }}>Color : argenté</p>
                </div>
                <div>
                  <p className="buttonProduits plus">Savoir plus</p>
                  <p className="buttonProduits ajouterAuPanier">Ajouter au panier</p>
                </div>
              </div>

              <div className="card">
                <img src="/maquette/prothese4.png" alt="jambes homme" style={{ height: '340px' }} className="produitExemple"></img>
                <div>
                  <h3>T.O.M</h3>
                  <p style={{ fontWeight: '0.7em' }}>à partir de 999 euros.</p>
                  <p style={{ fontSize: '0.7em' }}>Jambe bionique avec pied intégré.</p>
                  <p style={{ fontSize: '0.7em' }}>Color : argenté</p>
                </div>
                <div>
                  <p className="buttonProduits plus">Savoir plus</p>
                  <p className="buttonProduits ajouterAuPanier">Ajouter au panier</p>
                </div>
              </div>

              <div className="card">
                <img src="/maquette/prothese5.jpg" alt="homme assis" style={{ height: '340px' }} className="produitExemple"></img>
                <h3>T.E.M.M.E</h3>
                <div>
                  <p style={{ fontWeight: '0.7em' }}>à partir de 999 euros.</p>
                  <p style={{ fontSize: '0.7em' }}>Jambe inspiration look casual</p>
                  <p style={{ fontSize: '0.7em' }}>Color : gris</p>
                </div>
                <div>
                  <p className="buttonProduits plus">Savoir plus</p>
                  <p className="buttonProduits ajouterAuPanier">Ajouter au panier</p>
                </div>
              </div>

              <div className="card">
                <img src="/maquette/prothese6.jpg" alt="jambes femme" style={{ height: '340px' }} className="produitExemple"></img>
                <div>
                  <h3>V.U.S.H.E </h3>
                  <p style={{ fontWeight: '0.7em' }}>à partir de 999 euros.</p>
                  <p style={{ fontSize: '0.7em' }}>Jambe bionique avec tronc cuissé.</p>
                  <p style={{ fontSize: '0.7em' }}>Color : argenté</p>
                </div>
                <div>
                  <p className="buttonProduits plus">Savoir plus</p>
                  <p className="buttonProduits ajouterAuPanier">Ajouter au panier</p>
                </div>
              </div>

              <div className="card">
                <img src="/maquette/prothese7.jpg" alt="jambes homme" style={{ height: '340px' }} className="produitExemple"></img>
                <div>
                  <h3>T.E.F.L.E </h3>
                  <p style={{ fontWeight: '0.7em' }}>à partir de 999 euros.</p>
                  <p style={{ fontSize: '0.7em' }}>Jambe bionique avec pied intégré.</p>
                  <p style={{ fontSize: '0.7em' }}>Color : argenté</p>
                </div>
                <div>
                  <Link href="/posts/detailles">
                    <p className="buttonProduits plus">Savoir plus</p>
                  </Link>
                  <p className="buttonProduits ajouterAuPanier">Ajouter au panier</p>
                </div>
              </div>

              <div className="card">
                <img src="/maquette/prothese8.jpg" alt="homme assis" style={{ height: '360px' }} className="produitExemple"></img>
                <h3>N.E.X.X.Y</h3>
                <div>
                  <p style={{ fontWeight: '0.7em' }}>à partir de 999 euros.</p>
                  <p style={{ fontSize: '0.7em' }}>Jambe inspiration look casual</p>
                  <p style={{ fontSize: '0.7em' }}>Color : gris</p>
                </div>
                <div>
                  <p className="buttonProduits plus">Savoir plus</p>
                  <p className="buttonProduits ajouterAuPanier">Ajouter au panier</p>
                </div>
              </div>

              <div className="card">
                <img src="/maquette/prothese9.jpg" alt="jambes femme" style={{ height: '360px' }} className="produitExemple"></img>
                <div>
                  <h3>B.O.U.N.C.E </h3>
                  <p style={{ fontWeight: '0.7em' }}>à partir de 999 euros.</p>
                  <p style={{ fontSize: '0.7em' }}>Jambe bionique avec tronc cuissé.</p>
                  <p style={{ fontSize: '0.7em' }}>Color : argenté</p>
                </div>
                <div>
                  <p className="buttonProduits plus">Savoir plus</p>
                  <p className="buttonProduits ajouterAuPanier">Ajouter au panier</p>
                </div>
              </div>

              <div className="card">
                <img src="/maquette/prothese10.jpg" alt="jambes femme" style={{ height: '360px' }} className="produitExemple"></img>
                <div>
                  <h3>R.A.N.G.E.R </h3>
                  <p style={{ fontWeight: '0.7em' }}>à partir de 999 euros.</p>
                  <p style={{ fontSize: '0.7em' }}>Jambe bionique avec tronc cuissé.</p>
                  <p style={{ fontSize: '0.7em' }}>Color : argenté</p>
                </div>
                <div>
                  <p className="buttonProduits plus">Savoir plus</p>
                  <p className="buttonProduits ajouterAuPanier">Ajouter au panier</p>
                </div>
              </div>

              <div className="card">
                <img src="/maquette/prothese11.jpg" alt="jambes femme" style={{ height: '360px' }} className="produitExemple"></img>
                <div>
                  <h3>S.U.N.S.E.T </h3>
                  <p style={{ fontWeight: '0.7em' }}>à partir de 999 euros.</p>
                  <p style={{ fontSize: '0.7em' }}>Jambe bionique avec tronc cuissé.</p>
                  <p style={{ fontSize: '0.7em' }}>Color : argenté</p>
                </div>
                <div>
                  <p className="buttonProduits plus">Savoir plus</p>
                  <p className="buttonProduits ajouterAuPanier">Ajouter au panier</p>
                </div>
              </div>

              <div className="card">
                <img src="/maquette/prothese12.jpg" alt="jambes homme" style={{ height: '300px' }} className="produitExemple"></img>
                <div>
                  <h3>R.O.O.T.S </h3>
                  <p style={{ fontWeight: '0.7em' }}>à partir de 999 euros.</p>
                  <p style={{ fontSize: '0.7em' }}>Jambe bionique avec pied intégré.</p>
                  <p style={{ fontSize: '0.7em' }}>Color : argenté</p>
                </div>
                <div>
                  <p className="buttonProduits plus">Savoir plus</p>
                  <p className="buttonProduits ajouterAuPanier">Ajouter au panier</p>
                </div>
              </div>

              <div className="card">
                <img src="/maquette/prothese13.jpg" alt="jambes femme" style={{ height: '360px' }} className="produitExemple"></img>
                <div>
                  <h3>T.E.C.H</h3>
                  <p style={{ fontWeight: '0.7em' }}>à partir de 999 euros.</p>
                  <p style={{ fontSize: '0.7em' }}>Jambe bionique avec tronc cuissé.</p>
                  <p style={{ fontSize: '0.7em' }}>Color : argenté</p>
                </div>
                <div>
                  <p className="buttonProduits plus">Savoir plus</p>
                  <p className="buttonProduits ajouterAuPanier">Ajouter au panier</p>
                </div>
              </div>

              <div className="card">
                <img src="/maquette/prothese14.jpg" alt="jambes femme" style={{ height: '360px' }} className="produitExemple"></img>
                <div>
                  <h3>E.B.E.N.E.R </h3>
                  <p style={{ fontWeight: '0.7em' }}>à partir de 999 euros.</p>
                  <p style={{ fontSize: '0.7em' }}>Jambe bionique avec tronc cuissé.</p>
                  <p style={{ fontSize: '0.7em' }}>Color : argenté</p>
                </div>
                <div>
                  <p className="buttonProduits plus">Savoir plus</p>
                  <p className="buttonProduits ajouterAuPanier">Ajouter au panier</p>
                </div>
              </div>

              <div className="card">
                <img src="/maquette/prothese15.jpg" alt="jambes femme" style={{ height: '360px' }} className="produitExemple"></img>
                <div>
                  <h3>P.I.M.P.E.D </h3>
                  <p style={{ fontWeight: '0.7em' }}>à partir de 999 euros.</p>
                  <p style={{ fontSize: '0.7em' }}>Jambe bionique avec tronc cuissé.</p>
                  <p style={{ fontSize: '0.7em' }}>Color : argenté</p>
                </div>
                <div>
                  <p className="buttonProduits plus">Savoir plus</p>
                  <p className="buttonProduits ajouterAuPanier">Ajouter au panier</p>
                </div>
              </div>

              <div className="card">
                <img src="/maquette/prothese16.jpeg" alt="jambes femme" style={{ height: '360px' }} className="produitExemple"></img>
                <div>
                  <h3>O.R.T.H.O </h3>
                  <p style={{ fontWeight: '0.7em' }}>à partir de 999 euros.</p>
                  <p style={{ fontSize: '0.7em' }}>Jambe bionique avec tronc cuissé.</p>
                  <p style={{ fontSize: '0.7em' }}>Color : argenté</p>
                </div>
                <div>
                  <p className="buttonProduits plus">Savoir plus</p>
                  <p className="buttonProduits ajouterAuPanier">Ajouter au panier</p>
                </div>
              </div>

              <div className="card">
                <img src="/maquette/prothese17.jpg" alt="homme assis" style={{ height: '380px' }} className="produitExemple"></img>
                <h3>A.E.R.E.R</h3>
                <div>
                  <p style={{ fontWeight: '0.7em' }}>à partir de 999 euros.</p>
                  <p style={{ fontSize: '0.7em' }}>Jambe inspiration look casual</p>
                  <p style={{ fontSize: '0.7em' }}>Color : gris</p>
                </div>
                <div>
                  <p className="buttonProduits plus">Savoir plus</p>
                  <p className="buttonProduits ajouterAuPanier">Ajouter au panier</p>
                </div>
              </div>
            </div>
          </div>
        </slide>
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
            button{
              color:whitesmoke;
              background-color:  rgb(120, 116, 212);
             border: 1px solid  rgb(120, 116, 212);
              font-size:16px;
              font-weight: bold;
              border-radius: 8px 8px 8px 8px;
              padding: 9px;
              width: 90px;
              text-decoration: none;
            }
    
            main {
              padding: 5rem 0;
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center; 
            }
    
            img{
              height:785px;
              margin-left:70px;
             
            }
    
          form{
    
    padding-right: 10px;
    border-radius: 10px 10px 10px 10px;
    margin-top:-790px;
    margin-left:-790px;
    height: 700px;
          }
        
    
    .title{
      padding-left: -10px;
      justify-content: left;
      background-color: rgb(120, 116, 212);
      border-radius: 10px 10px 10px 10px;
      color: whitesmoke;
      font-size: 30px;
    }
    
    
    
    .title2{
      background-color: rgb(242, 216, 99);
      border-radius: 10px 10px 10px 10px;
    font-size: 50px;
    margin-top: 710px;
    margin-left: 1900px;
    margin-bottom: 100px;
    padding-left:50px;
    padding-right:50px;
    color: whitesmoke;
    }
    
       
    .form2{
      margin-left: -1190px;
      background-color:red;
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
          color: ;
          text-decoration: none;
         
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          display:inline-block;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: rgb(72, 71, 74);
          border-color: rgb(120, 116, 212);
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

        .buttonProduits {
          display: inline;
          border: 2px solid rgb(120, 116, 212);
          border-radius: 10px;
          padding: 5px 10px;
          color: rgb(120, 116, 212);
          cursor: pointer;
        }

        .buttonProduits:hover {
          box-shadow: 0 10px 10px lightgray;
          font-weight: bold;
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

