import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {

    let param = useParams();

    console.log(param.a)

  return (
    <div>About</div>
  )
}

export default About