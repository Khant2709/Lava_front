import React from 'react';

import styles from './mapWithText.module.scss';
import yaMap from "@assets/yaMap.webp";

const MapWithText: React.FC = () => {
    return (
        <section className={styles.containerMain}>
            <a>
                <div className={styles.map} style={{backgroundImage: `url(${yaMap.src})`}}/>
            </a>
            <div className={styles.containerText}>
                <p>Приглашаем вас на вдохновляющее партнерство с нашей кальянной!</p>
                <p>
                    Мы предлагаем уникальную возможность сотрудничества, которая принесет пользу обеим сторонам. Наши
                    гости
                    наслаждаются атмосферой и качеством обслуживания, что делает нашу кальянную местом притяжения для
                    любителей кальяна. Мы открыты к обсуждению идей и готовы создать уникальное партнерство, которое
                    поможет
                    привлечь новых клиентов и укрепить вашу репутацию. Давайте вместе создадим волшебное место для
                    отдыха и
                    наслаждения кальяном!
                </p>
                <p>Свяжитесь с нами для дополнительной информации и деталей сотрудничества.</p>
            </div>

        </section>
    );
};

export default MapWithText;