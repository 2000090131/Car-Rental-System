import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import UserShort from "./UserShort";

function NavigationBar() {
  const customer = useSelector(state => state.customer.currentCustomer)
  return (
    <div>
      <div
        style={{
          backgroundColor: "#4d94ff",
          borderRadius: "0px",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          
        }}
      >
        <Logo></Logo>
        <Route exact path="/">
        <SearchBar></SearchBar>
        </Route>
        {customer && customer.email==='admin' &&
        <Link to="/add-car"><button className="customizedButton addCarButton">add car</button></Link>
        }
    
        {customer && customer.email==='employ1@gmail.com' &&
      <Link to="cancel"><button className="customizedButton addCarButton">Cancel</button></Link>
        }
        {customer && customer.email==='employ1@gmail.com' &&
         <Link to="About"><button className="customizedButton addCarButton">AboutUs</button></Link>
        }
        {customer && customer.email==='maker' &&
        <Link to="cancel"><button className="customizedButton addCarButton">Cancel</button></Link>
        }
        {customer && customer.email==='maker' &&
        <Link to="About"><button className="customizedButton addCarButton">AboutUs</button></Link>
        }
      <Route exact path="/">
       {customer?<UserShort customer={customer}></UserShort>:<div style={{ display: "flex" }}>
       
          <SignIn></SignIn>
          <SignUp></SignUp>
        </div>}
        </Route>
        
      </div>
    </div>
  );
}

export default NavigationBar;
