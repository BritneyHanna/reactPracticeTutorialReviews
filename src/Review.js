import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const[index,setIndex]=useState(0);
    // created state value that is equal to the first index of the array with the data 
  const{name,job,image,text}=people[index] 
// destructured people array
  const nextPerson=()=>{
  //made a function for the onClick that goes to the next number passed the return through a checkNumber
  //function that makes sure the return is within the length of the array

    setIndex((index)=>{
      let newIndex = index+1;
      return checkNumber(newIndex);
    })
  }
  const prevPerson=()=>{
     //made a function for the onClick that goes to the previous number passed the return through a checkNumber
  //function that makes sure the return is within the length of the array
    setIndex((index)=>{
      let newIndex = index-1;
      return checkNumber(newIndex) ;
    })
  }
  const randomPerson=()=>{
    // function that generates random review use math.random multiply by array length and round down to get a value more or less within the array length
    // to prevent repition add one if the random number is the same as the previous index
    //pass through checkNumber function so the results dont go outside the array since we are adding one
let randomNumber= Math.floor(Math.random()*people.length);
if (randomNumber===index){
  randomNumber= index+1
}
setIndex(checkNumber(randomNumber));

  }

  const checkNumber=(number)=>{
    if(number>people.length-1){
      return 0}
      else if (number<0) {
        return people.length-1;
      }
return number;
  }
  return <article className="review">
    <div className="img-container">
      <img src={image} alt={name} className="person-img"/>
      <span className="quote-icon">
        <FaQuoteRight/>
      </span>
    </div>
    <div>
    
    </div>
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p>
    <p className="info"> {text}</p>
    <div className="button-container">
      <button className="prev-btn" onClick={prevPerson}>
        <FaChevronLeft/>
      </button>
      <button className="next-btn" onClick={nextPerson}>
        <FaChevronRight/>
      </button>
    
    </div>
    <button className="random-btn" onClick={randomPerson}>
        Surpise Me
      </button>
  </article>;
};

export default Review;
