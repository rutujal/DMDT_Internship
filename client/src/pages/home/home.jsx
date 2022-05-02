import React from 'react';
import "./home.css";
import { Link } from 'react-router-dom';
import p1 from "./p1.jpg";

const Home = () => {

    return (
        <>
            <div className="topnav">
                <div className="heading">
                    <h2>MAHA<span style={{color:"orange"}}>DIGITAL</span>PORTAL</h2>
                </div>
                <ul className="nav-menu">
                    <li className="nav-item"><button className="viewbalance">View Balance</button></li>
                    <li className="nav-item"><Link href="#"><i className="material-icons">person</i></Link></li>
                </ul>

                <div className="search-container">
                    <input type="text" placeholder="Search Service" name="search" />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </div>

                <div className="dropdown">
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <div className="dropdown-content">

                        <Link href="#">Account Setting</Link>
                        <Link href="#">Help</Link>
                        <Link href="#">Logout</Link>

                    </div>
                </div >




            </div >

            <div className="main-container">
                <div className="container">
                     <button  className="navitem">
                    <Link  to="/write2" className='link' >Affidavit</Link></button>
                    <button className="navitem">शासकीय योजना</button>
                    <button className="navitem">खरेदी विक्री</button>
                    <button  className="navitem">
                    <Link  to="/cert1" className='link'>Certificate</Link></button>
                    <button  className="navitem">
                    <Link  to="/form1" className='link'>Validity Affidavits</Link></button>
                    
                    <button className="navitem">हक्क सोड पत्र</button>
                </div>
                <div className="container2">
                    <div className="navitem2">
                        <h4><Link href="#"><i className="fa fa-file-text-o"></i>Application Status</Link></h4>
                    </div>
                    <div className="navitem2">
                        <h4><Link href="#"><i className="fa fa-plus-circle" aria-hidden="true"></i> Add Balance</Link></h4>
                    </div>

                </div>




            </div>

            <div className="main-container2">
                <div className="imgcontainer">
                    <img src={p1} className="webimg" alt=""/>
                        <div className="noticecontainer">

                            <button className="noticesupport notice" style={{fontSize:"24px"}}><i className="fa fa-bell iconspace" ></i>Notice <i className="fa fa-angle-double-right arrowspace"></i></button>
                            <button className="noticesupport support" style={{fontSize:"24px"}}><i className="fa fa-envelope iconspace" ></i>Support<i className="fa fa-angle-double-right arrowspace"></i></button>


                        </div>
                </div>

                <div className="updatecontainer">

                    <h2>Get Updates</h2>
                    <ul>
                        <li>Check your nearest vaccination centers and slot availability<i className="fa fa-angle-double-right  arrowcolor "></i></li>
                        <li>Check your nearest vaccination centers and slot availability<i className="fa fa-angle-double-right  arrowcolor"></i></li>
                        <li>Check your nearest vaccination centers and slot availability<i className="fa fa-angle-double-right  arrowcolor"></i></li>
                        <li>Check your nearest vaccination centers and slot availability<i className="fa fa-angle-double-right  arrowcolor"></i></li>
                        <li>Check your nearest vaccination centers and slot availability<i className="fa fa-angle-double-right arrowcolor"></i></li>
                        <li>Check your nearest vaccination centers and slot availability<i className="fa fa-angle-double-right  arrowcolor"></i></li>
                    </ul>

                </div>


            </div>
        </>
    )
}
export default Home;
