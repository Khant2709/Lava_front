import React from 'react';

import SectionWrapper from "@components/layout/sectionWrapper/sectionWrapper";
import FormBooking from "@components/forms/formBooking/formBooking";

const ContainerFormBooking: React.FC = () => {
    return (
        <SectionWrapper>
            <FormBooking/>
        </SectionWrapper>
    );
};

export default ContainerFormBooking;