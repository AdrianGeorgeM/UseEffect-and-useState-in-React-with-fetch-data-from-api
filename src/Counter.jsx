import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [resourceType, setResourceType] = useState("posts");
  console.log("render");

  // componentDidMount
  //   useEffect(() => {
  //     console.log("The use effect ran");
  //   }, []);

  // // componentDidUpdate
  // useEffect(() => {
  //   console.log("The use effect ran");
  // }, [count, count2]);

  // componentWillUnmount
  // useEffect(() => {
  //   console.log("The use effect ran");
  //   return () => {
  //     console.log("the return is being ran");
  //   };
  // }, []);
  //   useEffect(() => {
  //     console.log("onMount");//run only once when the component is mounted to the DOM tree (first time) and never again when the component is updated (second time) or unmounted (third time) or when the component is re-mounted (fourth time)
  //   }, []); // [] is the array of dependencies that will trigger the useEffect hook to run again when the dependencies change.

  //   useEffect(
  //     //what is useEffect? it is a hook that runs after the component is mounted to the DOM tree and after the component is updated. it is a lifecycle method. it is a function that runs after the component is mounted to the DOM tree and after the component is updated.

  //     () => {
  //       console.log(`The count has updated to ${count}`); // run this code when count changes (only when count changes) - componentDidUpdate runs when count changes (only when count changes) - componentDidMount runs when component mounts (only when component mounts)

  //       return () => {
  //         console.log(`we are in the cleanup - the count is ${count}`); // run this code when the component unmounts (only when component unmounts) - componentWillUnmount runs when component unmounts (only when component unmounts)
  //       };
  //     },
  //     [count] // only run this effect if count changes
  //   ); //only runs when count changes when count changes it will run the useEffect hook and the console log will run when the count changes

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.log(error));
  }, [resourceType]);

  return (
    <div>
      <h6> Counter </h6>
      <p> current count: {count} </p>
      <button onClick={() => setCount(count + 1)}>increment the count</button>
      <button onClick={() => setCount2(count2 + 1)}>increment count 2</button>
    </div>
  );
};

export default Counter;
