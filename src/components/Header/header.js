import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import img from './imgs/logo.png'
import './header.css'
// import src from '*.bmp';
// style={backgroundImage: "url("+ background + ")"};

class header extends React.Component {
    render(){
        return (
                <div className="container-fluid back-img ">
                    <div className="container div1">
                    <nav class="navbar navbar-expand-sm  navbar-dark">
                    <span class="navbar-brand col-md-3"><img src={img}></img></span>
                        <ul class="navbar-nav col-md-5">
                            <li class="nav-item"><span class="nav-link active">Home</span></li>
                            <li class="nav-item"><span class="nav-link">About Us</span></li>
                            <li class="nav-item"><span class="nav-link">Contact Us</span></li>
                            <li class="nav-item"><span class="nav-link">Blog</span></li>
                        </ul>
                        <form class="form-inline col-md-4" action="/action_page.php">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button class="btn btn-success" type="submit">Search</button>
                        </form>
                        </nav>
                        
                    </div>
                    <div class="container div1 max-margin">
                    
                    <center><h1 class="head1"><b>Your Favorite One Page<br/>Multi Perpose Tamplate</b></h1>
                    <p class="head1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <button type="button" class="btn btn-danger">Find Out More</button></center>
                        

                    </div>
                </div>
            
        );
    }
}

export default header;