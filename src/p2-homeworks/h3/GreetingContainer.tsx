import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>(""); // need to fix any
    const [error, setError] = useState<string>(""); // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        const trimmedName = e.currentTarget.value
        if (trimmedName) {
        setName(trimmedName); // need to fix
        setError('')
        } else {
            setName('')
            setError('Name is required!');
        } // need to fix
    };
    const addUser = () => {
        if (name.trim()) {
            addUserCallback(name.trim())
            alert(`Hello ${name.trim()}!`)
            setName('')
        } else {
            setName('')
            setError('Name is required!');
        }
    };
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') { addUser() }
    }

    const totalUsers = users.length; // need to fix

    return (
        <div>
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            onKeyPressHandler={onKeyPressHandler}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
        {/*<div>{users}</div>*/}
        </div>
    );
}

export default GreetingContainer;
