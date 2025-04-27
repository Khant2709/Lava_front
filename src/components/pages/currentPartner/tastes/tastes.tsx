import React from 'react';

import styles from './tastes.module.scss';
import Image, {StaticImageData} from "next/image";
import SelectedButton from "@components/ui/buttons/selectedButton/selectedButton";

interface Taste {
    id: number;
    name: string;
    nameRu: string;
    description: string;
    image: StaticImageData;
    category: string[];
}

interface TastesProps {
    allCategory: string[];
    tastes: Taste[];
    toggleCategory: (category: string) => void;
    clearCategory: () => void;
    activeCategories: string[];
    openTaste: (name: string) => void;
}

interface CategoryProps {
    allCategory: string[];
    toggleCategory: (category: string) => void;
    clearCategory: () => void;
    activeCategories: string[];
}

interface ContainerTastesProps {
    tastes: Taste[];
    openTaste: (name: string) => void;
}

const Tastes: React.FC<TastesProps> = ({
                                           allCategory,
                                           tastes,
                                           toggleCategory,
                                           clearCategory,
                                           activeCategories,
                                           openTaste
                                       }) => {
    return (
        <section className={styles.containerMain}>
            <ContainerCategory
                allCategory={allCategory}
                toggleCategory={toggleCategory}
                clearCategory={clearCategory}
                activeCategories={activeCategories}
            />
            <ContainerTastes tastes={tastes} openTaste={openTaste}/>
        </section>
    );
};

export default Tastes;

const ContainerCategory: React.FC<CategoryProps> = ({
                                                        allCategory,
                                                        toggleCategory,
                                                        activeCategories,
                                                        clearCategory
                                                    }) => (
    <div className={styles.containerCategories}>
        <button
            onClick={clearCategory}
            className={`${styles.buttonCategory} ${activeCategories.length === 0 ? styles.activeButton : ''}`}
        >
            все
        </button>
        {allCategory.map((category, i) => {
            const isActive = activeCategories.includes(category)
            return <SelectedButton
                key={i}
                text={category}
                isActive={isActive}
                handleClick={() => toggleCategory(category)}
            />
        })}
    </div>
);

const ContainerTastes: React.FC<ContainerTastesProps> = ({tastes, openTaste}) => (
    <div className={styles.containerTastes}>
        {tastes.map(taste => {
            return <article key={taste.id} className={styles.cardTaste} onClick={() => openTaste(taste.name)}>
                <div className={styles.categoriesBox}>
                    {taste.category.map((category, i) => {
                        return <div key={`${taste.id}_${i}`} className={styles.category}>
                            {category}
                        </div>
                    })}
                </div>
                <Image src={taste.image} alt={taste.name} className={styles.imageTaste}/>
                <div className={styles.infoTaste}>
                    <p className={styles.nameTaste}>{taste.name}</p>
                    <p className={styles.nameRuTaste}>{taste.nameRu}</p>
                    <p className={styles.descriptionTaste}>{taste.description}</p>
                    <button className={styles.buttonCard} onClick={() => openTaste(taste.name)}>подробнее...</button>
                </div>
            </article>
        })}
    </div>
)