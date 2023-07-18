import React, { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');

  const passwordLength = password.length;

  const getPasswordStrength = password => {
    const hasLetters = /^[a-zA-Z]+$/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
    const shortPassword = password.length < 8;

    if (passwordLength === 0) return 'short';
    else if (hasLetters && hasNumbers && hasSymbols && !shortPassword)
      return 'strong';
    else if (
      (hasLetters && (hasNumbers || hasSymbols) && !shortPassword) ||
      (hasNumbers && hasSymbols && !shortPassword)
    )
      return 'medium';
    else if (hasLetters || hasNumbers || hasSymbols) return 'weak';
  };

  const passwordStrength = getPasswordStrength(password);
  console.log(passwordStrength);
  const weakPasswordFromFirstSection =
    passwordStrength === 'weak' && passwordLength > 0 ? 'red' : '';
  const weakPasswordFromOtherSection =
    passwordStrength === 'weak' && passwordLength > 0 && passwordLength < 8
      ? 'red'
      : '';
  const mediumPassword = passwordStrength === 'medium' && 'yellow';
  const strongPassword = passwordStrength === 'strong' && 'green';

  return (
    <div className="App">
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Enter your password"
      />
      <div className="strength-indicator">
        <div
          className={`indicator ${
            weakPasswordFromFirstSection || mediumPassword || strongPassword
          }`}
        ></div>
        <div
          className={`indicator ${
            weakPasswordFromOtherSection || mediumPassword || strongPassword
          }`}
        ></div>
        <div
          className={`indicator ${
            weakPasswordFromOtherSection || mediumPassword || strongPassword
          }`}
        ></div>
      </div>
    </div>
  );
}

export default App;
