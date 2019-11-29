import React from 'react'

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
          <div key={`section-${i}`}>{section}</div>
        ))}
      </div>
    </div>
  )
}

export default Root
