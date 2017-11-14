import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(){
    super();
    this.state = {items: []}
  }
  componentWillMount(){
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://swapi.co/api/people/?format=json'
    fetch( proxyUrl + targetUrl )
      .then( response => response.json() )
      .then( ({result: items}) => this.setState({items}))
  }
  render(){
    let items = this.state.items
    return (
      <div>{items.map(item => <h4>{item.name}</h4>)}</div>
    )
  }
}

export default App

//// Updating React components when new props are recieved

// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {increasing: false}
//   }
//   update(){
//     ReactDOM.render(<App val={this.props.val+1}/>, document.getElementById('root'))
//   }
//   componentWillReceiveProps(nextProps) {
//     this.setState({increasing: nextProps.val > this.props.val})
//   }
//   shouldComponentUpdate(nextProps, nextState) {
//     return nextProps.val % 5 === 0;
//   }
//   render(){
//     console.log(this.state.increasing)
//     return (
//       <button onClick={this.update.bind(this)}>
//         {this.props.val}
//       </button>
//     )
//   }
//   componentDidUpdate(prevProps, prevState) {
//     console.log(`prevProps: ${prevProps.val}`)
//   }
// }
//
// App.defaultProps = { val: 0 }
//
// export default App


//// React lifecycle methods

// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {val: 0}
//     this.update = this.update.bind(this)
//   }
//   update(){
//     this.setState({val: this.state.val + 1})
//   }
//   componentWillMount(){
//     console.log('componentWillMount')
//     this.setState({m: 2})
//   }
//   render(){
//     console.log('render');
//     return <button onClick={this.update}>
//       {this.state.val * this.state.m}
//     </button>
//   }
//   componentDidMount(){
//     console.log('componentDidMount')
//     this.inc = setInterval(this.update, 500)
//   }
//   componentWillUnmount(){
//     console.log('componentWillUnmount')
//     clearInterval(this.inc)
//   }
// }
// class Wrapper extends React.Component {
//   mount(){
//     ReactDOM.render(<App />, document.getElementById('a'))
//   }
//   unmount(){
//     ReactDOM.unmountComponentAtNode(document.getElementById('a'))
//   }
//   render(){
//     return (
//       <div>
//         <button onClick={this.mount.bind(this)}>Mount</button>
//         <button onClick={this.unmount.bind(this)}>Unmount</button>
//         <div id="a"></div>
//       </div>
//     )
//   }
// }
// export default Wrapper


//// Using refs to target specific components

// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {a: ''}
//   }
//   update(){
//     this.setState({
//       a: this.a.refs.input.value,
//       b: this.refs.b.value
//     })
//   }
//   render(){
//     return (
//       <div>
//         <Input
//           ref={ component => this.a = component }
//           update={this.update.bind(this)}
//         /> {this.state.a}
//         <hr />
//         <input
//           ref="b"
//           type="text"
//           onChange={this.update.bind(this)}
//         /> {this.state.b}
//       </div>
//     )
//   }
// }
//
// class Input extends React.Component {
//   render(){
//     return <div><input ref="input" type="text" onChange={this.props.update}/></div>
//   }
// }
//
// export default App

//// Handling key, click and touch events
//// usings Reacts synthetic event system

// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {currentEvent: '---'}
//     this.update = this.update.bind(this)
//   }
//   update(e){
//     this.setState({currentEvent: e.type})
//   }
//   render(){
//     return (
//       <div>
//         <textarea
//           cols="30"
//           rows="10"
//           onKeyPress={this.update}
//           onCopy={this.update}
//           onCut={this.update}
//           onPaste={this.update}
//           onFocus={this.update}
//           onBlur={this.update}
//           onDoubleClick={this.update}
//           onTouchStart={this.update}
//           onTouchEnd={this.update}
//           onTouchMove={this.update}
//           onTouchEnd={this.update} />
//           <h1>{this.state.currentEvent}</h1>
//       </div>
//     )
//   }
// }
//
// export default App


//// Accessing nested data

// class App extends React.Component {
//   render(){
//     return <Button>I <Heart /> React</Button>
//   }
// }
//
// const Button = (props) => <button>{props.children}</button>
//
// class Heart extends React.Component {
//   render(){
//     return <span>&hearts;</span>
//   }
// }
// export default App


//// Manage components with setState
//// and setting up child components

// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       txt: 'this is the state txt',
//       cat: 0
//     }
//   }
//   update( e ){
//     this.setState({txt: e.target.value})
//   }
//   render(){
//     return (
//       <div>
//         <h1>{this.state.txt} - {this.state.cat}</h1>
//         <Widget update={this.update.bind(this)} />
//       </div>
//     )
//   }
// }
//
// const Widget = (props) =>
//   <input type="text" onChange={props.update} />
//
// export default App


//// Custom PropTypes Validation

// class App extends React.Component {
//   render(){
//     return <Title text="123456"/>
//   }
// }
//
// const Title = (props) => <h1>Title: {props.text}</h1>
//
// Title.propTypes = {
//   text(props, propName, component){
//     if(!(propName in props)){
//       return new Error(`missing ${propName}`)
//     }
//     if(props[propName].length < 6){
//       return new Error(`${propName} was too short`)
//     }
//   }
// }
//
// export default App
