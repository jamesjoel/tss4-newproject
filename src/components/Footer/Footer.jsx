import React from 'react'

const Footer = () => {
  return (
    <footer id="gtco-footer" role="contentinfo">
    <div className="gtco-container">
      <div className="row row-p	b-md">

        <div className="col-md-4">
          <div className="gtco-widget">
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eos molestias quod sint ipsum possimus temporibus officia iste perspiciatis consectetur in fugiat repudiandae cum. Totam cupiditate nostrum ut neque ab?</p>
          </div>
        </div>

        <div className="col-md-2 col-md-push-1">
          <div className="gtco-widget">
            <h3>Destination</h3>
            <ul className="gtco-footer-links">
              <li><a href="#">Europe</a></li>
              <li><a href="#">Australia</a></li>
              <li><a href="#">Asia</a></li>
              <li><a href="#">Canada</a></li>
              <li><a href="#">Dubai</a></li>
            </ul>
          </div>
        </div>

        <div className="col-md-2 col-md-push-1">
          <div className="gtco-widget">
            <h3>Hotels</h3>
            <ul className="gtco-footer-links">
              <li><a href="#">Luxe Hotel</a></li>
              <li><a href="#">Italy 5 Star hotel</a></li>
              <li><a href="#">Dubai Hotel</a></li>
              <li><a href="#">Deluxe Hotel</a></li>
              <li><a href="#">BoraBora Hotel</a></li>
            </ul>
          </div>
        </div>

        <div className="col-md-3 col-md-push-1">
          <div className="gtco-widget">
            <h3>Get In Touch</h3>
            <ul className="gtco-quick-contact">
              <li><a href="#"><i className="icon-phone"></i> +1 234 567 890</a></li>
              <li><a href="#"><i className="icon-mail2"></i> info@freehtml5.co</a></li>
              <li><a href="#"><i className="icon-chat"></i> Live Chat</a></li>
            </ul>
          </div>
        </div>

      </div>

      <div className="row copyright">
        <div className="col-md-12">
          <p className="pull-left">
            <small className="block">&copy; 2016 Free HTML5. All Rights Reserved.</small>
            <small className="block">Designed by <a href="https://freehtml5.co/" target="_blank">FreeHTML5.co</a> Demo Images: <a href="http://unsplash.com/" target="_blank">Unsplash</a></small>
          </p>
          <p className="pull-right">
            <ul className="gtco-social-icons pull-right">
              <li><a href="#"><i className="icon-twitter"></i></a></li>
              <li><a href="#"><i className="icon-facebook"></i></a></li>
              <li><a href="#"><i className="icon-linkedin"></i></a></li>
              <li><a href="#"><i className="icon-dribbble"></i></a></li>
            </ul>
          </p>
        </div>
      </div>

    </div>
  </footer>
  )
}

export default Footer