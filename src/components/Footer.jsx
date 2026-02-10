import React from 'react'; 
import { Link } from 'react-router-dom';

function Footer() {
    return (
    <div>
         <footer className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white mt-20">
      <div className="max-w-7xl mx-auto  grid md:grid-cols-3 gap-8">
        
     
        <div>
          <h3 className="text-2xl font-bold mb-4">Centre de Formation</h3>
          <p className="text-white/90">
            Nous proposons des formations modernes, workshops et événements
            pour développer vos compétences professionnelles.
          </p>
        </div>

      
        <div>
          <h3 className="text-xl font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            {/* <li>
              <Link to="/Formulaireprparticiper" className="hover:underline">
                Participer
              </Link>
            </li> */}
            {/* <li>
              <Link to="/Eventpages" className="hover:underline">
                Événements
              </Link>
            </li> */}
            {/* <li>
              <Link to="/Contactus" className="hover:underline">
                Contact
              </Link>
            </li> */}
          </ul>
        </div>

      
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-white/90">
            <li> Casablanca, Maroc</li>
            <li> +212 6 12 34 56 78</li>
            <li>contact@centreformation.ma</li>
          </ul>
        </div>
      </div>

     
      <div className="border-t border-white/20 text-center py-4 text-sm text-white/80">
        Centre de Formation — Tous droits réservés
      </div>
    </footer>
    </div>
    );
}

export default Footer;