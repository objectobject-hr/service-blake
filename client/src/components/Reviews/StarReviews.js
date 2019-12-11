import React, { useState, useEffect } from 'react'

function StarReviews({ reviews }) {
  const [stars, setStars] = useState([])

  useEffect(() => {
    const stars = [0, 0, 0, 0, 0]

    for (let i = 0; i < reviews.length; i++) {
      stars[reviews[i].stars - 1]++
    }

    setStars(stars)
  }, [])

  return (
    <div>
      <div style={{ marginBottom: 10 }}>Rating Snapshot</div>
      <div style={{ marginBottom: 10 }}>
        Select a row below to filter reviews
      </div>
      <div style={{ paddingLeft: 6 }}>
        {stars
          .map((count, i) => (
            <div
              key={`star-reviews-${i}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: 16,
                marginBottom: 16
              }}
            >
              <span style={{ marginRight: 4 }}>{i + 1}</span>
              <span style={{ fontSize: 8 }}>★</span>
              <span
                style={{
                  width: 255,
                  height: 10,
                  marginLeft: 10,
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
                    borderRadius: 2,
                    boxSizing: 'border-box'
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    backgroundColor: '#fc0',
                    width: (stars[i] / reviews.length) * 100 + '%',
                    height: '100%',
                    borderRadius: 2
                  }}
                />
              </span>
              <span style={{ paddingLeft: 36 }}>{count}</span>
            </div>
          ))
          .reverse()}
      </div>
    </div>
  )
}

export default StarReviews
