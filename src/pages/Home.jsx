import React from "react";
// import FooterPokeball from "../componentes/LayautFolder/FooterPokeball";
import {useDispatch} from "react-redux";
import FormNameUser from "../components/FormNameUser";
import './styles/home.css';


const Home = () => {

 const dispatch = useDispatch()


    const handleSubmit =(e) =>{
       e.preventDefault()
       const nameTrainer= e.target.nameTrainer.value
       console.log(nameTrainer)
    }
  return (
    <main className="home__container">
      <section className="home__body">
        
          <div className="home__body-banner">
              <img src="/img/otros/logo_Pokedex_png_SFondo.png" alt="" />
          </div>

          <article className="home__body-saludo-login">
              
              <h2>Hello Trainer !</h2>
              <p>To start give your name</p>
              
              <FormNameUser/>

          </article>
      </section>

      <div className="home__footer">
      <img src="/img/otros/footer_Pokedex_png_SFondo  cortito mas alto.png" alt="" />
      </div>
      
      {/* <FooterPokeball /> */}
    </main>
  );
};

export default Home;
