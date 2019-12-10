import React, { useState, useEffect } from 'react'
import Section from './components/Section'
import sections from './data/sections'
import axios from 'axios'
import rightArrow from './images/right-arrow.svg'
import styled from 'styled-components'

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
        {data && (
          <div style={{ margin: 16 }}>
            <MoreButton name={data.product.name} />
          </div>
        )}
      </div>
    </div>
  )
}

const StyledImg = styled.img`
  height: 24px;
  margin-left: 8px;
  filter: invert(0);
  transition-property: filter;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0, 1);
`

const StyledButton = styled.button`
  display: flex;
  align-content: center;
  color: #111;
  padding: 10px;
  width: 176px;
  border: 2px solid #111;
  border-radius: 2px;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5;
  cursor: pointer;
  transition-property: background-color, border-radius;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0, 1);
  &:hover {
    background: #111;
    color: #fff;
    border-radius: 4px;
  }
  &:active {
    background: #333;
    border-radius: 8px;
  }
  &:hover ${StyledImg} {
    filter: invert(1);
  }
`

function MoreButton({ name }) {
  return (
    <StyledButton
      style={{
        width: 'auto',
        padding: '10px 24px 10px 24px',
        margin: 'auto'
      }}
    >
      More in the {name.toUpperCase()} collection <StyledImg src={rightArrow} />
    </StyledButton>
  )
}

export default App
