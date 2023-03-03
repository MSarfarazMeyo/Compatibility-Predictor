import React from "react";

const ItemList = (props) => {
  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <div> {props.item.name}</div>
      <div> {props.item.attributes.intelligence}</div>
      <div> {props.item.attributes.strength}</div>
      <div> {props.item.attributes.endurance}</div>
      <div> {props.item.attributes.spicyFoodTolerance}</div>
    </div>
  );
};

export default ItemList;
