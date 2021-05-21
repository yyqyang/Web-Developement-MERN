const continents = ['Africa','Asia','Australia','Europe'];
const helloContinents = Array.from(continents, c => `Hello ${c}`);
const message = helloContinents.join(' ')
const element = (
    <div title="Outer div">
        <h1 style={{ color: 'red' }}>{message}</h1>
    </div>
);
ReactDOM.render(element, document.getElementById('content'));