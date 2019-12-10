import React from 'react'

function Care({ product }) {
  return (
    <div style={{ whiteSpace: 'pre-wrap', paddingLeft: 40, paddingRight: 40 }}>
      {product.care}
    </div>
  )
}

export default Care
