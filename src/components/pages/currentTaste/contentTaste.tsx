import React from 'react';

import SectionWrapper from "@components/layout/sectionWrapper/sectionWrapper";
import Title from "@components/ui/title/title";

import InformationTaste from "./informationTaste/informationTaste";
import DescriptionTaste from "@components/pages/currentTaste/descriptionTaste/descriptionTaste";

interface Props {
    name: string;
}

const ContentTaste: React.FC<Props> = ({name}) => {
    return (
        <SectionWrapper needMarginTop={true}>
            <Title Tag={'h1'} text={name}/>
            <InformationTaste
                brand={'Black Burn'}
                name={name}
                name_ru={'Миндальное мороженое'}
                type={'Микс'}
                strength={8}
                smokiness={7}
                temp={5}
                category={['Десерты', 'Фрукты']}
            />
            <Title Tag={'h2'} text={'Описание'}/>
            <DescriptionTaste/>
        </SectionWrapper>
    );
};

export default ContentTaste;