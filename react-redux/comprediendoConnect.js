/**
 * Este tipo de funcion se denomina funcion de orden superior, es una funcion la cual retorna otra función
 * y la función retornada puede o no recibir parámetros.
 * @param {*} value1 
 * @param {*} values2 
 */
const connect = (value1, values2) => {
    console.log(value1);
    console.log(values2);
    return (component) => {
        const result = `${component}-${value1()*values2()}`;
        console.log(result);
        return result;
    }
}

const mapStateToProps = () => 2;
const mapDispatchToProps = () => 3;

connect(mapStateToProps,mapDispatchToProps)('App');
