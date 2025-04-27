import React from 'react';
import styles from './formButton.module.scss';

interface Props {
    text: string;
}

const FormButton: React.FC<Props> = ({text}) => {
    return (
        <button type={'submit'} className={styles.submitButton}>
            {text}
        </button>
    );
};

export default FormButton;