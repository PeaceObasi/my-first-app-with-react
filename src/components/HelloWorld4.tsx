//illustrating more than one state variable in the same Component.

import React, { useState } from 'react';

//Understanding Component State;

type Props = {//difference with js
    name?: string;
    other?: string;
}   

const HelloWorld4: React.FC<Props> = (props)  => {  //difference with js
      //Syntax for state is const [state, setState] = useState(initialState);
    const [name, setName] = useState(props.name);
    const [count, setCount] = useState(0);
    const changeNameToGreet = (event:any) => {//difference with js
        setName(event.target.value);
    }
    return (
        <div>
            <p>Hello {name}. Greetings from from React.</p>
            <p>
                <input type="text" placeholder="Write a name here..."
                    name="name_to_greet" onInput={changeNameToGreet} />
            </p>

            <p>You clicked {count} times</p>
            <p>
                <button onClick={() => setCount(count + 1)}>
                    Click me
                 </button>
            </p>
    </div>
    )
}
HelloWorld4.defaultProps = {
        name: "User"
}
export default HelloWorld4;