import React, { useState } from 'react';
import Input from '../Input/Input'
import List from '../List/List';
import Title from '../Title/Title'
import './PasswordStrengthChecker.css'


const PasswordStrengthChecker = () => {
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

export default PasswordStrengthChecker