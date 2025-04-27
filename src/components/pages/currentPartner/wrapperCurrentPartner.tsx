'use client'

import React, {useMemo, useState} from 'react';

import SectionWrapper from "@components/layout/sectionWrapper/sectionWrapper";
import Title from "@components/ui/title/title";
import ContainerDescription from "./containerDescription/containerDescription";
import Tastes from "./tastes/tastes";

import {allCategory} from "@components/pages/currentPartner/devData";
import {StaticImageData} from "next/image";
import {useRouter} from "next/navigation";
import {transformNameToUrl} from "@utils/nameUrlTransform";


interface Taste {
    id: number;
    name: string;
    nameRu: string;
    description: string;
    image: StaticImageData;
    category: string[];
}

interface PartnerProps {
    partnerData: {
        id: number;
        name: string;
        name_ru: string;
        description: string;
        img: StaticImageData;
        tastes: Taste[];
    } | undefined;
}

const WrapperCurrentPartner: React.FC<PartnerProps> = ({partnerData}) => {
    const router = useRouter();
    const [activeCategories, setActiveCategories] = useState<string[]>([]);

    const toggleCategory = (category: string) => {
        const isActiveCategory = activeCategories.includes(category);

        if (isActiveCategory) {
            const filteredCategory = activeCategories.filter(el => el !== category);
            setActiveCategories(filteredCategory)
        } else {
            setActiveCategories([...activeCategories, category])
        }
    };

    const clearCategory = () => {
        setActiveCategories([])
    }

    const tastes = useMemo(() => {
        if (!partnerData) return [];
        if (!activeCategories.length) return partnerData.tastes;

        return partnerData.tastes.filter(taste => {
            return taste.category.some(category => activeCategories.includes(category));
        })
    }, [activeCategories, partnerData]);

    const openTaste = (name: string) => {
        if (partnerData) {
            router.push(`/partners/${partnerData.name}/${transformNameToUrl(name)}`)
        }
    }

    if (!partnerData) return null;

    return (
        <SectionWrapper needMarginTop={true}>
            <Title Tag={'h1'} text={`${partnerData.name} (${partnerData.name_ru})`}/>
            <ContainerDescription logo={partnerData.img} description={partnerData.description}/>
            <Title Tag={'h2'} text={'Вкусы'}/>
            <Tastes
                allCategory={allCategory}
                tastes={tastes}
                toggleCategory={toggleCategory}
                clearCategory={clearCategory}
                activeCategories={activeCategories}
                openTaste={openTaste}
            />
        </SectionWrapper>
    );
};

export default WrapperCurrentPartner;