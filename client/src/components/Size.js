import React from 'react'

function Size({ product }) {
  return (
    <div>
      <div>
        <span style={{ fontWeight: 'bold' }}>Length:</span> {product.length}"
      </div>
      <div>
        <span style={{ fontWeight: 'bold' }}>Width:</span> {product.width}"
      </div>
      <div>
        <span style={{ fontWeight: 'bold' }}>Height:</span> {product.height}"
      </div>
    </div>
  )
}

export default Size
