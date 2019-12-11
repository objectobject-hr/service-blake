import React from 'react'
import styled from 'styled-components'
import StarReviews from './StarReviews'
import Ratings from './Ratings'
import HelpfulReview from './HelpfulReview'
import Stars from './Stars'
import moment from 'moment'
import check from '../../images/check.svg'
import x from '../../images/x.svg'

const ReviewButton = styled.button`
  background-color: #0e7fd5;
  font-size: 12px;
  font-weight: 700;
  padding: 6px 12px 6px 12px;
  border-radius: 3px;
  color: #fff;
  line-height: 22px;
  font-family: 'Verdana', sans-serif;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: hsl(206, 88%, 42%);
  }
`

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
            <ReviewButton>Write a review</ReviewButton>
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
            <HelpfulReview reviews={reviews} type="favorable" />
            <HelpfulReview reviews={reviews} type="critical" />
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

const HelpfulButton = styled.button`
  background-color: #ededed;
  font-weight: 700;
  border-radius: 0;
  padding: 4px 6px 4px 6px;
  font-size: 12px;
  border: none;
  margin-left: 5px;
  marginright: 5px;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: #e6e6e6;
  }
`

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
        Helpful? <HelpfulButton>Yes • {data.helpful}</HelpfulButton>
        <HelpfulButton>No • {data.notHelpful}</HelpfulButton>
        <HelpfulButton>Report</HelpfulButton>
      </div>
    </div>
  )
}

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

export default Reviews
