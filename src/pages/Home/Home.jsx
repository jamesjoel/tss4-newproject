import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';

const Home = () => {
    let [allCity, setAllCity] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/city")
            .then(response => {
                setAllCity(response.data);
            })
    }, [])


    return (
        


        <div className="gtco-section">

            {/* <a href='/about/hello'>About</a> */}


            <div className="gtco-container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center gtco-heading">
                        <h2>Most Popular Cities</h2>
                        <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
                    </div>
                </div>
                <div className="row">

                    {
                        allCity.map(item => {
                            return(
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div  className="fh5co-card-item image-popup">
                                    <figure>
                                        <div className="overlay"><i className="ti-plus"></i></div>
                                        <img src={item.image} alt="Image" style={{height : "250px"}} className="img-responsive" />
                                    </figure>
                                    <div className="fh5co-text">
                                        <h2>{item.name}</h2>
                                        
                                        <p><NavLink to={"/destination/"+item.name} className="btn btn-primary">View Detail</NavLink></p>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }









                </div>
            </div>
        </div>
    )
}

export default Home