import React from 'react'

function Description({ product }) {
  return (
    <div style={{ paddingLeft: 40, paddingRight: 40 }}>
      <div
        style={{
          background: '#111',
          fontSize: '.75rem',
          lineHeight: 2,
          color: '#fff',
          display: 'inline-block',
          padding: '0px 8px 0px 8px',
          marginBottom: 16
        }}
      >
        {product.identifier}
      </div>
      <div style={{ whiteSpace: 'pre-wrap' }}>{product.description}</div>
    </div>
  )
}

export default Description
