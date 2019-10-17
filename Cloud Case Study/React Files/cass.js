import React, { Component } from "react";
import { Redirect, Link, Route, Switch } from "react-router-dom";
// import Category from "./Category";
// import Products from "./Products";
import Login from "./cas.js";
import './cas.css'
// import Sample from "./login.js";
import Open from "./dia.js";
// import Open1 from "./open1.js"

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
              <Link class="u" to="/cas">Search</Link>
              </li>
              <li>
              <Link class="u" to="/dia">Visualization</Link>
            </li> 
          </ul>
        </nav>

        <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/cas" component={Login} />
          <Route exact path="/dia" component={Open} />
          {/* <Route exact path="/open1" component={Open1} /> */}
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
    <h2 class="x"> Welcome People </h2>
    <h2 class='x'> Enter a District Name Get Details by Clicking Search and Also Visualize the data </h2>
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