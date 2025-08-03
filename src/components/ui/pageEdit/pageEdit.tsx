import React from 'react';
import {FaGhost} from "react-icons/fa";
import styles from './pageEdit.module.scss';

const PageEdit: React.FC = () => {
    return (
        <section className={styles.containerMain}>
            <FaGhost className={styles.icon}/>
            <h2>Страница находиться в режиме разработки</h2>
            <p>Приносим свои извинения, зайдите пожалуйста по позже.</p>
        </section>
    );
};

export default PageEdit;