import React, { Component } from "react";
import { Redirect, Link, Route, Switch } from "react-router-dom";
import './s.css'
// import Category from "./Category";
// import Products from "./Products";
import Login from "./login.js";
import Open from "./open.js";
import Open1 from "./open1.js"

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar">
          <ul className="nav">
             <li>
              <Link class="u"to="/">Home</Link>
            </li>
           
            <li>
              <Link class="u" to="/login">Login</Link>
            </li> 
            <li>
              <Link class='u' to ="/">SignOut</Link>
            </li>
          </ul>
        </nav>

        <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/open" component={Open} />
          <Route exact path="/open1" component={Open1} />
          {/* <Route path="/category" component={Category} /> */}
          {/* <PrivateRoute path="/admin" component={Admin} /> */}
          {/* <Route path="/products" component={Products} /> */}
        </Switch>
      </div>
    );
  }
}

//Private router function
// const PrivateRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         fakeAuth.isAuthenticated === true ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{ pathname: "/login", state: { from: props.location } }}
//           />
//         )}
//     />
//   );
// };

//Home component
const Home = props => (
  <div>
    <h3 class="xy">Welcome to Employee Information System </h3>
    <h2 class='x'>Authentication is Done Opens Different Portal For Employee and Admin. Incase the Details are Wrong, It alert box displays Wrong Credentials</h2>
    <h2 class='xy'>Admin Features</h2>
    <h2 class='x'>1. An Admin Can Add New Employee  </h2>
    <h2 class='x'>2. An Admin Can Remove Employee </h2>
    <h2 class='x'>3. An Admin Can Update Salary For Employee </h2>
    <h2 class='xy'>Employee Features</h2>
    <h2 class='x'>1. An Employee can Get All His Details  </h2>
    <h2 class='x'>2. An Employee can Get his Payroll </h2>
    {/* <h2 class='x'>3. An Admin Can Update Salary For Employee </h2> */}
  </div>
);

//Admin component
// const Admin = ({ match }) => {
//   return (
//     <div>
//       {" "}
//       <h2>Welcome admin </h2>
//     </div>
//   );
// };


export default App;