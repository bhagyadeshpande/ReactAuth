import React from "react";
import { BrowserRouter, Route, Switch, Redirect, NavLink} from "react-router-dom";
import "./App.css";

/*
function App() {
  return (
    <div>
     <form className="myform">
  <label>
    Email :
    <input type="text" name="email" className="ip" />
  </label>
  <br/><br/>
  <label>
    Password :
    <input type="password" name="password" className="ip" />
  </label>
  <br/><br/>
  <input type="submit" value="Submit" />
</form>
    </div>
  );
}

export default App;*/

const Home = (props) => {
  return <p>Welcome to User Authentication page!</p>;
};

const Login = (props) => {
  return (
    <div>
     <form className="myform">
  <label>
    Email :
    <input type="text" name="email" className="ip" />
  </label>
  <br/><br/>
  <label>
    Password :
    <input type="password" name="password" className="ip" />
  </label>
  <br/><br/>
  <button type="submit" value="Submit" onClick={logInMessage}>Login</button> 
</form>
    </div>
  );
};

const Register = (props) => {
  return (
    <div>
     <form className="myform">
     <label>
    Name :
    <input type="text" name="name" className="ip" />
    </label>
    <br/><br/>
  <label>
    Email :
    <input type="text" name="email" className="ip" />
  </label>
  <br/><br/>
  <label>
    Password :
    <input type="password" name="password" className="ip" />
  </label>
  <br/><br/>
  <button type="submit" value="Submit" onClick={registrationMessage}>Register</button> 
</form>
    </div>
  );
};

function registrationMessage(){
  alert("User Registered!");
}

function logInMessage(){
  alert("Log-in successful!");
}

const NoRoute = (props) => {
  return <p>404 Page</p>;
};

export default function App() {
  const name = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Login",
      url: "/login",
    },
    {
      name: "Register",
      url: "/register",
    },
  ];

  return (
    <BrowserRouter>
      {name.map((n) => {
        return (
          <NavLink exact activeClassName="active-route" key={n.name} to={n.url}>
            {n.name}<br/>
          </NavLink>
        );
      })}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home">
          <Redirect to="/" />
        </Route>
        <Route path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={NoRoute} />
      </Switch>
    </BrowserRouter>
  );
}

