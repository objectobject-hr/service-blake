import React from 'react'

function EandM({ product }) {
  return (
    <div style={{ paddingLeft: 40, paddingRight: 40 }}>
      <div style={{ fontWeight: 'bold', marginBottom: 16 }}>Environment</div>
      <div style={{ marginBottom: 16 }}>{product.environment}</div>
      <div style={{ fontWeight: 'bold', marginBottom: 16 }}>Materials</div>
      <div style={{ marginBottom: 16 }}>{product.materials}</div>
    </div>
  )
}

export default EandM
