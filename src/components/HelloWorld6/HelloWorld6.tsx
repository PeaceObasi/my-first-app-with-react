/** Here we illustrate useEffect for fetching remote data at mount time and event
 driven occasion */
import React, { useState, useEffect } from 'react';
import ShowUser from './ShowUser';
import { User } from './type-defs';

type Props = {//We did not define "user" here
    name?: string;
}
const HelloWorld6: React.FC<Props> = (props) => {
    //const [state, setState] = useState(initialState);
    const [user, setUser] = useState<User | null>(null); //user could be name or null. We defined user in the ShowUser file and not type.

    const fetchData = async () => {
        try {
            let response = await fetch(`https://jsonplaceholder.typicode.com/users/2`);
            let data = await response.json()
            setUser(data);
        } catch (error) {
            setUser(null);
        }
    };

    useEffect(() => {
        fetchData();
    }, []); //the second parameter [] will ensure that this useEffect runs only once. Component DidMount
    //fetch data is run when a component loads. Then on line 44 {showUser} to show the user we have found.

    //conditionally show user if not null
    const showUser = () => {
        if (user !== null) {
            return <ShowUser user={user} /> //If user in the state is not null, return user input.
        }
        else {

            return 'No user to display';
        }
    }

    return (
        <div>
            <p>Hello {props.name}. Greetings from HelloWorld6.</p>
            <p>
                {showUser()} 
            </p>
        </div>
    )
}
HelloWorld6.defaultProps = {
    name: "User"
}
export default HelloWorld6;