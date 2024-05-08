import React from 'react';

export default function Filter() {
  return (
    <div className='flex '>
      <section className='flex flex-col  border p-7 mt-10' >
        <div className='mt-5 flex '>
          <label htmlFor="filter">Filters</label>
          <label htmlFor="reset">Reset</label>
        </div>
        <input type="text" placeholder='Enter address or postal Zip code'  className='border '/>

        <div className='mt-5 flex flex-col'>
          <label htmlFor="priceRange">Price Range</label>
          <input type="range" id="priceRange" />

          <div className='mt-5 mb-5 '>
            <label htmlFor="no-rooms">Number of Rooms</label>
            <div id='no-room' className=''>
              <label htmlFor="one"> 1
               <input type="checkbox" id='one' />
              </label>
              <label htmlFor=""> 2
               <input type="checkbox" id='2' />
              </label>
              <label htmlFor=""> 3
               <input type="checkbox" id='3' />
              </label>
              <label htmlFor=""> 4
               <input type="checkbox" id='4' />
              </label>
              <label htmlFor=""> 5
               <input type="checkbox" id='5' />
              </label>
              <label htmlFor=""> 6+
               <input type="checkbox" id='6' />
              </label>
              
              



            </div>
          </div>
          
        </div>
        <div className='mt-5    space-x-3'>
          <label htmlFor="category" className='flex flex-col'>Bathroom</label>
          <button className='bg-amber-900 text-white font-bold rounded-2xl w-16'>All</button>
          <button>Combined</button>
          <button>Seperate</button>
        </div>
        <div className='mt-5  space-x-3'>
          <label htmlFor="sortBy" className='flex flex-col'>View</label>
          <button className='bg-amber-900 text-white font-bold rounded-2xl w-16'>All</button>
          <button>Courtyard</button>
          <button>Street</button>
        </div>
       <label htmlFor="criteria" className='mt-5 mb-5'> Basic Criteria
       <div className=' grid grid-cols-2' id='criteria'>
          <label htmlFor="">newly built
            <input type='checkbox'/>
          </label>
          <label htmlFor="">Furnished
            <input type='checkbox'/>
          </label>
          <label htmlFor="">parking space
            <input type='checkbox'/>
          </label>
          <label htmlFor="">swimming pool
            <input type='checkbox'/>
          </label>
        </div>
       </label>

        
        <p></p>
        <div className='flex flex-col gap-2 text-white font-bold'>
          <button className='bg-amber-600'>All filters</button>
          <button className='bg-amber-900'>Show results</button>
        </div>
      </section>
    </div>
  );
}
