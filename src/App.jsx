//! Consegna

/* Creiamo il frontend del nostro Blog e le sue pagine!

    Partiamo installando React Router DOM: npm install react-router-dom
    
    Definiamo almeno 3 pagine: una homepage, una pagina “chi siamo” e una pagina con la lista dei post - 
    
    Implementiamo una navbar in comune a tutte le pagine per poter navigare tra loro

Bonus - 

    Centralizzare la Navbar grazie a un Layout

    Gestire la classe active*/

// import { useState } from 'react'

/* Import pages */
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PostListPage from "./pages/PostListPage";
import NotFoundPage from "./pages/NotFoundPages";

/* Import Outlet */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefoultLayout from "./defaultLayout/DefaultLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefoultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/postList" Component={PostListPage} />
          <Route path="*" Component={NotFoundPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
