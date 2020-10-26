import Head from 'next/head'
import Link from 'next/link'

export default function aPropos() {
  return (
    <div className="container">
      <Head>
        <title>HéphaTech clients de confiance</title>
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
        <slide>
          <h1 className="title">
            Nos produits à l'épreuve
          </h1>

          <p className="description">
            C'est une fierté pour Hépha Tech de faire partie de la vie d'un grand nombre d'athlètes. Nous suivons leurs courses avec le même enthousiasme qu'eux suivent nos progrès.
          </p>
        </slide>

        <div className="grid">
          <div className="card">
            <img src="/champions/handisport.jpg" alt="photo d'athlète qui cour avec une prothèse tibial de course" className="img-champion" />
          </div>
          <div className="card">
            <img src="/champions/handisportenfant.jpg" alt="photo d'un athlète junior jouant au ping-pong en fauteuil roullant" className="img-champion" />
          </div>
          <div className="card">
            <img src="/champions/handisportfemmecourse.jpg" alt="Trois athlètes démarrant une course. À gauce une femme avec une prothèse tibial de course à la jambe droite. Au centre une femme avec les deux prothèse tibiales de course et a droite une femme avec prothèse tibial de course gauche" className="img-champion" />
          </div>
          <div className="card">
            <img src="/champions/handisporthomme.jpg" alt="un athlète assis sur le terrain avec une prothèse tibial de course" className="img-champion" />
          </div>
          <div className="card">
            <img src="/champions/Jean-Baptiste-Alaize.png" alt="photo de Jean Baptiste Alaize avec sa prothèse entière à la jambe droite" className="img-champion" />
          </div>
          <div className="card">
            <img src="/champions/jeanbaptisteAlaize.jpg" alt="photo de Jean Baptiste Alaize à son echauffement avec sa prothèse de jambe entière" className="img-champion" />
          </div>
          <div className="card">
            <img src="/champions/handisportfemme.jpg" alt="photo d'athlètes qui s'embrasse après la course. Une avec jambes entières et l'autre avec tibia droite." className="img-champion" />
          </div>
          <div className="card">
            <img src="/champions/handisportHomme.jpg" alt="photo d'un athlète heureux après sa course. Il porte deux prothèse tibiales de course" className="img-champion" />
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
             
              color: white;
              
              
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
          background: rgb(196, 196, 196);
          max-width: 800px;
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
          background: rgb(196, 196, 196);
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

        .img-champion {
          width: 300px;
          height: auto;
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

