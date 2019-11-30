import React from 'react'
import plus from './images/plus.png'

const sections = [
  'Product description',
  'Product size',
  'Care instructions',
  'Environment & materials',
  'Package details',
  'Assembly & documents',
  'Reviews',
  'Product availability'
]

function Root() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        fontFamily: `'Noto IKEA', 'Noto Sans', 'Roboto', 'Open Sans', sans-serif`
      }}
    >
      <div style={{ maxWidth: 1200, flexGrow: 1 }}>
        {sections.map((section, i) => (
          <Section section={section} key={`section-${i}`} />
        ))}
      </div>
    </div>
  )
}

function Section({ section }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: 5 }}>
      <img src={plus} height="10" width="10" style={{ padding: 22 }} />
      <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>{section}</div>
    </div>
  )
}

export default Root
