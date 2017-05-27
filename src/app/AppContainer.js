import React from 'react'
import { connect } from 'react-redux'

import App from './App'
import { getEvents } from './app-reducer'

const AppContainer = props => {
  const handleNextPage = () => {
    let page = 1
    if (props.pagination && props.pagination.page_number) {
      page = props.pagination.page_number + 1
    }
    props.getEvents(page)
  }

  return <App
    {...props}
    onNextPage={handleNextPage}
  />
}

const mapStateToProps = ({app}) => ({...app})
const mapDispatchToProps = {
  getEvents
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
