import React from 'react';
import styles from './selectedButton.module.scss';

interface Props {
    text: string;
    handleClick: () => void;
    isActive: boolean;
}

const SelectedButton: React.FC<Props> = ({text, handleClick, isActive}) => {
    return (
        <button
            onClick={handleClick}
            className={`${styles.btn} ${isActive ? styles.activeBtn : ''}`}
        >
            {text}
        </button>
    );
};

export default SelectedButton;