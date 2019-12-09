/**
 * Este tipo de funcion se denomina funcion de orden superior, es una funcion la cual retorna otra función
 * y la función retornada puede o no recibir parámetros.
 * @param {*} func1 
 * @param {*} func2 
 */
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

const mapStateToProps = () => 2;
const mapDispatchToProps = () => 3;

connect(mapStateToProps,mapDispatchToProps)('App');
