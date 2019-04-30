import React from 'react'

import Section from 'components/Section'
import Itineraries from 'components/Itineraries'
import { Title } from 'components/UI'

import data from 'data/sample.json'
import { categoriseText } from 'util/helpers'

// Initialize outside so does not cause unnecessary rerenders
// Returns the itineraries organised by category 0-9 and alphabetically
let itineraries = categoriseText(data.itineraries)

const App = () => {
  return (
    <div className='container'>
      <Title>Pickyourtrail sitemap</Title>
      {/* Destination Section - Show all destinations in alphabetical order */}
      <Section
        title='Destinations'
        data={data.destinations.filter(item => item.url.includes('/packages/'))} // Only main packages
      />
      {/* Themed Vacations Section - Show all themed vacations in alphabetical order */}
      <Section
        title='Themed vacations'
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
