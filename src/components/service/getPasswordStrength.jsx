const getPasswordStrength = (password) => {
    const hasLetters = /[a-zA-Zа-яА-Я]/.test(password);
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

export default getPasswordStrength