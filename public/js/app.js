console.log('App is running!');

// JSX - JavaScript XML
var template = <p>This is the JSX running from app.js!</p>;
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);