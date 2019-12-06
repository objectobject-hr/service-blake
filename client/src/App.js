import React, { useState, useEffect } from 'react'
import Section from './components/Section'
import sections from './data/sections'
import axios from 'axios'

function App() {
  const [data, setData] = useState()
  useEffect(() => {
    axios
      .get('/test')
      .then(data => setData(data.data))
      .catch(err => console.error(err))
  }, [])

  console.log(data)
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        fontFamily: `'Noto IKEA', 'Noto Sans', 'Roboto', 'Open Sans', sans-serif`,
        marginTop: 36,
        marginBottom: 36,
        lineHeight: 1.5
      }}
    >
      <div style={{ maxWidth: 1200, flexGrow: 1 }}>
        {data &&
          sections.map((section, i) => (
            <Section {...section} key={`section-${i}`} data={data} />
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
