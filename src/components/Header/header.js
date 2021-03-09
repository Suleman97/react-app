import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Banner from './banner';
import img from './imgs/logo.png'
import './header.css'

class header extends React.Component {
    render(){
        return (
            <React.Fragment>
                <div className="container-fluid back-img ">
                    <div className="container">
                        <nav className="navbar navbar-expand-sm navbar-dark">
                        <span className="navbar-brand col-md-3"><img src={img}></img></span>
                        <ul className="navbar-nav col-md-5">
                            <li className="nav-item"><span class="nav-link active">Home</span></li>
                            <li className="nav-item"><span class="nav-link">About Us</span></li>
                            <li className="nav-item"><span class="nav-link">Contact Us</span></li>
                            <li className="nav-item"><span class="nav-link">Blog</span></li>
                        </ul>
                        <form className="form-inline col-md-4" action="/action_page.php">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-danger" type="submit">Search</button>
                        </form>
                        </nav>
                        <Banner />
                        
                    </div>  
                </div>
            </React.Fragment>
            
        );
    }
}

export default header;