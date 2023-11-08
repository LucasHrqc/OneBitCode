import { useState } from 'react'

function getInitialValue() {
    console.log('obtendo valor inicial');
    return 1+1;
}

export default function useCounter() {
    const [count, setCount] = useState(() => getInitialValue());

    const increment = () => {
        // Isso não funciona. O React executa uma Batch pra renderizar o componente e atualizar somente uma vez.
        // setCount(count + 1);
        // setCount(count + 1);

        setCount((currentState) => currentState + 1);
        setCount((currentState) => currentState + 1);
    }

    return {count, increment};
}