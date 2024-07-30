import React from 'react';

const Home = () => {
  return (
    
         
    <div className="home-container">
      
      <h1>Welcome to MobileCart</h1>
      <p>
        Your one-stop shop for the latest and greatest mobile devices. At MobileCart, we offer a wide selection of smartphones to suit every need and budget. Whether you're looking for the newest iPhone, the latest Samsung Galaxy, or an affordable Android device, we've got you covered.
      </p>
      <h2>Why Shop with Us?</h2>
      <ul>
        <li>Wide Range of Products: From flagship models to budget-friendly options, we have it all.</li>
        <li>Competitive Prices: We offer some of the best prices on the market.</li>
        <li>Secure Shopping: Your security is our priority. Shop with confidence.</li>
        <li>Fast Delivery: Get your new mobile device delivered to your doorstep quickly and safely.</li>
        <li>Customer Support: Our dedicated customer support team is here to help you with any questions or issues.</li>
      </ul>
      <h2>Featured Products</h2>
      <p>
        Check out our featured products section to find the hottest deals and newest arrivals. Stay ahead of the curve with the latest technology.
      </p>
      <p>
        Ready to start shopping? Click the button below to explore our collection of mobile devices and find the perfect phone for you.
      </p>
      <button className="get-started-button" onClick={() => window.location.href='/Login'}> Let's Get Started</button>
    </div> 
  );
};

export default Home;
