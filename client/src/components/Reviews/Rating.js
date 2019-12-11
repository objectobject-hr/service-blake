import React from 'react'

function Rating({ name, average }) {
  const percents = [20, 40, 60, 80]
  return (
    <div>
      <div style={{ marginBottom: 4 }}>{name}</div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
        <span
          style={{
            width: 280,
            height: 8,
            position: 'relative',
            boxSizing: 'border-box'
          }}
        >
          <span
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              border: '1px solid #e6e6e6',
              boxSizing: 'border-box'
            }}
          ></span>
          <span
            style={{
              position: 'absolute',
              backgroundColor: '#fc0',
              width: (average / 5) * 100 + '%',
              height: '100%',
              borderRadius: 2
            }}
          />
          {percents.map((percent, i) => (
            <span
              key={`average-ratings-${i}`}
              style={{
                zIndex: 1,
                position: 'absolute',
                height: 8,
                borderRight: '1px solid #808080',
                width: percent + '%'
              }}
            />
          ))}
        </span>
      </div>
    </div>
  )
}

export default Rating
