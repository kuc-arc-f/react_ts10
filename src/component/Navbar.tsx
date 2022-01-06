import React from 'react'
import { Link } from 'react-router-dom'

//
class Navbar extends React.Component {
  render(){
    return(
      <div>
        <div className="container">
          <Link to="/">[ Home ] </Link>
          <Link to="/pdf" className="ml-2">[ Pdf ] </Link>
          <Link to="/pdf8" className="ml-2">[ PdfHtml ] </Link>
          <Link to="/chart" className="ml-2">[ chart ] </Link>
          <Link to="/about" className="ml-2">[ About ] </Link>
        </div>
        <hr className="mb-0"/>
      </div>
    )
  }
}

export default Navbar;
