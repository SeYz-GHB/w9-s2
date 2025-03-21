import React, { useState } from "react";

export default function StuffForm({ onAddStuff }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission refresh
    if (name && price) { // Basic validation
      onAddStuff({ 
        name, 
        price: Number(price) 
      });
      setName(""); // Reset form
      setPrice("");
    }
  };

  return (
    <form className="stuff-form" onSubmit={handleSubmit}>
      <p>Stuff name</p>
      <input 
        type="text" // Changed from search to text
        placeholder="Banana"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Stuff price</p>
      <input 
        type="number" // Changed from search to number
        placeholder="15"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button type="submit">Add Stuff</button>
    </form>
  );
}