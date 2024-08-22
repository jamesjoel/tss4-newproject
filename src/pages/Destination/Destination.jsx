import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const Destination = () => {
    let param = useParams();
    useEffect(()=>{
        let cityname = param.a;

        axios.get("http://localhost:3000/api/v1/destination/"+cityname)
        .then(response=>{
            console.log(response.data);
        })

    },[])


  return (
    <div  style={{minHeight : "650px"}}>
        <div className="gtco-container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center gtco-heading">
                    <h2>Most Popular Destination of </h2>
                    
                </div>
            </div>
            <div className="row">
            </div>
        </div>
    </div>
    
  )
}

export default Destination