import React from 'react'
import PropTypes from 'prop-types'

export const FeedbackOptions = (props) => {
  const { onLeaveFeedback, options } = props
  return (
    <div>
      {options.map((name) => {
        return (
          <button onClick={() => onLeaveFeedback(name)} key={name}>
            {name}
          </button>
        )
      })}
    </div>
  )
}
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
}
