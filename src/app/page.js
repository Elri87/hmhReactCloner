"use client";
import styles from "./page.module.css";
import pet from "@/lib/ellie.js";
import Image from "next/image.js";
import elliePup from "../../src/ellie.jpeg";
//import elliePup from "../../public/el.png";
import { useState } from "react";

export default function Home() {
  const [ellie, setEllie] = useState(pet);

  function handleClick() {
    let clone = { ...ellie[0] };
    clone.id = ellie.length + 1;
    setEllie([...ellie, clone]);
    console.log(clone);
  }

  function handleChange(e) {
    e.preventDefault();
    const chosenID = +e.target.value;
    let updatedArray = ellie.filter((object) => object.id !== chosenID);
    console.log(updatedArray);
    setEllie([...updatedArray]);
    //console.log(updatedArray);
  }

  return (
    <div>
      <h1>Cloner</h1>
      <div className="container">
        {pet.map((pup) => {
          return (
            <div className="card" key={pup.id}>
              <h3>{pup.petName}</h3>
              <p>ID: {pup.id}</p>
              <Image src={elliePup} alt="Ellie" className="img" priority />
              <button onClick={handleClick}>Clone</button>
            </div>
          );
        })}
      </div>

      <label>SELECT CLONE TO TERMINATE:</label>
      <select onChange={handleChange}>
        {ellie.map((pup) => {
          return (
            <option value={pup.id} key={pup.id}>
              {pup.id}
            </option>
          );
        })}
      </select>
    </div>
  );
}
