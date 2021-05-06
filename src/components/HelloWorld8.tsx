import React, { useState, useEffect } from 'react';

type Props = {
    name?: string;
}  

//
    const HelloWorld8: React.FC<Props> = (props) => {
        //const [state, setState] = useState(initialState);
        const [date, setDate] = useState(new Date()); //This function "new Date" gets the current date
        //function below responsible for setting new date value in state which will provoke a re-render of component.
        const tick = () => {
            setDate(new Date());
        }
        useEffect(() => {//sets timer is a subscription (part of when we need useEffect. CHeck component life cycle note - slide 98)
            const timerID = setInterval(tick, 1000); //set interval calls tick and ass
            //pass tick as callback function. Called every 1000ms (every 1 second) to set a new
            //Date() in state.
                /*now we need to let this useEffect know that there is work to do when component is to unmount. We indicate
                this work to do in a return statement that takes a function callback.*/

                return( 
                    /*When a component is about to die, it could just die and the clock we have created could just be ticking
                      This could make the browser drag, as other things are running.
                      So to stop the clock from running when the component closes we use clearInterval and assign the variable we created
                      to pass the setInterval tick (which does not need a variable, the only reason we added the variable was 
                      for us to end the processes using the variable*/
                    () => {
                        clearInterval(timerID); //cleanup the timer
                    }
                )
        }, []);
        return (
            <div>
                <p>Hello {props.name}. Greetings from HelloWorld8.</p>
                <h3>
                    {`Today's date is ${date.toLocaleDateString('en-GB')}
                    and the time now is ${date.toLocaleTimeString('en-GB')}`}
                </h3>
            </div>
        )
    }
 HelloWorld8.defaultProps = {
    name: "User"
}
export default HelloWorld8;