import React from 'react';
import {urlToReadableName} from "@utils/nameUrlTransform";
import ContentTaste from "@components/pages/currentTaste/contentTaste";

interface Props {
    params: Promise<{ taste: string }>;
}

const CurrentTastePage = async ({params}: Props) => {
    const resolvedParams = await params;
    const nameTaste = urlToReadableName(resolvedParams.taste);
    //Сделать получение данных конкретного вкуса и передача в доч компонент


    return (
        <ContentTaste name={nameTaste}/>
    );
};

export default CurrentTastePage;