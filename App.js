// const heading = React.createElement("h1", { id: "heading" }, "Hello World by react!")
// console.log(heading)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading) 
const parent = React.createElement("div", {id:"parent"} ,
    React.createElement("div", {id:"child"} ,
        [React.createElement("h1", {id:"h1-tag"} ,"I am an h1 tag"),
        React.createElement("h2", {id:"h2-tag"} ,"I am an h2 tag")]
    )
 )
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(parent)
