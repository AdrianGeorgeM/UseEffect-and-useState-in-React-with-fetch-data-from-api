import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Api() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  //   console.log("render");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
    console.log("useEffect resource change");
    return () => {
      console.log("unmount"); //clean up from the useEffect hook when the component unmounts and unsubscribes from the api call of that button click event listener
    };
  }, [resourceType]);

  //Render. Rendering is a process that is triggered by a change of state in some component of your application, when a state change occurs React:
  //   useEffect(() => {
  //     console.log("onMount");
  //   }, []); //[] is an empty array.we don,t want to run the effect on every render.
  //   //whenere the resourceType changes, the useEffect will run.{console.log("The use effect ran");

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
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
