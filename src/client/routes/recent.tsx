import * as React from 'react'
import Provider from './provider'
import * as PropTypes from 'prop-types'

class Recent extends React.Component {

  render() {
    return (
      <Provider>
        <Children />
      </Provider>
    )
  }
}

const Children = (props, context) => {
  console.log(props, context)
  return <span>children</span>
}

Children.contextTypes = { stores: PropTypes.string }

export default Recent

// class Message extends React.Component<{ text }> {

//   static contextTypes = {
//     color: PropTypes.string
//   }

//   render() {
//     return (
//       <div>
//         {this.props.text} <button>Delete</button>
//       </div>
//     );
//   }
// }

// class MessageList extends React.Component<{ messages }> {

//   static childContextTypes = {
//     color: PropTypes.string
//   }

//   getChildContext() {
//     return { color: "purple" };
//   }

//   render() {
//     const children = (this.props.messages || [{ text: 11 }]).map((message) =>
//       <Message key={message.text} text={message.text} />
//     );
//     return <div>{children}</div>;
//   }
// }

// export default MessageList