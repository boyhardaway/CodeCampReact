import React from 'react'
import PropTypes from 'prop-types'

const Display = (props) => (
  <div className="d-flex align-items-center bg-light text-secondary">
    <div className="mx-auto display-1">{props.count}</div>
  </div>
)

export default Display

Display.defaultProps = {
  count: 'Bring me Count'
}

Display.propTypes = {
  count: PropTypes.number
}