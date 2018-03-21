console.log('App is running!');

// JSX - JavaScript XML
//var template = <p>This is the JSX running from app.js!</p>;
var appRoot = document.getElementById('app');
var template = React.createElement(
    "h1",
    { id: "someid" },
    "This is the JSX running from app.js!"
  );


ReactDOM.render(template, appRoot);