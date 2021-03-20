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
    const inputClass = name.trim() ? s.input : s.errorInput; // need to fix with (?:)

    return (
        <div className={s.greeting}>
            <div>
                <input
                    value={name}
                    onChange={setNameCallback}
                    onBlur={setNameCallback}
                    onKeyPress={onKeyPressHandler}
                    className={inputClass}
                />
                <div className={s.error}>{error}</div>
            </div>
            <button className={s.button} disabled={!name} onClick={addUser}>add</button>
            <span className={s.count}>{totalUsers}</span>
        </div>
    );
}

export default Greeting;
