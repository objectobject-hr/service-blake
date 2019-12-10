import React, { useState } from 'react'
import plus from '../images/plus.svg'
import styled, { keyframes } from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-top: 1px solid #ccc;
  cursor: pointer;
  user-select: none;
  &:hover {
    background: hsla(0, 0%, 96%, 0.6);
  }
`

const fadeIn = keyframes`
from {
  opacity: 0;
  bottom: 10;
}

to {
  opacity: 1;
  bottom 0;
}
`

const AnimatedDiv = styled.div`
  animation-name: ${fadeIn};
  animation-duration: 0.3s;
  animation-timing-function: ease-out;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`

function Section({ name, component, data }) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <StyledDiv onClick={() => setOpen(!open)}>
        <img
          src={plus}
          height="10"
          width="10"
          style={{
            padding: 11,
            transform: `rotate(${open ? '-45' : '0'}deg)`,
            transition: 'transform .3s cubic-bezier(.4,0,0,1)'
          }}
        />
        <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>{name}</div>
      </StyledDiv>
      {open && (
        <AnimatedDiv
          style={{
            marginTop: 4,
            paddingBottom: 40,
            display: open ? 'block' : 'none',
            opacity: 0,
            bottom: 10,
            position: 'relative'
          }}
        >
          {React.cloneElement(component, { ...data })}
        </AnimatedDiv>
      )}
    </div>
  )
}

export default Section
