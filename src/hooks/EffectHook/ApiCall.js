import React, { useEffect } from "react";

export default function ApiCall() {
  // There are two ways first is using promise and second is async and await
  useEffect(() => {
    // const fetchData = fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));

    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      console.log(data);
    };
    getData();
  }, []);
  return <div>ApiCall</div>;
}
