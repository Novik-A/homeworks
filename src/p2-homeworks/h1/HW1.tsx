import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Angel',
    message: 'How are you?',
    time: '22:00',
}
const messageData2 = {
    avatar: 'https://image.freepik.com/free-vector/samurai-esports-logo-for-your-team_116205-81.jpg',
    name: 'Samurai',
    message: 'I`m fine',
    time: '22:10',
}

function HW1() {
    return (
        <div>
            homeworks 1

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <Message
                avatar={messageData2.avatar}
                name={messageData2.name}
                message={messageData2.message}
                time={messageData2.time}
            />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
        </div>
    )
}

export default HW1
