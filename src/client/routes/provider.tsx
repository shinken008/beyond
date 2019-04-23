import { Children, Component } from 'react'
import * as PropTypes from 'prop-types'

export default class Provider extends Component {

  static childContextTypes = {
    stores: PropTypes.string
  }

  getChildContext() {
    return {
      stores: 'test'
    }
  }

  render() {
    return Children.only(this.props.children)
  }

}
