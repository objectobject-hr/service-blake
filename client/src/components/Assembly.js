import React from 'react'
import styled from 'styled-components'
import rabbit from '../images/rabbit.svg'

const StyledSpan = styled.span`
  text-decoration: underline;
  color: #0058a3;
  cursor: pointer;
  user-select: none;
  &:hover {
    color: #3379b5;
  }
`

const StyledButton = styled.button`
  color: #111;
  padding: 10px;
  width: 176px;
  border: 2px solid #111;
  border-radius: 2px;
  font-size: 1rem;
  line-height: 1.5;
  cursor: pointer;
  transition-property: background-color, border-radius, width;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0, 1);
  &:hover {
    background: #333;
    color: #fff;
    border-radius: 4px;
  }
  &:active {
    background: #333;
    border-radius: 8px;
  }
`

function Assembly({ product }) {
  return (
    <div>
      <div style={{ display: 'flex', marginBottom: 8 }}>
        <div style={{ fontWeight: 'bold', width: 115 }}>Article Number</div>
        <div style={{ fontWeight: 'bold', paddingLeft: 16 }}>
          Assembly Instructions
        </div>
      </div>
      <div style={{ display: 'flex', marginBottom: 24 }}>
        <div style={{ fontWeight: 'bold', width: 115 }}>
          <div
            style={{
              background: '#111',
              fontSize: '.75rem',
              lineHeight: 2,
              color: '#fff',
              display: 'inline-block',
              padding: '0px 8px 0px 8px'
            }}
          >
            {product.identifier}
          </div>
        </div>
        <div style={{ paddingLeft: 16 }}>
          <StyledSpan>
            {product.name.toUpperCase()} {product.type}
          </StyledSpan>
        </div>
      </div>
      <img src={rabbit} style={{ height: 40, width: 200 }} />
      <details
        style={{
          cursor: 'pointer',
          fontSize: '.65rem',
          userSelect: 'none'
        }}
      >
        <summary>What is TaskRabbit?</summary>
        <div style={{ fontSize: '1rem', marginBottom: 8 }}>
          We’ve partnered with TaskRabbit to provide you with even more assembly
          options to choose from. TaskRabbit offers quick and convenient
          assembly and mounting for your IKEA purchases made online and in
          select stores.
        </div>
      </details>
      <div
        style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: 16 }}
      >
        Looking to book an assembly service?
      </div>
      <div style={{ marginBottom: 8 }}>
        Find out if assembly service is available in your area
      </div>
      <input
        style={{
          marginRight: 8,
          height: 12,
          padding: 16,
          width: 144,
          border: '1px solid #959595',
          borderRadius: '2px',
          fontSize: '1rem',
          lineHeight: '1.5'
        }}
        placeholder="Zip Code"
      />
      <StyledButton>Check Availability</StyledButton>
    </div>
  )
}

export default Assembly
