'use strict';

console.log('App is running!');

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'What Should I do App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    )
);

var user = {
    name: 'Mike',
    age: 39,
    location: 'New York'
};
var bio = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        use.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(bio, appRoot);
