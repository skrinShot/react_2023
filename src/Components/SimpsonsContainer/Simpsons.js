import {Simpson} from "./Simpson";

const Simpsons = () => {
    const simpsons = [
        {id:1, name: 'Marge', img:'https://static.wikia.nocookie.net/simpsons-world/images/0/0b/Marge_Simpson.png'},
        {id:2, name: 'Homer', img:'https://static.wikia.nocookie.net/p__/images/3/3c/HomerSimpson.png'},
        {id:3, name: 'Bart', img:'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'},
        {id:4, name: 'Lisa', img:'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'},
        {id:5, name: 'Megi', img:'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png'}
    ]
    return (
        <div>
            {simpsons.map(simpson=><Simpson key={simpson.id} simpson={simpson}/>)}
        </div>
    );
};

export {Simpsons};