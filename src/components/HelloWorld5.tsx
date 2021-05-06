import React, { useState, useEffect } from 'react';

//We created a type called props.
type Props = {
    name?: string;
    other?: string;
}

const HelloWorld5: React.FC<Props> = (props) => { // THIS IS A DEFINITION OF S FUNCTION. 
    //The funciton is not empty, it contains an argument, we called it "props"
    //We declared a variable using const and we declared the type of the variable, a React FC, then included the type we defined.


    //const [state, setState] = useState(initialState);
    const [name, setName] = useState(props.name); 
    /*name is a data holder, setName is a function. useState is a hook (state manager) 
     (anytime we have a state that changes, we uses useState to set it up). that manages 
     our state for us that holds two variables.
     function that manipulates the data holder.
     name and setName would not exist without the state manager.*/
    const [count, setCount] = useState(0);

    const changeNameToGreet = (event: any) => {
        setName(event.target.value);
    }

    /* Below shows that you can have more than one useEffect in the same component
   The two effects document.title and window.alert could have been put under one useEffect but
   I want to illustrate that in the case of window.alert, we want it to be fired only on the
   condition that
   count value changes. Otherwise, it will show whenever the component is update at all
   including when writing
   name to greet.
   */

    useEffect(() => {
        document.title = `Hello ${name} with click count ${count}`;
    });

    useEffect(() => {
        window.alert(`Hello ${name}, be aware that you have clicked ${count} time(s).`);
        //if you remove the line below, you will get a warning because only count and not name
        //is set as condition
        // eslint-disable-next-line

    }, [count]);

    return(
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
HelloWorld5.defaultProps = {//once we've defined a variable in this case HelloWorld5, react includes a .defaultProps 
    //because we have already assigned a variabel (in this case "name".) So it is saying, if it is not the value we
    //have assigned then assign this.
        name: "User"
}

export default HelloWorld5;
