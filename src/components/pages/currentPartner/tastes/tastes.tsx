import React from 'react';

import styles from './tastes.module.scss';
import Image from "next/image";
import SelectedButton from "@components/ui/buttons/selectedButton/selectedButton";
import {getFullPathImage} from "@utils/getFullPath";
import {CategoryTobaccoModel} from "@myTypes/api/categoriesTobaccoAPI";
import {TasteModel} from "@myTypes/api/tastesAPI";
import SecondaryButton from "@components/ui/buttons/secondaryButton/secondaryButton";

interface TastesProps {
    allCategory: CategoryTobaccoModel[];
    tastes: TasteModel[];
    toggleCategory: (categoryId: number) => void;
    clearCategory: () => void;
    activeCategories: number[];
    openTaste: (name: string) => void;
    nextPage: () => void;
    hasMorePage: boolean;
    nameCategories: { [key: number]: string };
}

interface CategoryProps {
    allCategory: CategoryTobaccoModel[];
    toggleCategory: (categoryId: number) => void;
    clearCategory: () => void;
    activeCategories: number[];
}

interface ContainerTastesProps {
    tastes: TasteModel[];
    openTaste: (name: string) => void;
    nameCategories: { [key: number]: string };
}

const Tastes: React.FC<TastesProps> = ({
                                           allCategory,
                                           tastes,
                                           toggleCategory,
                                           clearCategory,
                                           activeCategories,
                                           openTaste,
                                           nextPage,
                                           hasMorePage,
                                           nameCategories
                                       }) => {
    return (
        <section className={styles.containerMain}>
            <ContainerCategory
                allCategory={allCategory}
                toggleCategory={toggleCategory}
                clearCategory={clearCategory}
                activeCategories={activeCategories}
            />
            <ContainerTastes tastes={tastes} openTaste={openTaste} nameCategories={nameCategories}/>
            {hasMorePage && <SecondaryButton text={'Показать еще'} handleClick={nextPage}/>}
        </section>
    );
};

export default Tastes;

const ContainerCategory: React.FC<CategoryProps> = ({
                                                        allCategory,
                                                        toggleCategory,
                                                        activeCategories,
                                                        clearCategory,
                                                    }) => (
    <div className={styles.containerCategories}>
        <button
            onClick={clearCategory}
            className={`${styles.buttonCategory} ${activeCategories.length === 0 ? styles.activeButton : ''}`}
        >
            все
        </button>
        {allCategory.map((category) => {
            const isActive = activeCategories.includes(category.id)
            return <SelectedButton
                key={category.id}
                text={category.name_ru}
                isActive={isActive}
                handleClick={() => toggleCategory(category.id)}
            />
        })}
    </div>
);

const ContainerTastes: React.FC<ContainerTastesProps> = ({tastes, openTaste, nameCategories}) => (
    <div className={styles.containerTastes}>
        {tastes.map(taste => {
            return <article key={taste.id} className={styles.cardTaste} onClick={() => openTaste(taste.name)}>
                {taste?.category &&
                <div className={styles.categoriesBox}>
                    {taste.category.map((categoryId) => {

                        return <div key={`${nameCategories[categoryId]}`} className={styles.category}>
                            {nameCategories[categoryId]}
                        </div>
                    })}
                </div>
                }
                <div className={styles.wrapperContent}>
                    <Image src={getFullPathImage('m', taste.image_path, taste.image_name_m)}
                           alt={taste.name}
                           className={styles.imageTaste}
                           width={304}
                           height={304}
                    />
                    <div className={styles.infoTaste}>
                        <p className={styles.nameTaste}>{taste.name}</p>
                        <p className={styles.nameRuTaste}>{taste.name_ru}</p>
                        <p className={styles.descriptionTaste}>{taste.description_company}</p>
                    </div>
                </div>
                <button className={styles.buttonCard} onClick={() => openTaste(taste.name)}>подробнее...</button>
            </article>
        })}
    </div>
)