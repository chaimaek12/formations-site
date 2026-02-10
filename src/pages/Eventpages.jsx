import React from 'react';
// import { images } from '../constant';
import Temoidata from "../Data/Temoidata"
function Eventpages() { 
    return (
        // <div>
        //     <h1>my event page </h1>
        //        {/* <img src={images.pic1} alt="" /> */}
        // </div>

    //     <section className="py-20 bg-gray-50">
    //   <h2 className="text-3xl font-bold text-center mb-12">Témoignages</h2>

    //   <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
    //     {Temoidata.map((t) => (
    //       <div
    //         key={t.id}
    //         className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
    //       >
    //         <div className="flex items-center mb-4">
             
    //           <div>
    //             <h3 className="font-semibold">{t.name}</h3>
    //             <p className="text-gray-500 text-sm">{t.role}</p>
    //           </div>
    //         </div>
    //         <p className="text-gray-600">{t.comment}</p>
    //       </div>
    //     ))}
    //   </div>
    // </section>
    <section className="py-20 bg-gradient-to-r from-purple-100 via-pink-50 to-red-100">
  <h2 className="text-4xl font-bold text-center mb-12 text-purple-700 animate-pulse">
    Témoignages
  </h2>

  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
    {Temoidata.map((t) => (
      <div
        key={t.id}
        className="bg-white p-6 rounded-2xl shadow-lg transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl transition-all duration-500"
      >
        <div className="flex items-center mb-6">
          
          <img
            src={t.photo}
            alt={t.name}
            className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-purple-300"
          />
          <div>
            <h3 className="font-semibold text-lg text-purple-700">{t.name}</h3>
            <p className="text-gray-500 text-sm">{t.role}</p>
          </div>
        </div>
        <p className="text-gray-700 italic relative before:content-['“'] before:text-4xl before:text-purple-200 before:absolute before:-top-2 before:-left-2 before:opacity-20 after:content-['”'] after:text-4xl after:text-purple-200 after:absolute after:-bottom-2 after:-right-2 after:opacity-20">
          {t.comment}
        </p>
      </div>
    ))}
  </div>
</section>


    );
}

export default Eventpages;