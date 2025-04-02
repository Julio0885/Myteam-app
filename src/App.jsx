import { useState } from 'react'
import { Cards } from './components/cards'


function App() {
  

  return (
    <>
      <header className='flex flex-col md:flex-row text-center md:text-left md:justify-between mt-4 md:mt-8'>
        <figure >
          <img className="" src="" alt="" width="40"/>
        </figure>
        <h1 className='justify-center items-center md:text-left md:mr-auto md:text-4xl md:ml-4 text-2xl font-bold px-2 py-2 mb-2 md:mt-4'>The Creative Crew</h1>
        <p className='text-xl text-black mb-5 md:mb-6 md:mr-12'>Who we are <br/>
          We are team of creatively diverse. <br/>
          driven. Innovate individuals working in <br/>
          various locations from the world.
        </p>
      </header>
      <section className='grid grid-cols-2 md:grid-cols-3 sm:mx-auto md:ml-4 md:mr-4 gap-4'>
        <Cards/>
        
      </section>
    </>
  )
}

export default App
