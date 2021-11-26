import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Api() {
  const [resourceType, setResourceType] = useState("posts"); // resourceType is the initial state of the resourceType variable and setResourceType is the function that changes the state of the resourceType variable (which is the variable that is used to determine which API endpoint to use)
  // const [todos, setTodos] = useState();// todos is the initial state of the todos variable and setTodos is the function that changes the state of the todos variable (which is the variable that is used to store the data from the API endpoint)
  const [items, setItems] = useState([]);
  console.log("render");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
    console.log("useEffect resource change");
    return () => {
      console.log("unmount"); //clean up from the useEffect hook when the component unmounts and unsubscribes from the api call of that button click event listener and call every time the component is unmounted
    };
  }, [resourceType]);

  //   useEffect(() => {
  //     console.log(`useEffect resource change ${items}`);
  //   }, [items]);
  //Render. Rendering is a process that is triggered by a change of state in some component of your application, when a state change occurs React:
  //   useEffect(() => {
  //     console.log("onMount");
  //   }, []); //[] is an empty array.we don,t want to run the effect on every render.
  //   //whenere the resourceType changes, the useEffect will run.{console.log("The use effect ran");

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>{resourceType}</button>
        <button onClick={() => setResourceType("users")}> Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}
