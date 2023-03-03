import React from "react";

const Form = (props) => {
  return (
    <div className="formcontainer">
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <div>
          {" "}
          <label for="fname">Name</label>
          <input
            type="text"
            id="fname"
            name="name"
            placeholder=" name.."
            onChange={props.handleInput}
            value={props?.obj?.name}
          />
        </div>
        <div>
          {" "}
          <label for="lname">intelligence</label>
          <input
            type="number"
            id="lname"
            name="intelligence"
            onChange={props.handleInput}
            value={props?.obj?.attributes?.intelligence}
          />
        </div>
        <div>
          {" "}
          <label for="lname">strength</label>
          <input
            type="number"
            id="lname"
            name="strength"
            onChange={props.handleInput}
            value={props?.obj?.attributes?.strength}
          />
        </div>{" "}
        <div>
          {" "}
          <label for="lname">endurance</label>
          <input
            type="number"
            id="lname"
            name="endurance"
            onChange={props.handleInput}
            value={props?.obj?.attributes?.endurance}
          />
        </div>{" "}
        <div>
          {" "}
          <label for="lname">spicyFoodTolerance</label>
          <input
            type="number"
            id="lname"
            name="spicyFoodTolerance"
            onChange={props.handleInput}
            value={props?.obj?.attributes?.spicyFoodTolerance}
          />
        </div>
        <button className="btnstyle" onClick={props.handleSave}>
          {" "}
          {props.btntext}
        </button>
      </div>
    </div>
  );
};

export default Form;
