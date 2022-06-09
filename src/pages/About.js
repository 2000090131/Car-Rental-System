import React from 'react';
import { Container } from 'semantic-ui-react';
import colorSlice from '../redux/colorSlice/colorSlice';
import logo from './logo.png'; // Tell webpack this JS file uses this image

console.log(logo);
const About = () => {
  
  function sayHello() {
    alert('Hello, World!');
  }
  
  return (
     
    <React.Fragment>
      <div>
        <Container>
    <  img src={logo} alt="Logo"border="0" width="650" height="450" marginTop="15"/>;
        <h2><b>The project is designed to help people utilize transport effectively. In recent times cars have become most convenient modes of transportation. Our Car rental system helps in making this an easier, and enjoyable experience to acquire and use a car as per ones needs. A person can book a car specifically for his travel time, co-travelers and the nature of travel. The rental system traverses from designing a database to understanding business concept and above all to make this an easy to adapt system for various travelling needs.</b> </h2>
        <div style={{background:"#4E4E50", width:500, height:315, marginLeft:"auto", marginRight:"auto", marginTop:"1em",padding:40, color:"white", borderRadius:7}}>
           <h1>Contact Us</h1>  
           <h3>Email Us</h3> 
           <ul>
          <li> <a href="https://www.facebook.com/KLUniversity/" target="_blank" data-placement="top" rel="tooltip" title="" data-original-title="Facebook">   200009131@KLUniversity.in <i class="fa fa-facebook"></i></a></li>
          <li>  <a href="https://www.facebook.com/KLUniversity/" target="_blank" data-placement="top" rel="tooltip" title="" data-original-title="Facebook">   200009134@KLUniversity.in <i class="fa fa-facebook"></i></a></li>  
        </ul>
        <h3>Customer Care Support</h3> 
           <ul>
          <li> <a href="https://www.facebook.com/KLUniversity/" target="_blank" data-placement="top" rel="tooltip" title="" data-original-title="Facebook">   klsupport.in <i class="fa fa-facebook"></i></a></li>
          <li>  <b>+91 8549484554</b></li> 
          <li>  <b>+91 9849484554</b></li> 
          
        </ul>
        </div>
        </Container>
        </div>
    </React.Fragment>
  );
};

export default About;