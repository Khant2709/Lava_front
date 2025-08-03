import React from 'react';
import SectionWrapper from "@components/layout/sectionWrapper/sectionWrapper";
import PageEdit from "@components/ui/pageEdit/pageEdit";

const WrapperCurrentArticle = () => {
    return (
        <SectionWrapper needMarginTop={true}>
            <PageEdit/>
        </SectionWrapper>
    );
};

export default WrapperCurrentArticle;