import React from 'react';
import styles from './formButton.module.scss';

interface Props {
    text: string;
    disable?: boolean;
}

const FormButton: React.FC<Props> = ({text, disable = false}) => {
    return (
        <button type={'submit'} className={styles.submitButton} disabled={disable}>
            {text}
        </button>
    );
};

export default FormButton;