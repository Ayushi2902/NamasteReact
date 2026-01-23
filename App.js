/*const heading = React.createElement(
  "h1",
  { id: "title", key: "h1" },
  "Hello from React",
);

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: "h1" }, "I am h1 tag"),
    React.createElement("h2", { key: "h2" }, "I am h2 tag"),
  ],React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { key: "h1" }, "I am h1 tag"),
    React.createElement("h2", { key: "h2" }, "I am h2 tag"),
  ]))
);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); //putting the parent element in the root


