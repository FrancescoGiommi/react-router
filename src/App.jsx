//! Giorno 1

/*Consegna

 Creiamo il frontend del nostro Blog e le sue pagine!

    Partiamo installando React Router DOM: npm install react-router-dom
    
    Definiamo almeno 3 pagine: una homepage, una pagina “chi siamo” e una pagina con la lista dei post - 
    
    Implementiamo una navbar in comune a tutte le pagine per poter navigare tra loro

Bonus - 

    Centralizzare la Navbar grazie a un Layout

    Gestire la classe active*/

//! Giorno 2

/* Consegna

    Completiamo il nostro routing con l’aggiunta delle pagine di dettaglio!

    Recuperiamo la lista completa dei posts da Express
    
    Aggiungiamo alla lista i link alle pagine di dettaglio dei post
    
    Facciamo quindi in modo di raggiungere la pagina di dettaglio del singolo post


    Bonus

    Gestire l'eliminazione di una risorsa (modificato) */

// import { useState } from 'react'

/* Import pages */
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPages";
import IndexPosts from "./pages/posts/IndexPosts";
import ShowPost from "./pages/posts/ShowPosts";

/* Import Outlet */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefoultLayout from "./Layout/DefaultLayout";
import AlternativeLayout from "./Layout/AlternativeLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefoultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
          <Route path="*" Component={NotFoundPage} />
        </Route>

        <Route Component={AlternativeLayout}>
          <Route path="/posts">
            <Route index Component={IndexPosts} />
            <Route path="ShowPosts" Component={ShowPost} />
            <Route />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
