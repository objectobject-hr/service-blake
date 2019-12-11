import React, { Component } from 'react'
import './Assembly.scss'
import rabbit from '../images/rabbit.svg'

class Assembly extends Component {
  state = {
    input: '',
    zipMessage: false
  }

  changeHandler = e => this.setState({ [e.target.name]: e.target.value })

  buttonClick = () => {
    const length = this.state.input.length
    const input = Number(this.state.input)
    if (length !== 5 || input === NaN) {
      this.setState({ zipMessage: 'invalid' })
    } else if (input === 99999) {
      this.setState({ zipMessage: 'stock' })
    } else {
      this.setState({ zipMessage: 'noStock' })
    }
  }

  render() {
    const { product } = this.props
    const { zipMessage, input } = this.state
    return (
      <div style={{ paddingLeft: 40, paddingRight: 40 }}>
        <div style={{ display: 'flex', marginBottom: 8 }}>
          <div style={{ fontWeight: 'bold', width: 115 }}>Article Number</div>
          <div style={{ fontWeight: 'bold', paddingLeft: 16 }}>
            Assembly Instructions
          </div>
        </div>
        <div style={{ display: 'flex', marginBottom: 24 }}>
          <div style={{ fontWeight: 'bold', width: 115 }}>
            <div
              style={{
                background: '#111',
                fontSize: '.75rem',
                lineHeight: 2,
                color: '#fff',
                display: 'inline-block',
                padding: '0px 8px 0px 8px'
              }}
            >
              {product.identifier}
            </div>
          </div>
          <div style={{ paddingLeft: 16 }}>
            <span className="bm-assembly-1">
              {product.name.toUpperCase()} {product.message}
            </span>
          </div>
        </div>
        <img src={rabbit} style={{ height: 40, width: 200 }} />
        <details
          style={{
            cursor: 'pointer',
            fontSize: '.65rem',
            userSelect: 'none'
          }}
        >
          <summary>What is TaskRabbit?</summary>
          <div style={{ fontSize: '1rem', marginBottom: 8 }}>
            We’ve partnered with TaskRabbit to provide you with even more
            assembly options to choose from. TaskRabbit offers quick and
            convenient assembly and mounting for your IKEA purchases made online
            and in select stores.
          </div>
        </details>
        <div
          style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: 16 }}
        >
          Looking to book an assembly service?
        </div>
        <div style={{ marginBottom: 8 }}>
          Find out if assembly service is available in your area
        </div>
        <input
          style={{
            marginRight: 8,
            height: 12,
            padding: 16,
            width: 144,
            border: '1px solid #959595',
            borderRadius: '2px',
            fontSize: '1rem',
            lineHeight: '1.5'
          }}
          onChange={this.changeHandler}
          value={input}
          name="input"
          placeholder="Zip Code"
        />
        <button className="bm-assembly-2" onClick={this.buttonClick}>
          Check Availability
        </button>
        {zipMessage && <Message message={this.state.zipMessage} />}
      </div>
    )
  }
}

function Message({ message }) {
  if (message === 'invalid') {
    return (
      <div style={{ marginLeft: 178 }}>
        Invalid postal code, please try again.
      </div>
    )
  } else if (message === 'stock') {
    return (
      <div>
        <div
          style={{
            fontWeight: 700,
            fontSize: '1.25rem',
            marginTop: 10,
            marginBottom: 16
          }}
        >
          TaskRabbit is available in your area and can assemble this product for
          $1,000,000.00!
        </div>
        <div>
          Ready to assemble your product? <StyledSpan>Click here</StyledSpan>
        </div>
      </div>
    )
  } else if (message === 'noStock') {
    return (
      <div
        style={{
          fontWeight: 700,
          fontSize: '1.25rem',
          marginTop: 10,
          marginBottom: 16
        }}
      >
        IKEA Assembly from TaskRabbit is not available in your area yet.
      </div>
    )
  }
}

export default Assembly
