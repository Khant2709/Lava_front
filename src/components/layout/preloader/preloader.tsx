import React from 'react';
import styles from './preloader.module.scss';

const Preloader: React.FC = () => (
    <section className={styles.window}>
        <div className={styles.containerPreloader}>
            <p className={styles.text}>Разжигаем угли... подготавливаем атмосферу</p>
            <div className={styles.lineLoader}/>
        </div>
    </section>
);

export default Preloader;
