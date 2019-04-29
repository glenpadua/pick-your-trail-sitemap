import React from 'react'

import Destinations from 'components/Destinations'
import ThemedVacations from 'components/ThemedVacations'
import Itineraries from 'components/Itineraries'

import {
  Title
} from 'components/UI'

const App = () => {
  return (
    <div className='container xs-full-width'>
      <Title>Pickyourtrail sitemap</Title>
      {/* Destination Section - Show all destinations in alphabetical order */}
      <Destinations />
      {/* Themed Vacations Section - Show all themed vacations in alphabetical order */}
      <ThemedVacations />
      {/* Show all section -  */}
      <Itineraries />
    </div>
  )
}

export default App
