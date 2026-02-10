import React from 'react';
import Eventdata from "../Data/Eventdata";
import { Link } from 'react-router-dom';
import EventPages from '../pages/Eventpages';


function Homes() {
    return (
    //     <div className='p-6'>
    //          <h1 className='text-2xl font-bold mb-4 '>Liste des événements</h1>
    //         {/* anmapehom mn data  */}
    //          <div className='grid gap-4'>
    //             {Eventdata.map((event)=>(
    //                 <div  key={event.id} className='border p-4 rounded shadow' >
    //    <h2 className='text-xl font-semibold'>{event.title}</h2>
    //        <p>{event.date}</p> 
    //        <p>{event.location}</p>        
    //         <p className="text-gray-600">
    //           {event.description}
    //         </p> 
    //          <Link
    //           to={`/Eventpages/${EventPages.id}`}
    //           className="text-blue-600 underline"
    //         ></Link> 
    //                 </div>
    //             ))}

    //          </div>

         
    //     </div>
     <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Liste des événements
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Eventdata.map((event) => (
          <div
            key={event.id}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <h2 className="text-xl font-bold mb-2 text-purple-600">
              {event.title}
            </h2>
            <p className="text-gray-500 mb-1">{event.date}</p>
            <p className="text-gray-500 mb-3">{event.location}</p>
            <p className="text-gray-600 mb-4">{event.description}</p>
            <Link
              to={`/Eventpages/${event.id}`}
              className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors font-semibold"
            >
              Voir l'événement
            </Link>
          </div>
        ))}
      </div>
    </div>
    );
}

export default Homes;