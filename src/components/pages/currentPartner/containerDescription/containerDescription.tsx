import React from 'react';
import Image, {StaticImageData} from "next/image";


import styles from './containerDescription.module.scss';

interface DescriptionProps {
    logo: StaticImageData;
    description: string;
}

const ContainerDescription:React.FC<DescriptionProps> = ({logo, description}) => {
    return (
        <section className={styles.containerMain}>
            <div className={styles.wrapperLogo}>
                <Image src={logo} alt={'logo'} className={styles.logo}/>
            </div>
            <p className={styles.description}>{description}</p>
        </section>
    );
};

export default ContainerDescription;