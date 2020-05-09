//npm install --save @react-native-community/async-storage

import React, {useState} from 'react';
import {Text} from 'react-native';

const SideEffects2 = () => {
  const [name, setName] = useState('');

  /**
   * Obtenha a reposta de 'https://jsonplaceholder.typicode.com/todos/1'
   * Pegue a chave `title` do objeto e coloque dentro do estado `name`
   * Utilizem fetch e o conceito de promise.
   * */

   useEffect(() =>{
       const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
       console.log(response);
       setName(response.json.toString);
   }
   ,[])

  return (
    <>
      <Text>Texto: {name}</Text>
    </>
  );
};

export default SideEffects2;
