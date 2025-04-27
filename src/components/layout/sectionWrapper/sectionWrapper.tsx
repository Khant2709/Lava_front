import React from 'react';

import styles from './sectionWrapper.module.scss';

interface Props {
    children: React.ReactNode;
    needMarginTop?: boolean;
}

const SectionWrapper: React.FC<Props> = ({children, needMarginTop = false}) => {
    return (
        <section className={`${styles.section} ${needMarginTop ? styles.mt : ''}`}>
            {children}
        </section>
    );
};

export default SectionWrapper;

