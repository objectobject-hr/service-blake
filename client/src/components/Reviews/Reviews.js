import React from 'react'
import Review from './Review'
import StarReviews from './StarReviews'
import Ratings from './Ratings'
import HelpfulReview from './HelpfulReview'
import './Reviews.scss'

function Reviews({ reviews, averages }) {
  return (
    <div style={{ paddingLeft: 10, paddingRight: 10 }}>
      <div style={{ marginBottom: 48 }}>
        <div
          style={{
            paddingTop: 20,
            paddingBottom: 20,
            marginLeft: 10,
            marginRight: 10,
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <span style={{ fontSize: '18px' }}>Reviews</span>
          <span>
            <button className="bm-reviews-1">Write a review</button>
          </span>
        </div>
        <div
          style={{
            fontSize: '11px',
            fontFamily: 'Open Sans", sans-serif'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '50% 50%',
              gridColumnGap: 50,
              gridRowGap: 16,
              paddingLeft: 20
            }}
          >
            <StarReviews reviews={reviews} />
            <Ratings averages={averages} />
            <HelpfulReview reviews={reviews} type="Favorable" />
            <HelpfulReview reviews={reviews} type="Critical" />
          </div>
        </div>
      </div>
      <div style={{ fontSize: 11, marginBottom: 16, paddingLeft: 20 }}>
        {reviews.length} {reviews.length === 1 ? 'Review' : 'Reviews'}
      </div>
      <div style={{ padding: 10 }}>
        {reviews.map((review, i) => (
          <Review data={review} averages={averages} key={`review-${i}`} />
        ))}
      </div>
    </div>
  )
}

export default Reviews
