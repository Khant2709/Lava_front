import React from 'react';

import styles from './secondaryButton.module.scss';

interface ButtonProps {
    text: string;
    handleClick: () => void;
}

const SecondaryButton: React.FC<ButtonProps> = ({text, handleClick}) => {
    return (
        <button className={styles.btn} onClick={handleClick}>
            {text}
        </button>
    );
};

export default SecondaryButton;