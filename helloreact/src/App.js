import React from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child';
class App extends React.Component {
  state = {
      msg: 'from state'
  }
  componentDidMount() { //组件的生命周期
    setTimeout(() => {
      this.setState({
        msg: '哈哈哈'
      })
    },3000)
  }
  renderFooter = () => {
      return (
          <footer>
            foot
          </footer>
      )
  }
       render() {
           const {msg} = this.state;
           const isRed = true;
           const red = 'red';
           const Main = (<p>main</p>);
           const lists = [1,2,3,4,5];
           const listsNode = lists.
           map((list, index) => <li key={index}>{list}</li>)
           return (
               <div className={isRed ? red : ''}>你好，世界
               <Child msg={ msg }/>
               {
                  //  isRed ?
                  //  <span>red</span> : <span>Nored</span>
               }
               {/* {this.renderFooter()}  */}
               {
                  //  Main
               }
               <ul>
                  {
                      // listsNode
                  }
                  {/* {msg} */}
               </ul>
               </div>
           )
       }
   }

export default App;
