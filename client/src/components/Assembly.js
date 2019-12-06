import React from 'react'
import styled from 'styled-components'

const StyledSpan = styled.span`
  text-decoration: underline;
  color: #0058a3;
  cursor: pointer;
  user-select: none;
  &:hover {
    color: #3379b5;
  }
`

function Assembly({ product }) {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div style={{ fontWeight: 'bold', marginBottom: 16, width: 115 }}>
          Article Number
        </div>
        <div style={{ fontWeight: 'bold', marginBottom: 16, paddingLeft: 16 }}>
          Assembly Instructions
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ fontWeight: 'bold', marginBottom: 16, width: 115 }}>
          <div
            style={{
              background: '#111',
              fontSize: '.75rem',
              lineHeight: 2,
              color: '#fff',
              display: 'inline-block',
              fontWeight: 700,
              padding: '0px 8px 0px 8px',
              marginBottom: 16
            }}
          >
            {product.identifier}
          </div>
        </div>
        <div style={{ marginBottom: 16, paddingLeft: 16 }}>
          <StyledSpan>
            {product.name.toUpperCase()} {product.type}
          </StyledSpan>
        </div>
      </div>
    </div>
  )
}

export default Assembly
