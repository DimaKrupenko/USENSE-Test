import getPasswordStrength from '../service/getPasswordStrength'

const List = ({ password }) => {

    const passwordStrength = getPasswordStrength(password);

    const weakPasswordFromFirstSection =
        passwordStrength === 'weak' && password.length > 0 ? 'red' : '';
    const weakPasswordFromOtherSection =
        passwordStrength === 'weak' && password.length > 0 && password.length < 8
            ? 'red'
            : '';
    const mediumPassword = passwordStrength === 'medium' && 'yellow';
    const strongPassword = passwordStrength === 'strong' && 'green';

    return (
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
                className={`indicator ${weakPasswordFromOtherSection || strongPassword
                    }`}
            ></li>
        </ul>
    )
}

export default List