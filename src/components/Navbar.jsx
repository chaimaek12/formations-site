import React from 'react';
import { Link } from "react-router-dom"



function Navbar() {
    return (
        <>
   
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-5 shadow-lg">
      <nav className="flex justify-center space-x-8">
        {["accueil", "nos formations", "contacus","Témoignages"].map(
          (item) => (
            <Link
              key={item}
              to={item === "Homes" ? "/" : `/${item}`}
              className="relative text-white font-semibold text-lg
                         after:block after:absolute after:bottom-0 after:left-0
                         after:w-0 after:h-0.5 after:bg-white after:transition-all
                         hover:after:w-full after:duration-300"
            >
              {item}
            </Link>
          )
        )}
      </nav>
    </div>
    <div>
      <section className="bg-gray-100 text-center py-32 px-5">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Bienvenue au Centre de Formation
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Développez vos compétences avec nos formations modernes et interactives.
        </p>
        <Link
          to="/contacus"
          className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-colors"
        >
          Inscrivez-vous Maintenant
        </Link>
      </section>
    </div>
     </>
    );
}

export default Navbar;