import React from "react";
import "./NewCollection.css";
import { Popular_Data } from "../assets/popular-data";
import Item from "./../Item/Item";

const NewCollection = () => {
  return (
    <div className="new-collection" id="latestCollection">
      <h1>New Collection</h1>
      <div className="collection">
        {Popular_Data.map((item, i) => {
          return <Item key={i} item={item} />;
        })}
      </div>
    </div>
  );
};

export default NewCollection;
