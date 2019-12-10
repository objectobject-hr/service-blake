import React from 'react'

function Package({ product }) {
  return (
    <div style={{ paddingLeft: 40, paddingRight: 40 }}>
      <div style={{ fontWeight: 'bold', marginBottom: 16 }}>
        Packages: {product.packages}
      </div>
      <div style={{ fontWeight: 'bold' }}>{product.name.toUpperCase()}</div>
      <div>{product.type}</div>
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
    </div>
  )
}

export default Package
