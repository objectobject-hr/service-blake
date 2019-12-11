import React from 'react'
import star from '../../images/star.png'

function Stars({ percent }) {
  percent = 100 * percent
  return (
    <span
      style={{
        position: 'relative',
        width: 100,
        height: 20,
        display: 'inline-block'
      }}
    >
      <img
        src={star}
        style={{
          height: 20,
          zIndex: 1,
          position: 'absolute'
        }}
      />
      <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
        <div
          style={{
            width: percent + '%',
            height: '100%',
            backgroundColor: '#fc0',
            display: 'inline-block'
          }}
        />
        <div
          style={{
            width: 100 - percent + '%',
            height: '100%',
            backgroundColor: 'hsl(0, 0%, 89%)',
            display: 'inline-block'
          }}
        />
      </div>
    </span>
  )
}

export default Stars
