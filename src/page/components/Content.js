import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
// Font Awesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons/faSignInAlt';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons/faHouseUser';

export default function Content() {

  return (
      <>
      <div>

  
    <Link className="text-none" to="/login">
    <Button startIcon={<FontAwesomeIcon icon={faSignInAlt} />} variant="contained" style={{color: 'white', padding: "7px 50px", backgroundColor: '#A6DCEF', fontFamily: 'Poppins'}}> Inscription </Button>      </Link>
    {" "}      
    
    <Link className="text-none" to="/home">
    <Button startIcon={<FontAwesomeIcon icon={faHouseUser} />} variant="contained" style={{color: 'white', padding: "7px 80px", backgroundColor: '#F6AE99', fontFamily: 'Poppins'}}> App </Button>
   </Link>
   {" "}      

   <Link className="text-none" to="/hometest">
    <Button startIcon={<FontAwesomeIcon icon={faHouseUser} />} variant="contained" style={{color: 'white', padding: "7px 80px", backgroundColor: '#F6AE99', fontFamily: 'Poppins'}}> App-test </Button>
   </Link>

    {" "}      


   </div>
</>

);
}