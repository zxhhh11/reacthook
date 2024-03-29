import React,{Component} from 'react';
import { HashRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import './App.css';
import HookPage from './views/HookPage';
import DragPic from './views/DragPic';
import Calculator from './views/Calculator';
import UseMemoRef from './views/UseMemoRef';
import GetWindowSize from './views/GetWindowSize';
// import { history } from './utils/history';
import NoFound from './views/NoFound';
// function App(props) {
// const [active,setActive] = useState(true)
// console.log(props)
//   return (
    
//     <div className="App">
//       <Router>
//         <div className="link">
//           <Link className="active" to={`${process.env.PUBLIC_URL}/hook`}>Hooks</Link>
//           <Link to={`${process.env.PUBLIC_URL}/drag`}>Dragging</Link>
//           <Link to={`${process.env.PUBLIC_URL}/calculator`}>Calculator</Link>
//           <Link to={`${process.env.PUBLIC_URL}/useMemo`}>UseMemo/Ref</Link>
//           <Link to={`${process.env.PUBLIC_URL}/sizeWin`}>Resize Window</Link>
//           <div>
//           </div>
//           <Switch>
//             <Route path='/hook' exact component={HookPage}></Route>
//             <Route path='/drag' exact component={DragPic}></Route>
//             <Route path='/calculator' exact component={Calculator}></Route>
//             <Route path='/useMemo' exact component={UseMemoRef}></Route>
//             <Route path='/sizeWin' exact component={GetWindowSize}></Route>
//             <Redirect path='/' exact to='/hook'></Redirect>
//             <Route path='/404' component={NoFound}></Route>
//             <Redirect path='*' to='/404'></Redirect>
//           </Switch>
//         </div>
//       </Router>

//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    console.log(this.props)
    return ( <div className="App">
    <Router>
      <div className="link">
        <Link className="active" to={`${process.env.PUBLIC_URL}/hook`}>Hooks</Link>
        <Link to={`${process.env.PUBLIC_URL}/drag`}>Dragging</Link>
        <Link to={`${process.env.PUBLIC_URL}/calculator`}>Calculator</Link>
        <Link to={`${process.env.PUBLIC_URL}/useMemo`}>UseMemo/Ref</Link>
        <Link to='/sizeWin'>Resize Window</Link>
        <div>
        </div>
        <Switch>
          <Route path='/hook' exact component={HookPage}></Route>
          <Route path='/drag' exact component={DragPic}></Route>
          <Route path='/calculator' exact component={Calculator}></Route>
          <Route path='/useMemo' exact component={UseMemoRef}></Route>
          <Route path='/sizeWin' exact component={GetWindowSize}></Route>
          <Redirect path='/' exact to='/hook'></Redirect>
          <Route path='/404' component={NoFound}></Route>
          <Redirect path='*' to='/404'></Redirect>
        </Switch>
      </div>
    </Router>

  </div>  );
  }
}
 

export default App;

