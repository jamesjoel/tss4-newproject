import React from 'react'

const NavBar = () => {
  return (
    <>
    
    <nav className="gtco-nav" role="navigation">
          <div className="gtco-container">

            <div className="row">
              <div className="col-sm-4 col-xs-12">
                <div id="gtco-logo"><a href="index.html">Traveler <em>.</em></a></div>
              </div>
              <div className="col-xs-8 text-right menu-1">
                <ul>
                  <li><a href="destination.html">Destination</a></li>
                  <li className="has-dropdown">
                    <a href="#">Travel</a>
                    <ul className="dropdown">
                      <li><a href="#">Europe</a></li>
                      <li><a href="#">Asia</a></li>
                      <li><a href="#">America</a></li>
                      <li><a href="#">Canada</a></li>
                    </ul>
                  </li>
                  <li><a href="pricing.html">Pricing</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </div>
            </div>

          </div>
        </nav>
        <header id="gtco-header" className="gtco-cover gtco-cover-md" role="banner" style={{ backgroundImage: "url('/public/assets/images/img_bg_2.jpg')" }}>
          
          <div className="gtco-container">
            <div className="row">
              <div className="col-md-12 col-md-offset-0 text-left">


                <div className="row row-mt-15em">
                  <div className="col-md-7 mt-text" data-animate-effect="fadeInUp">
                    <h1>Planing Trip To Anywhere in The World?</h1>
                  </div>
                  <div className="col-md-4 col-md-push-1 animate-box" data-animate-effect="fadeInRight">
                    <div className="form-wrap">
                      <div className="tab">

                        <div className="tab-content">
                          <div className="tab-content-inner active" data-content="signup">
                            <h3>Book Your Trip</h3>
                            <form action="#">
                              <div className="row form-group">
                                <div className="col-md-12">
                                  <label for="fullname">Your Name</label>
                                  <input type="text" id="fullname" className="form-control" />
                                </div>
                              </div>
                              <div className="row form-group">
                                <div className="col-md-12">
                                  <label for="activities">Activities</label>
                                  <select name="#" id="activities" className="form-control">
                                    <option value="">Activities</option>
                                    <option value="">Hiking</option>
                                    <option value="">Caving</option>
                                    <option value="">Swimming</option>
                                  </select>
                                </div>
                              </div>
                              <div className="row form-group">
                                <div className="col-md-12">
                                  <label for="destination">Destination</label>
                                  <select name="#" id="destination" className="form-control">
                                    <option value="">Philippines</option>
                                    <option value="">USA</option>
                                    <option value="">Australia</option>
                                    <option value="">Singapore</option>
                                  </select>
                                </div>
                              </div>

                              <div className="row form-group">
                                <div className="col-md-12">
                                  <label for="date-start">Date Travel</label>
                                  <input type="text" id="date-start" className="form-control" />
                                </div>
                              </div>

                              <div className="row form-group">
                                <div className="col-md-12">
                                  <input type="submit" className="btn btn-primary btn-block" value="Submit" />
                                </div>
                              </div>
                            </form>
                          </div>


                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </header>
        </>
  )
}

export default NavBar