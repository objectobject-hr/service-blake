import React from 'react'
import moment from 'moment'
import Stars from './Stars'
import check from '../../images/check.svg'
import x from '../../images/x.svg'
import Rating from './Rating'
import './Review.scss'

function Review({ data, averages }) {
  const ratings = [
    ['Value for money', averages.valueForMoney],
    ['Product quality', averages.productQuality],
    ['Appearance', averages.appearance],
    ['Ease of assembly/installation', averages.ease],
    ['Works as expected', averages.worksAsExpected]
  ]
  let date
  if (data) {
    date = moment().diff(moment(data.date), 'months') + ' months ago'
    if (date === '0 months ago')
      date = moment().diff(moment(data.date), 'days') + ' days ago'
  }

  return (
    <div
      style={{
        fontSize: 11,
        borderTop: '1px solid lightgrey',
        paddingTop: 16,
        paddingBottom: 16,
        marginBottom: 8,
        paddingLeft: 10,
        paddingRight: 10
      }}
    >
      <div style={{ display: 'flex' }}>
        <div style={{ flexGrow: 1 }}>
          <div
            style={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}
          >
            <Stars percent={data.stars / 5} />
            <div
              style={{
                paddingLeft: 8,
                paddingRight: 4,
                display: 'inline-block'
              }}
            >
              {data.username}
              <span style={{ color: 'lightgrey', marginLeft: 4 }}>
                • <span style={{ fontStyle: 'italic' }}>{date}</span>
              </span>
            </div>
          </div>
          <div style={{ paddingLeft: 4, marginBottom: 24 }}>
            <div style={{ fontSize: 14, marginBottom: 16 }}>{data.title}</div>
            <div style={{ marginBottom: 24 }}>{data.text}</div>
            <div>
              {data.recommend ? (
                <div>
                  <img src={check} style={{ height: 8 }} />{' '}
                  <span style={{ marginLeft: 2, fontWeight: 700 }}>Yes</span>,{' '}
                  <span style={{ paddingLeft: 6 }}>
                    I recommend this product.
                  </span>
                </div>
              ) : (
                <div>
                  <img src={x} style={{ height: 8 }} />{' '}
                  <span style={{ marginLeft: 2, fontWeight: 700 }}>No</span>,{' '}
                  <span style={{ paddingLeft: 6 }}>
                    I do not recommend this product.
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div style={{ paddingLeft: 32, marginTop: 75 }}>
          {ratings.map((rating, i) => (
            <Rating
              name={rating[0]}
              average={rating[1]}
              key={`review-ratings-${i}`}
            />
          ))}
        </div>
      </div>
      <div>
        Helpful?
        <button className="bm-review-1">Yes • {data.helpful}</button>
        <button className="bm-review-1">No • {data.notHelpful}</button>
        <button className="bm-review-1">Report</button>
      </div>
    </div>
  )
}

export default Review
