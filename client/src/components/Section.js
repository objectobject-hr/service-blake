import React, { useState } from 'react'
import plus from '../images/plus.svg'
import './Section.scss'

function Section({ name, component, data }) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <div onClick={() => setOpen(!open)} className="bm-section-1">
        <img
          src={plus}
          height="10"
          width="10"
          style={{
            padding: 11,
            transform: `rotate(${open ? '-45' : '0'}deg)`,
            transition: 'transform .3s cubic-bezier(.4,0,0,1)'
          }}
        />
        <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>{name}</div>
      </div>
      {open && (
        <div
          className="bm-section-2"
          style={{
            marginTop: 4,
            paddingBottom: component.type.name === 'Reviews' ? 0 : 40,
            display: open ? 'block' : 'none',
            opacity: 0,
            bottom: 10,
            position: 'relative'
          }}
        >
          {React.cloneElement(component, { ...data })}
        </div>
      )}
    </div>
  )
}

export default Section
