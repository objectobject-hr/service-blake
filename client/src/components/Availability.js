import React from 'react'
import truck from '../images/truck.svg'
import greenCircle from '../images/green-circle.svg'
import store from '../images/store.svg'
import moment from 'moment'
import compass from '../images/compass.svg'
import mouse from '../images/mouse.svg'

function Availability({ product }) {
  return (
    <div style={{ marginTop: 8 }}>
      <GrayBar icon={truck} text="Delivery" />
      <div style={{ padding: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={greenCircle} style={{ height: 24, marginRight: 16 }} />
          This can be delivered.
        </div>
        <div style={{ marginTop: 16, marginLeft: 40 }}>
          Once you add the product to your shopping cart, we'll give you all the
          delivery details.
        </div>
      </div>
      <GrayBar icon={store} text="Check your IKEA Store" />
      <div style={{ display: 'flex' }}>
        <div style={{ width: 480, padding: '16px 16px 0px 16px' }}>
          <select
            style={{
              height: 70,
              width: 400,
              display: 'block',
              padding: '32px, 48px, 12px, 16px',
              fontSize: '1rem',
              borderRadius: 0,
              marginBottom: 16
            }}
          >
            <option>Rivendell</option>
          </select>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={greenCircle} style={{ height: 24, marginRight: 16 }} />
            <span style={{ fontWeight: 700 }}>In stock at Rivendell</span>
          </div>
          <div style={{ marginTop: 16, marginLeft: 40 }}>
            <div style={{ marginBottom: 12 }}>
              Currently <span style={{ fontWeight: 700 }}>1,000</span> available
              at Rivendell.
            </div>
            <div style={{ fontSize: '.75rem' }}>
              <div style={{ marginBottom: 12 }}>
                You last checked: {moment().format('D/MM/YYYY h:mm a')}
              </div>
              <div>
                Prices and products in store may be different from those online.
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            padding: '16px 16px 0px 16px'
          }}
        >
          <div
            style={{
              display: 'flex',
              borderBottom: '1px solid #ccc',
              marginBottom: 16
            }}
          >
            <img
              style={{ height: 32, paddingLeft: 8, paddingRight: 8 }}
              src={compass}
            />
            <div>
              <div style={{ fontWeight: 700 }}>Find and buy at the store</div>
              <div style={{ marginBottom: 8 }}>
                Here is where you'll find the item packaged and ready for
                purchase at the store.
              </div>
              <div style={{ marginBottom: 6 }}>
                1 x{' '}
                <span style={{ fontWeight: 700 }}>
                  {product.name.toUpperCase()}{' '}
                </span>
                {product.type}
              </div>
              <span
                style={{
                  background: '#111',
                  fontSize: '.75rem',
                  lineHeight: 2,
                  color: '#fff',
                  display: 'inline-block',
                  padding: '0px 8px 0px 8px',
                  marginBottom: 16,
                  marginRight: 16
                }}
              >
                {product.identifier}
              </span>
              See a co-worker in store for purchase information.
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <img
              style={{ height: 36, paddingLeft: 4, paddingRight: 4 }}
              src={mouse}
            />
            <div>
              <div style={{ fontWeight: 700 }}>
                Click & collect at the store
              </div>
              <div>
                Time is precious, so save yourself a bit! Order online and
                collect it at the store within the same day.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function GrayBar({ icon, text }) {
  return (
    <div
      style={{
        fontSize: '1.125rem',
        fontWeight: 700,
        paddingLeft: 16,
        height: 48,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
      }}
    >
      <img src={icon} style={{ height: 40, marginRight: 8 }} />
      {text}
    </div>
  )
}

export default Availability
