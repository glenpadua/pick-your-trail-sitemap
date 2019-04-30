import React from 'react'

import Section from 'components/Section'
import Itineraries from 'components/Itineraries'
import data from 'data/sample.json'
import { categoriseText } from 'util/helpers'

import {
  Title
} from 'components/UI'

// Initialize outside so does not cause unnecessary rerenders
let itineraries = categoriseText(data.itineraries)

const App = () => {
  return (
    <div className='container'>
      <div>
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
        normalize
      />
      {/* Show all section - All pages grouped by starting letter numerically and alphabetically */}
      <Itineraries
        title={`Showing all ${data.itineraries.length} pages`}
        data={itineraries}
      />
    </div>
  )
}

export default App
