import React from "react";
import { useState, useEffect } from "react";

export default function Api2() {
  const [resources, setResources] = useState("posts");
  const [items, setItems] = useState([]);
  console.log("render");
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resources}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [resources]);

  return (
    <>
      <div>
        <button onClick={() => setResources("posts")}>Post</button>
        <button onClick={() => setResources("users")}>User</button>
        <button onClick={() => setResources("comments")}>Comment</button>
      </div>
      <h2>{resources}</h2>
      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </>
  );
}

// export default function Api2() {
//   const [todos, setTodos] = useState();

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/todos`)
//       .then((res) => res.json())
//       .then((data) => setTodos(data));
//   }, []);

//   return (
//     <div>
//       {todos &&
//         todos.map((todo) => {
//           const { id, title, userId } = todo;
//           return (
//             <div>
//               <h1>{id}</h1>
//               <h5>{title}</h5>
//               <h5>{userId}</h5>
//             </div>
//           );
//         })}
//     </div>
//   );
// }
