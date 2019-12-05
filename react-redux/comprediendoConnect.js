const connect = (func1, func2) => {
    const dato1 = func1();
    console.log(dato1);
    console.log(func1);
    console.log(func2);
    return (component) => {
        const result = `${component}-${func1()*func2()}`;
        console.log(result);
        return result;
    }
}

connect(()=>2,()=>3)('App');
