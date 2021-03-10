import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./Greeting.module.css";


type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler} // деструктуризация пропсов
) => {
    const inputClass = name.trim() ? s.all : s.error; // need to fix with (?:)

    return (
        <div>
            <div>
                <input
                    value={name}
                    onChange={setNameCallback}
                    onBlur={setNameCallback}
                    onKeyPress={onKeyPressHandler}
                    className={inputClass}
                />
                <div>{error}</div>
            </div>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    );
}

export default Greeting;
