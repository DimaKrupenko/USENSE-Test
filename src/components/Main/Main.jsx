import React, { useState } from 'react';
import Input from '../Input/Input'
import List from '../List/List';
import Title from '../Title/Title'
import './Main.css'


const Main = () => {
    const [password, setPassword] = useState('');
    return (
        <div>
            <Title />
            <Input
                password={password}
                setPassword={setPassword}
            />
            <List
                password={password}
            />
        </div>
    )
}

export default Main