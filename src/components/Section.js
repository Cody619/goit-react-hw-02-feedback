import React from 'react'
import PropTypes from 'prop-types'

export const Section = (props) => {
  const { title, children } = props

  return (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
