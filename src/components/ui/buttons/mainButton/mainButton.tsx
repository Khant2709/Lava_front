import React from 'react';

import styles from './mainButton.module.scss';

interface ButtonProps {
    text: string;
    handleClick: () => void;
    disabled: boolean;
}

const MainButton: React.FC<ButtonProps> = ({text, handleClick, disabled}) => {
    return (
        <button
            className={styles.button}
            onClick={handleClick}
            disabled={disabled}
        >
            {text}
        </button>
    );
};

export default MainButton;