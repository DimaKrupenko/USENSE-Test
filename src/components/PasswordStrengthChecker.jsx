import React, { useState } from 'react';
import './PasswordStrengthChecker.css'

const PasswordStrengthChecker = () => {
    const [password, setPassword] = useState('');

    const getPasswordStrength = () => {
        const hasLetters = /[a-zA-Z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasSymbols = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
        const shortPassword = password.length < 8;

        if (password.length === 0) return 'short';
        else if (hasLetters && hasNumbers && hasSymbols && !shortPassword)
            return 'strong';
        else if (
            (hasLetters && (hasNumbers || hasSymbols) && !shortPassword) ||
            (hasNumbers && hasSymbols && !shortPassword)
        )
            return 'medium';
        else return 'weak';
    };

    const passwordStrength = getPasswordStrength();

    const weakPasswordFromFirstSection =
        passwordStrength === 'weak' && password.length > 0 ? 'red' : '';
    const weakPasswordFromOtherSection =
        passwordStrength === 'weak' && password.length > 0 && password.length < 8
            ? 'red'
            : '';
    const mediumPassword = passwordStrength === 'medium' && 'yellow';
    const strongPassword = passwordStrength === 'strong' && 'green';

    return (
        <form>
            <h1>Password</h1>
            <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter your password"
            />
            <ul className="strength-indicator">
                <li
                    className={`indicator ${weakPasswordFromFirstSection || mediumPassword || strongPassword
                        }`}
                ></li>
                <li
                    className={`indicator ${weakPasswordFromOtherSection || mediumPassword || strongPassword
                        }`}
                ></li>
                <li
                    className={`indicator ${weakPasswordFromOtherSection || mediumPassword || strongPassword
                        }`}
                ></li>
            </ul>
        </form>
    )
}

export default PasswordStrengthChecker