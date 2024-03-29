import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import {  Container, Input } from 'semantic-ui-react';
import { getImagesByCarId } from '../redux/carSlice/carSlice';
import { addRent } from '../redux/rentalSlice/rentalSlice';
import Pay from './Pay';
import { Link } from "react-router-dom";


  
  function sayHello() {
    alert('Payment Suceesfull!');
  }

function RentPage() {
    const currentCar = useSelector(state => state.cars.currentCar)
    const currentCustomer = useSelector(state => state.customer.currentCustomer)
    const imagesByCarId = useSelector((state) => state.cars.imagesByCarId);
    const history = useHistory()

    const [amount, setAmount] = useState(0)
    const dispatch = useDispatch()
    
    function rentHandler(){
        dispatch(addRent({customerId:currentCustomer.id, carId:currentCar.id}))
        .then(response=>{
            toast.success("Successfully rent! ") 
            console.log(response)
            setTimeout(() => {
              history.push('/')
            }, 1000);
          }).catch(err=>console.log(err))
    }

    useEffect(() => {
        dispatch(getImagesByCarId(currentCar.id));
      }, [dispatch, currentCar]);
    return (
        <div>
        <Container>
        {imagesByCarId.length == 1 ? (
          <img height="350" src={imagesByCarId[0].imagePath}></img>
        ) : (
          <div>
            <AliceCarousel autoPlay autoPlayInterval="3000">
              {imagesByCarId.map((image) => (
                <img
                  key={image.id}
                  src={image.imagePath}
                  className="sliderimg"
                />
              ))}
            </AliceCarousel>
          </div>
        )}
        <div style={{background:"#4E4E50", width:500, height:300, marginLeft:"auto", marginRight:"auto", marginTop:"1em",padding:40, color:"white", borderRadius:7}}>
                <h3>How many days are you renting?</h3>
                <Input onChange={(e)=>setAmount(e.target.value*currentCar.dailyPrice)} style={{width:65}} type="number" max="30"></Input>
                <h1>Amount to be paid: ₹{amount}</h1>
                <button onClick={rentHandler} className="customizedButton rentButton">Rent</button>
               
        </div>
        <div style={{ width:174, height:200, marginLeft:"auto", marginRight:"auto", marginTop:"1em",padding:40, color:"white", borderRadius:7}}>
        <img src="https://i.pinimg.com/originals/05/67/41/05674100b1dd4a5f2c4b6daf4a522e25.jpg"  alt="new"  style={{marginRight:5}}/>       
        </div>
        <button style={{marginLeft:"auto", marginRight:"auto", marginTop:"2em" , }} onClick={sayHello} className="customizedButton rentButton">Pay</button>
       
        </Container>
      
        
         
         
         
              
            
                
               
             
 
          <p
            style={{
              color: "white",
              opacity: "80%",
              letterSpacing: "1px",
              fontSize: 16,
              marginTop: 20,
            }}
          >
            I read and agree to the terms and conditions
          </p>

         
        </div>
    
    
        
    )
}

export default RentPage