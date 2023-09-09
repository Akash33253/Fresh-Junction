import React from 'react'
import About from './About'
import Special from './Special'
import Banner from './Banner'

export default function Main() {
  return (
    <div className='container-fluid' id='main'>
        <Banner/>
        <About/>
        <Special/>
    </div>
  )
}
