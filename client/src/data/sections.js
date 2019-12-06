import React from 'react'
import Description from '../components/Description'
import Size from '../components/Size'
import Care from '../components/Care'
import EandM from '../components/EandM'
import Package from '../components/Package'
import Assembly from '../components/Assembly'

const sections = [
  { name: 'Product description', component: <Description /> },
  { name: 'Product size', component: <Size /> },
  { name: 'Care instructions', component: <Care /> },
  { name: 'Environment & materials', component: <EandM /> },
  { name: 'Package details', component: <Package /> },
  { name: 'Assembly & documents', component: <Assembly /> },
  { name: 'Reviews', component: <Description /> },
  { name: 'Product availability', component: <Description /> }
]

export default sections
