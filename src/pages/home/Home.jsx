import React from 'react'
import Hero from './Hero'
import Topsellers from './Topsellers'
import Recomended from './Recomended'
import News from './News'

export default function Home() {
  return (
    <div>
     <Hero/>
     <Topsellers/>
     <Recomended/>
     <News/>
    </div>
  )
}
