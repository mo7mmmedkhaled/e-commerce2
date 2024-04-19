import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
import Item from "../Item/Item";
import "./Popular.css";
import { Popular_Data } from "../assets/popular-data";

const Popular = () => {
  // const [popData, setPopData] = useState([]);
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products/")
  //     .then((res) => res.json())
  //     .then((json) => setPopData(json));
  // }, []);

  const result = Popular_Data.filter((item) => item.rating > 4.6);
  return (
    <div className="popular">
      <h1>Popular Products</h1>
      {/* <div className="popular-item">
        {result.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </div> */}
      <div className="popular-item">
        {result.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
