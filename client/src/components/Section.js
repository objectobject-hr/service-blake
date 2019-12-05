import React, { useState, useEffect } from 'react'
import plus from '../images/plus.png'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border-top: 1px solid #ccc;
  cursor: pointer;
  user-select: none;
  &:hover {
    background: hsla(0, 0%, 96%, 0.6);
  }
`

function Section({ name, component, data }) {
  const [open, setOpen] = useState(false)
  const [bottom, setBottom] = useState(10)
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setBottom(0)
        setOpacity(1)
      })
    } else {
      setBottom(10)
      setOpacity(0)
    }
  })

  return (
    <div>
      <StyledDiv
        onClick={() => setOpen(!open)}
        style={{ background: open && 'hsla(0, 0%, 96%, 0.6)' }}
      >
        <img
          src={plus}
          height="10"
          width="10"
          style={{
            padding: 22,
            transform: `rotate(${open ? '-45' : '0'}deg)`,
            transition: 'transform .3s cubic-bezier(.4,0,0,1)'
          }}
        />
        <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>{name}</div>
      </StyledDiv>
      <div
        style={{
          paddingLeft: 40,
          paddingRight: 40,
          paddingBottom: 40,
          display: open ? 'block' : 'none'
        }}
      >
        <div
          style={{
            position: 'relative',
            bottom: bottom,
            opacity: opacity,
            transitionProperty: 'opacity, bottom',
            transitionDuration: '.3s',
            transitionTimingFunction: 'ease-out'
          }}
        >
          {React.cloneElement(component, { ...data })}
        </div>
      </div>
    </div>
  )
}

export default Section
