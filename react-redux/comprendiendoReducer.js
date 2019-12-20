/**
 *   Qué es un reducer : 
 *   type Reducer<S, A> = (state: S, action: A) => S
 *   Un reducer (también llamado función reductora) es una función que acepta una acumulación y una valor y devuelve una nueva acumulación.
 *   Son usados para reducir una colección de valores a un único valor.
 *   Los reducers no son únicos de Redux — son un concepto principal de la programación funcional. Incluso muchos lenguajes no funcionales,
 *   como JavaScript, tienen una API para reducción. En JavaScript, es Array.prototype.reduce().
 *   En Redux, el valor acumulado es el árbol de estado, y los valores que están siendo acumulados son acciones. 
 *   Los reducers calculan el nuevo estado en base al anterior estado y la acción. Deben ser funciones puras — funciones que devuelven 
 *   el mismo valor dados los mismos argumentos. Deben estar libres de efectos secundarios. Esto es lo que permite características increíbles 
 *   como hot reloading y time travel.
 *   Los reducers son el concepto más importante en Redux.
 *   No hagas peticiones a APIs en los reducers.
 */

 const state = {
     country: 'Colombia',
     city: 'Cali'
 };

 const action = { payload : 'Bogota'};
 console.log(state);
 const newState = { ...state, city: action.payload };

 console.log(newState);