
const Simpsons = () => {
    const simpsons = [
        {id:1, name: 'Marge', image:'https://static.wikia.nocookie.net/simpsons-world/images/0/0b/Marge_Simpson.png'},
        {id:2, name: 'Gomer', image:'https://static.wikia.nocookie.net/p__/images/3/3c/HomerSimpson.png'},
        {id:3, name: 'Bart', image:'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'},
        {id:4, name: 'Lisa', image:'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'},
        {id:5, name: 'Megi', image:'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png'}
    ]
    return (
        <div>
            {simpsons.map(simpsons=> <Simpson key={simpson.id} simpson={simpson}/>)}
        </div>
    );
};

export {Simpsons};