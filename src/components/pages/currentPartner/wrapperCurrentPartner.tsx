'use client'

import React, {useMemo, useState} from 'react';

import SectionWrapper from "@components/layout/sectionWrapper/sectionWrapper";
import Title from "@components/ui/title/title";
import ContainerDescription from "./containerDescription/containerDescription";
import Tastes from "./tastes/tastes";

import {useRouter} from "next/navigation";
import {transformNameToUrl} from "@utils/nameUrlTransform";
import {usePreloaderStop} from "@hooks/usePreloaderStop";
import {getFullPathImage} from "@utils/getFullPath";
import {CurrentPartnerModel} from "@myTypes/api/partnersAPI";
import {useClearSessionError} from "@hooks/useClearSessionError";
import {CategoryTobaccoModel} from "@myTypes/api/categoriesTobaccoAPI";


interface PartnerProps {
    currentPartner: CurrentPartnerModel,
    categoriesTobacco: CategoryTobaccoModel[]
}

const WrapperCurrentPartner: React.FC<PartnerProps> = ({currentPartner, categoriesTobacco}) => {
    useClearSessionError('partner');
    usePreloaderStop();

    const router = useRouter();
    const [activeCategories, setActiveCategories] = useState<number[]>([]);
    const [page, setPage] = useState<number>(1);

    const tastes = useMemo(() => {
        if (!currentPartner || !currentPartner.tastes?.length) return [];
        if (!activeCategories.length) return currentPartner.tastes;

        return currentPartner.tastes.filter((taste) => {
            if (!taste?.category) return false;

            return taste.category.some((categoryId) => activeCategories.includes(categoryId));
        })
    }, [activeCategories, currentPartner]);

    const hasMorePage = useMemo(() => {
        return tastes?.length > 20 * page;
    }, [tastes, page])

    // Наименование категорий по id для отображения в карточке
    const nameCategories = useMemo(() => {
        return categoriesTobacco.reduce<Record<number, string>>((acc, value) => {
            acc[value.id] = value.name_ru;
            return acc;
        }, {});
    }, [categoriesTobacco]);


    // При скроле отображать следующие 20 вкусов
    const nextPage = () => {
        if (hasMorePage) {
            setPage((prevPage) => prevPage + 1);
        }
    }

    const toggleCategory = (categoryId: number) => {
        const isActiveCategory = activeCategories.includes(categoryId);

        if (isActiveCategory) {
            const filteredCategory = activeCategories.filter(el => el !== categoryId);
            setActiveCategories(filteredCategory)
        } else {
            setActiveCategories([...activeCategories, categoryId])
        }
    };

    const clearCategory = () => {
        setActiveCategories([]);
        setPage(1);
    }

    const openTaste = (name: string) => {
        if (currentPartner) {
            router.push(`/partners/${transformNameToUrl(currentPartner.name)}/${transformNameToUrl(name)}`)
        }
    }

    if (!currentPartner) return null;

    return (
        <SectionWrapper needMarginTop={true}>
            <Title Tag={'h1'} text={currentPartner.name_ru}/>
            <ContainerDescription
                logo={getFullPathImage('m', currentPartner.image_path, currentPartner.logo_image_m)}
                description={currentPartner.description}
            />
            <Title Tag={'h2'} text={'Вкусы'}/>
            <Tastes
                allCategory={categoriesTobacco}
                tastes={tastes.slice(0, 20 * page)}
                toggleCategory={toggleCategory}
                clearCategory={clearCategory}
                activeCategories={activeCategories}
                openTaste={openTaste}
                nextPage={nextPage}
                hasMorePage={hasMorePage}
                nameCategories={nameCategories}
            />
        </SectionWrapper>
    );
};

export default WrapperCurrentPartner;