import React, { useState } from 'react'
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

function Section({ name, data }) {
  const [open, toggle] = useState(false)
  return (
    <div>
      <StyledDiv onClick={() => toggle(!open)}>
        <img src={plus} height="10" width="10" style={{ padding: 22 }} />
        <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>{name}</div>
      </StyledDiv>
      <div
        style={{
          paddingLeft: 40,
          paddingRight: 40,
          paddingBottom: 40,
          height: open ? 'auto' : 0
        }}
      >
        {data}
      </div>
    </div>
  )
}

export default Section
