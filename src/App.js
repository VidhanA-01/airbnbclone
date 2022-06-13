import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Data from "./data";
function App() {
  
  const cards = Data.map(feature =>{
    return(
      <Card 
      key={feature.id}
      {...feature}
      />
    )
    })
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
      {cards}
      </section>
      
    </div>
   
  );
}

export default App;
