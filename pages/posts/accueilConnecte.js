import Head from 'next/head'
import Link from 'next/link'
import Slideshow from '../Slide'




export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Héphaïstos Technologies</title>
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
                        <p className="pNavBar">Nos Experts</p>
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
                <img src="/maquette/frise.png" alt="frise du procesus d'achat" className="frise" />

                <slide>
                    <Slideshow />
                </slide>

                <button>
                    <Link href="/posts/boutique">
                        Shop
          </Link>
                </button>

                <div className="grid">
                    <h2>Nos produits les plus vendus et aimés par nos clients :</h2>
                    <div className="card">
                        <h3>Peinture aérosol CRC Galva Shine Noir Brillant &rarr;</h3>
                        <img src="/produits/peintures/noir.jpg" alt="Aérosol noir Galva Shine pour métaux" className="produitExemple"></img>
                        <p>Détails du produit :</p>
                        <div>
                            <p style={{ fontSize: '0.7em' }}>Peinture de retouche pour les pièces galvanisées à chaud.</p>
                            <p style={{ fontSize: '0.7em' }}>Revêtement galvanisé esthétique.</p>
                            <p style={{ fontSize: '0.7em' }}>Couche protectrice avec un lustre exceptionnel.</p>
                            <p style={{ fontSize: '0.7em' }}>Crée un film durable et fermé.</p>
                            <p style={{ fontSize: '0.7em' }}>Combinaison unique de flexibilité et de dureté.</p>
                            <p style={{ fontSize: '0.7em' }}>Adhère extrêmement bien aux surfaces galvanisées.</p>
                            <p style={{ fontSize: '0.7em' }}>Contenu : 500ml</p>
                            <p style={{ fontSize: '0.7em' }}>Color : Noir</p>
                        </div>
                        <p className="infosProduitPlusVendu prix">9,95€</p>
                        <p className="infosProduitPlusVendu panier">Ajouter au Panier</p>
                        <p className="infosProduitPlusVendu avis">Avis</p>
                    </div>

                    <div className="card">
                        <h3>Peinture aérosol CRC Galva Shine Blanc Brillant &rarr;</h3>
                        <img src="/produits/peintures/blanc.jpg" alt="Aérosol blanc Galva Shine pour métaux" className="produitExemple"></img>
                        <p>Détails du produit :</p>
                        <div>
                            <p style={{ fontSize: '0.7em' }}>Peinture de retouche pour les pièces galvanisées à chaud.</p>
                            <p style={{ fontSize: '0.7em' }}>Revêtement galvanisé esthétique.</p>
                            <p style={{ fontSize: '0.7em' }}>Couche protectrice avec un lustre exceptionnel.</p>
                            <p style={{ fontSize: '0.7em' }}>Crée un film durable et fermé.</p>
                            <p style={{ fontSize: '0.7em' }}>Combinaison unique de flexibilité et de dureté.</p>
                            <p style={{ fontSize: '0.7em' }}>Adhère extrêmement bien aux surfaces galvanisées.</p>
                            <p style={{ fontSize: '0.7em' }}>Contenu : 500ml</p>
                            <p style={{ fontSize: '0.7em' }}>Couleur : Blanc</p>
                        </div>
                        <p className="infosProduitPlusVendu prix">9,95€</p>
                        <p className="infosProduitPlusVendu panier">Ajouter au Panier</p>
                        <p className="infosProduitPlusVendu avis">Avis</p>
                    </div>

                    <div className="card">
                        <h3>Chiffon de polissage pour métal Cape Cod &rarr;</h3>
                        <img src="/produits/entretien/chiffonPolissage.jpg" alt="Chiffon de polissage pour métaux" className="produitExemple"></img>
                        <p>Détails du produit :</p>
                        <div>
                            <p style={{ fontSize: '0.7em' }}>Contenu : 3 pièces</p>
                            <p style={{ fontSize: '0.7em' }}>(L x L) 19 x 17 cm</p>
                        </div>
                        <p className="infosProduitPlusVendu prix">4,95€</p>
                        <p className="infosProduitPlusVendu panier">Ajouter au Panier</p>
                        <p className="infosProduitPlusVendu avis">Avis</p>
                    </div>

                    <div className="card">
                        <h3>Huile d'Articulation Xeramic KF Kart Gear &rarr;</h3>
                        <img src="/produits/entretien/huile-engrenage.jpg" alt="Huile pour les articulations des prothèses" className="produitExemple"></img>
                        <p>Détails du produit :</p>
                        <div>
                            <p style={{ fontSize: '0.7em' }}>Cette huile est très résistante à l'eau et réduit fortement l'usure des articulations.</p>
                            <p style={{ fontSize: '0.7em' }}>Contenu : 100 ml</p>
                        </div>
                        <p className="infosProduitPlusVendu prix" style={{ fontSize: '1em' }}>11,95€</p>
                        <p className="infosProduitPlusVendu panier">Ajouter au Panier</p>
                        <p className="infosProduitPlusVendu avis">Avis</p>
                    </div>

                    <div className="card">
                        <h3>Mecano Brillant Métaux Louis XIII &rarr;</h3>
                        <img src="/produits/entretien/brillantMetaux.jpg" alt="Produit pour redonner le brille au métaux" className="produitExemple"></img>
                        <p>Détails du produit :</p>
                        <div>
                            <p style={{ fontSize: '0.7em' }}>Nettoie et fait briller l’aluminium, le chrome, le cuivre et ses alliages (laiton, bronze, …).</p>
                            <p style={{ fontSize: '0.7em' }}>Il contient des anti-oxydants qui protègent et retardent l’oxydation des métaux.</p>
                            <p style={{ fontSize: '0.7em' }}>Contenu : 1L</p>
                        </div>
                        <p className="infosProduitPlusVendu prix" style={{ fontSize: '1em' }}>17,95€</p>
                        <p className="infosProduitPlusVendu panier">Ajouter au Panier</p>
                        <p className="infosProduitPlusVendu avis">Avis</p>
                    </div>

                    <div className="card">
                        <h3>Peinture aérosol CRC Galva Shine Bordeaux Brillant &rarr;</h3>
                        <img src="/produits/peintures/bordeaux.jpg" alt="Aérosol bordeaux Galva Shine pour métaux" className="produitExemple"></img>
                        <p>Détails du produit :</p>
                        <div>
                            <p style={{ fontSize: '0.7em' }}>Peinture de retouche pour les pièces galvanisées à chaud.</p>
                            <p style={{ fontSize: '0.7em' }}>Revêtement galvanisé esthétique.</p>
                            <p style={{ fontSize: '0.7em' }}>Couche protectrice avec un lustre exceptionnel.</p>
                            <p style={{ fontSize: '0.7em' }}>Crée un film durable et fermé.</p>
                            <p style={{ fontSize: '0.7em' }}>Combinaison unique de flexibilité et de dureté.</p>
                            <p style={{ fontSize: '0.7em' }}>Adhère extrêmement bien aux surfaces galvanisées.</p>
                            <p style={{ fontSize: '0.7em' }}>Contenu : 500ml</p>
                            <p style={{ fontSize: '0.7em' }}>Couleur : Bordeaux</p>
                        </div>
                        <p className="infosProduitPlusVendu prix">9,95€</p>
                        <p className="infosProduitPlusVendu panier">Ajouter au Panier</p>
                        <Link href="/posts/avis"><p className="infosProduitPlusVendu avis">Avis</p></Link>
                    </div>

                    <div className="card">
                        <h3>Peinture aérosol CRC Galva Shine Beige Brillant &rarr;</h3>
                        <img src="/produits/peintures/beige.jpg" alt="Aérosol beige Galva Shine pour métaux" className="produitExemple"></img>
                        <p>Détails du produit :</p>
                        <div>
                            <p style={{ fontSize: '0.7em' }}>Peinture de retouche pour les pièces galvanisées à chaud.</p>
                            <p style={{ fontSize: '0.7em' }}>Revêtement galvanisé esthétique.</p>
                            <p style={{ fontSize: '0.7em' }}>Couche protectrice avec un lustre exceptionnel.</p>
                            <p style={{ fontSize: '0.7em' }}>Crée un film durable et fermé.</p>
                            <p style={{ fontSize: '0.7em' }}>Combinaison unique de flexibilité et de dureté.</p>
                            <p style={{ fontSize: '0.7em' }}>Adhère extrêmement bien aux surfaces galvanisées.</p>
                            <p style={{ fontSize: '0.7em' }}>Contenu : 500ml</p>
                            <p style={{ fontSize: '0.7em' }}>Couleur : Beige</p>
                        </div>
                        <p className="infosProduitPlusVendu prix">9,95€</p>
                        <p className="infosProduitPlusVendu panier">Ajouter au Panier</p>
                        <p className="infosProduitPlusVendu avis">Avis</p>
                    </div>

                    <div className="card">
                        <h3>Peinture aérosol CRC Galva Shine Bleu Nuit Brillant &rarr;</h3>
                        <img src="/produits/peintures/bleuNuit.jpg" alt="Aérosol bleu nuit Galva Shine pour métaux" className="produitExemple"></img>
                        <p>Détails du produit :</p>
                        <div>
                            <p style={{ fontSize: '0.7em' }}>Peinture de retouche pour les pièces galvanisées à chaud.</p>
                            <p style={{ fontSize: '0.7em' }}>Revêtement galvanisé esthétique.</p>
                            <p style={{ fontSize: '0.7em' }}>Couche protectrice avec un lustre exceptionnel.</p>
                            <p style={{ fontSize: '0.7em' }}>Crée un film durable et fermé.</p>
                            <p style={{ fontSize: '0.7em' }}>Combinaison unique de flexibilité et de dureté.</p>
                            <p style={{ fontSize: '0.7em' }}>Adhère extrêmement bien aux surfaces galvanisées.</p>
                            <p style={{ fontSize: '0.7em' }}>Contenu : 500ml</p>
                            <p style={{ fontSize: '0.7em' }}>Couleur : Bleu Nuit</p>
                        </div>
                        <p className="infosProduitPlusVendu prix">9,95€</p>
                        <p className="infosProduitPlusVendu panier">Ajouter au Panier</p>
                        <p className="infosProduitPlusVendu avis">Avis</p>
                    </div>
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

          .frise {
             width: 70%;
             height: 300px;
             margin: 0;
           }
      
          .background {
            background-position: fixed;
          }

          button {
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

          button:hover {
            box-shadow: 0 10px 10px lightgray;
            font-size: 20px;
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
      
          img {
            height:785px;
            margin-left:70px;           
          }
      
          form {      
            padding-right: 10px;      
            border-radius: 10px 10px 10px 10px;
            margin-top:-790px;
            margin-left:-790px;
            height: 700px;
          }
                
          .title {
            padding-left: -10px;
            justify-content: left;
            background-color: rgb(120, 116, 212);
            border-radius: 10px 10px 10px 10px;
            color: whitesmoke;
            font-size: 30px;
          }
                  
          .title2 {
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

          .form2 {
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
            margin-top: 0;     
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

          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            max-width: 800px;
            margin-top: 2rem;
            background: white;
            border-top: 2px solid rgb(69, 71, 64);
            margin-top: 180px;            
          }

          h2 {
            color:rgb(69, 71, 64)
          }

          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color:rgb(69, 71, 64);
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
            font-size: 1.5rem;
          }

          .card img {         
            border-radius: 10%;
            width: 170px;
            height: auto;         
          }

          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }

          .infosProduitPlusVendu {
            display: inline;
            padding: 5px 10px;
            border: 1px solid rgb(120, 116, 212);
            border-radius: 10px;
          }

          .prix {
            color: orange;
            border: none;
          }

          .panier {
            color: rgb(120, 116, 212);
            cursor: pointer;
          }

          .panier:hover {
            background: rgb(120, 116, 212);
            color: white;
            box-shadow: lightgray 0 10px 10px;
          }

          .avis {
            color: rgb(120, 116, 212);
            cursor: pointer;
          }

          .avis:hover {
            background: rgb(120, 116, 212);
            color: white;
            box-shadow: lightgray 0 10px 10px;
          }

          .logo {
            height: 1.5em;
          }

          .avisLink {
            text-decoration: none;
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

