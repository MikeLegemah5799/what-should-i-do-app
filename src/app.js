console.log('App is running!');

// JSX - JavaScript XML
var template = (
    <div>
        <h1>What Should I do App</h1> 
        <p>This is some info</p>
    </div>
);

var user = {
    name: 'Mike',
    age: 39,
    location: 'New York'
};
var bio = (
    <div>
        <h1>{use.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(bio, appRoot);