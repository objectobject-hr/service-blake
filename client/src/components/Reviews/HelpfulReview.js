import React from 'react'
import Stars from './Stars'
import moment from 'moment'

function HelpfulReview({ reviews, type }) {
  const review = reviews[Math.floor(Math.random() * (reviews.length - 1))]
  let date
  if (review) {
    date = moment().diff(moment(review.date), 'months') + ' months ago'
    if (date === '0 months ago')
      date = moment().diff(moment(review.date), 'days') + ' days ago'
  }
  return (
    <div>
      <div style={{ marginBottom: 20 }}>Most Helpful {type} Review</div>
      {review && (
        <div>
          <Stars percent={review.stars / 5} />
          <div style={{ paddingLeft: 4, marginBottom: 8 }}>
            {review.username}
            <span style={{ color: 'lightgrey', marginLeft: 4 }}>
              • <span style={{ fontStyle: 'italic' }}>{date}</span>
            </span>
          </div>
          <div style={{ marginBottom: 16 }}>{review.title}</div>
          <div
            style={{
              marginBottom: 12,
              height: 38,
              textOverflow: 'ellipsis',
              overflow: 'hidden'
            }}
          >
            {review.text.substring(0, 150)}
            {review.text.length > 150 && '...'}
          </div>
          <div>
            {review.helpful} out of {review.helpful + review.notHelpful} people
            found this helpful
          </div>
        </div>
      )}
    </div>
  )
}

export default HelpfulReview
