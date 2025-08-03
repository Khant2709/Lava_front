'use client'

import React, {useMemo} from 'react';
import {useSearchParams} from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import SectionWrapper from "@components/layout/sectionWrapper/sectionWrapper";
import Title from "@components/ui/title/title";
import MenuSlider from "@components/pages/menu/menuSlider/menuSlider";

import {usePreloaderStop} from "@hooks/usePreloaderStop";
import {useClearSessionError} from "@hooks/useClearSessionError";

import {MenuFullModel} from "@myTypes/api/menuAPI";

import styles from './wrapperMenu.module.scss'
import {PromotionsModel} from "@myTypes/api/generalDataTypes";
import image_h from '@assets/menu/hookah.webp';
import image_s from '@assets/menu/sweet.webp';
import image_l from '@assets/menu/lemonade.webp';


interface Props {
    menu: MenuFullModel[];
    promotions: PromotionsModel[];
}

const WrapperMenu: React.FC<Props> = ({menu, promotions}) => {
    useClearSessionError('menu');
    usePreloaderStop();
    const params = useSearchParams();
    console.log(promotions)

    const initialSlideIndex = useMemo(() => (params.get('id') ?? 0), [params])

    return (
        <SectionWrapper needMarginTop={true}>
            <Title Tag={'h1'} text={'Меню кальянной Лава'}/>
            <MenuSlider menu={menu} initialSlideIndex={Number(initialSlideIndex)}/>
            <Title Tag={'h2'} text={'Акции и новинки Lava Lounge'}/>
            <div className={styles.promoContainer}>
                {
                    promotions.map((promo) => {
                        const image = {
                            1: image_h,
                            2: image_s,
                            3: image_l,
                        }

                        return (
                            <article className={styles.cardPromo} key={promo.id}>
                                <div className={styles.wrapperImage}>
                                    <Image src={image[promo.id]} alt={''} fill className={styles.image}/>
                                    <div className={styles.shadow}/>
                                </div>
                                <div className={styles.content}>
                                    <p className={styles.titleCard}>{promo.subtitle}</p>
                                    <p className={styles.descriptionCard}>{promo.description}</p>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
            <p className={styles.text}>
                <Link href={'/'}>Lava Lounge</Link> — это не просто кальянная, а пространство для душевного отдыха в
                уютной атмосфере. Наше меню включает ароматные кальяны от лучших брендов табака, душистые чаи,
                освежающие авторские лимонады и изысканные десерты. Хотите провести вечер в тишине или с друзьями — мы
                подготовили всё для вашего комфорта: мягкий свет, лаунж-музыка и заботливый сервис.
                Заказывайте кальян по акции до 17:00 или пробуйте премиальные вкусы — наслаждайтесь густым дымом и
                гармонией вкуса.
                <br/><strong><Link href={'/'}>Lava Lounge</Link> — идеальное место, чтобы покурить кальян в
                Краснодаре и расслабиться после насыщенного дня.</strong>
            </p>
        </SectionWrapper>
    );
};

export default WrapperMenu;