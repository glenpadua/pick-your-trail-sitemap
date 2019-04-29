import React from 'react'

import Section from 'components/Section'
import Itineraries from 'components/Itineraries'
import data from 'data/sample.json'

import {
  Title
} from 'components/UI'

const App = () => {
  return (
    <div className='container xs-full-width'>
      <div className='row'>
        <Title>Pickyourtrail sitemap</Title>
      </div>
      {/* Destination Section - Show all destinations in alphabetical order */}
      <Section
        title='Destinations'
        data={data.destinations}
      />
      {/* Themed Vacations Section - Show all themed vacations in alphabetical order */}
      <Section
        title='Themed Vacations'
        data={data.vacations}
      />
      {/* Show all section -  */}
      <Itineraries
        title={`Showing all ${data.itineraries.length} pages`}
        data={data.itineraries}
      />
    </div>
  )
}

export default App
