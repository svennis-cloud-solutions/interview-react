import React, { useState, useEffect } from "react";
import "./styles.css";
import SearchBar from "./SearchBar";
import Table from "./Table";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [lastTermSearched, setLastTermSearched] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    };
    fetchData();
  }, []);

  const handleSearch = async () => {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${searchTerm}`
    );
    const data = await response.json();
    setProducts(data.products);
    setLastTermSearched(searchTerm);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Products</h1>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
        />
      </header>
      <Table products={products} />
      {products.length === 0 ? (
        <div className="no-products-found">
          No products found for "{lastTermSearched}"
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
