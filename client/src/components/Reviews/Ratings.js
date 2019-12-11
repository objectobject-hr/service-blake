import React from 'react'
import Stars from './Stars'

function Ratings({ averages }) {
  const ratings = [
    ['Value for money', averages.valueForMoney],
    ['Product quality', averages.productQuality],
    ['Appearance', averages.appearance],
    ['Ease of assembly/installation', averages.ease],
    ['Works as expected', averages.worksAsExpected]
  ]
  return (
    <div style={{ paddingLeft: 10 }}>
      <div style={{ marginBottom: 32 }}>Average Customer Ratings</div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
        <span style={{ width: 185 }}>Overall</span>
        <Stars percent={averages.overall / 5} />
      </div>
      {ratings.map((rating, i) => (
        <Rating name={rating[0]} key={`rating-${i}`} average={rating[1]} />
      ))}
    </div>
  )
}

function Rating({ name, average }) {
  const percents = [20, 40, 60, 80]
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
      <span style={{ width: 185 }}>{name}</span>
      <span
        style={{
          width: 145,
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
  )
}

export default Ratings
