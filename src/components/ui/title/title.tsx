import React from 'react';

import styles from './title.module.scss';

interface TitleProps {
    Tag: 'h1' | 'h2' | 'h3' | 'p';
    text: string;
}

const Title: React.FC<TitleProps> = ({Tag, text}) => {
    return (
        <Tag className={styles.title}>
            {text}
        </Tag>
    );
};

export default Title;