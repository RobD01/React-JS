
import './App.css';
import React, { useState } from 'react';
import {Multiselect} from 'multiselect-react-dropdown';



function App() {
  
  let data = [
    {Topic: 'Volunteering'},
    {Topic: 'Writing'},
    {Topic: 'Photography'}
  ]

  const interests = [
    '3D printing',
    'Amateur radio',
    'Scrapbook',
    'Amateur radio',
    'Acting',
    'Baton twirling',
    'Board games',
    'Book restoration',
    'Cabaret',
    'Calligraphy',
    'Candle making',
    'Computer programming',
    'Coffee roasting',
    'Cooking',
    'Colouring',
    'Cosplaying',
    'Couponing',
    'Creative writing']

    for (let i in interests)
    {data.push({
        Topic: interests[i]
        
    });}

  const[options] = useState(data);

  
  return (
    <React.Fragment>
    <div style = { 
      {width: "20%", 
      justifyContent: "center"
      } } >


      <div className= "App">
        <h1 class= "m-5"> Interests </h1>
        <h3>Please select your interests. <br/>
          ( Recommended 3 - 5 Interests )</h3>
        <h2>
        
        <Multiselect 
          options = {options}  
          displayValue = "Topic" 
          placeholder= ""/>

        
        </h2>
      </div>
    </div>
    </React.Fragment>
  );
}

export default App;
