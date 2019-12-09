import React, { useState, useEffect } from 'react'
import plus from '../images/plus.png'
import styled from 'styled-components'

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
        <div
          style={{
            marginTop: 4,
            paddingLeft: 40,
            paddingRight: 40,
            paddingBottom: 40
          }}
        >
          {React.cloneElement(component, { ...data })}
        </div>
      )}
    </div>
  )
}

export default Section
