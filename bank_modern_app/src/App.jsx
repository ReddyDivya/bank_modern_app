import React from 'react';
import {Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";

const App = () => (
  /*
  overflow-hidden - hides any content that exceeds the boundaries of the <div>.

  */
  <div className="bg-primary w-full overflow-hidden">
      <h1>Hello, world!</h1>
      <Navbar />
      <Hero />
      <Stats />
      <Business />
      <Billing />
      <CardDeal />
      <Testimonials />
      <Clients />
      <CTA />
      <Footer />
  </div>
)

export default App