import React from 'react'
import Section from './components/Section'
import Description from './components/Description'

const sections = [
  { name: 'Product description', data: <Description /> },
  { name: 'Product size', data: 'test' },
  { name: 'Care instructions', data: 'test' },
  { name: 'Environment & materials', data: 'test' },
  { name: 'Package details', data: 'test' },
  { name: 'Assembly & documents', data: 'test' },
  { name: 'Reviews', data: 'test' },
  { name: 'Product availability', data: 'test' }
]

function App() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        fontFamily: `'Noto IKEA', 'Noto Sans', 'Roboto', 'Open Sans', sans-serif`,
        marginTop: 36,
        marginBottom: 36
      }}
    >
      <div style={{ maxWidth: 1200, flexGrow: 1 }}>
        {sections.map((section, i) => (
          <Section {...section} key={`section-${i}`} />
        ))}
        <hr
          style={{
            margin: '0',
            borderTop: '1px solid #ccc',
            borderBottom: '0'
          }}
        />
      </div>
    </div>
  )
}

export default App
