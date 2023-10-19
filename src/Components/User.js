const User = ({user}) => {
    // console.log(props);
    const {name, age} = user;

    return (
        <div>
            <div>name: {name}</div>
            <div>age: {age}</div>
        </div>
    );
};

export {User};