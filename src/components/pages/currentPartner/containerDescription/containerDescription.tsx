import React from 'react';
import Image from "next/image";
import Markdown from 'react-markdown'


import styles from './containerDescription.module.scss';

interface DescriptionProps {
    logo: string;
    description: string;
}

const ContainerDescription: React.FC<DescriptionProps> = ({logo, description}) => {
    return (
        <section className={styles.containerMain}>
            <div className={styles.wrapperLogo}>
                <Image src={logo} alt={'logo'} className={styles.logo} width={300} height={300}/>
            </div>
            <div className={styles.description}>
                <Markdown>{description}</Markdown>
            </div>
        </section>
    );
};

export default ContainerDescription;