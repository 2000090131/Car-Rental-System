import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router";
import { Container } from "semantic-ui-react";
import "./App.css";
import CarsList from "./components/CarsField/CarsList";
import FilterBar from "./components/Filter/FilterBar";
import FilterIcon from "./components/Filter/FilterIcon";
import Footer from "./components/NavigationBar/Footer";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import ActivatePage from "./pages/ActivatePage";
import AddCarPage from "./pages/AddCarPage";
import CarDetailsPage from "./pages/CarDetailsPage";
import FilteredCarsPage from "./pages/FilteredCarsPage";
import ProfilePage from "./pages/ProfilePage";
import RentalHistoryPage from "./pages/RentalHistoryPage";
import RentPage from "./pages/RentPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import About from "./pages/About";
import Cancel from "./pages/cancel";
import Pay from "./pages/Pay";

function App() {
  
  const isDropped = useSelector((state) => state.filter.isDropped);

  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      
      <Container style={{ display: "flex", marginTop: "2em" }}>
        <Route exact path="/">
          {isDropped ? <FilterBar></FilterBar> : <FilterIcon></FilterIcon>}
        </Route>

        <Route exact path="/">
          <CarsList></CarsList>
        </Route>
        <Route path='/filter/'>
          <FilteredCarsPage></FilteredCarsPage>
        </Route>
        <Route exact path="/signin">
          <SignInPage></SignInPage>
        </Route>
        <Route exact path="/signup">
          <SignUpPage></SignUpPage>
        </Route>
        <Route exact path="/activate">
          <ActivatePage></ActivatePage>
        </Route>
        <Route exact path="/details/:id">
          <CarDetailsPage/>
        </Route>
        <Route exact path="/profile/:email">
          <ProfilePage></ProfilePage>
        </Route>
        <Route exact path="/add-car">
          <AddCarPage></AddCarPage>
        </Route>
        <Route exact path="/rent/:id">
          <RentPage></RentPage>
        </Route>
        <Route exact path="/rental-history/:email">
    <RentalHistoryPage></RentalHistoryPage>
        </Route>
        <Route exact path="/About">
    <About></About>
        </Route>
        <Route exact path="/Cancel">
    <Cancel></Cancel>
        </Route>
      
      </Container>
      
      <img src="https://s0.2mdn.net/simgad/8372792550500466436" href="https://shapes.semrush.com/start-shaping-your-online-story-en/p/1?cmp&kw&ad=%2A&rfl=1%2Chttps%3A%2F%2Fwww.w3schools.com%2F%240&dclid=CjkKEQiAnaeNBhCN_J20nLmBlqoBEiQAHxEClF6VfH8LN5qbv7TB4pRzQdV6iFjD2_kISS_WqCOGh2zw_wcB"  src="https://s0.2mdn.net/simgad/8372792550500466436" border="0" width="728" height="90" marginTop="15"  style={{
      
          borderRadius: 8,
          margin: "0px",
          marginTop: 350,
          marginBottom: 5}} ></img>
    <Footer></Footer>
 
    </div>
  );
  
}

export default App;
