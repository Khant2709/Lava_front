import g1 from '@assets/gallary/g1.webp';
import g2 from '@assets/gallary/g2.webp';
import g3 from '@assets/gallary/g3.webp';
import {StaticImageData} from "next/image";


const testPhoto = [g1, g2, g3, g1, g2, g3]

const conditions = [
    'Депозитные условия (отдельной оплаты за комнаты нет).',
    'Минимальный заказ в течении первых 2-х часов 1300р',
    'В течении каждых последующих 2-х часов минимальный дозаказ на 1000р.',
    'Минимально 1 кальян на 4х человек.',
    'Курение сигарет в комнате ЗАПРЕЩЕНО!',
]

interface roomData {
    id: 1 | 2 | 3 | 4 | 5 | 6 | 7;
    name: string;
    max_people: number;
    description: string;
    comfort: string[];
    conditions: string[];
    images: StaticImageData[];
}

export const roomsData: roomData[] = [
    {
        id: 1,
        name: 'VIP 1',
        max_people: 2,
        description: 'Уютная комната с современным дизайном, идеально подходящий для комфортного отдыха. Уютная комната с современным дизайном, идеально подходящий для комфортного отдыха.',
        comfort: ['TV', 'PS-4', 'Кондиционер'],
        conditions: conditions,
        images: testPhoto
    },
    {
        id: 2,
        name: 'VIP 2',
        max_people: 2,
        description: 'Уютная комната с современным дизайном, идеально подходящий для комфортного отдыха. Уютная комната с современным дизайном, идеально подходящий для комфортного отдыха.',
        comfort: ['TV', 'PS-4', 'Кондиционер'],
        conditions: conditions,
        images: testPhoto
    },
    {
        id: 3,
        name: 'VIP 3',
        max_people: 2,
        description: 'Уютная комната с современным дизайном, идеально подходящий для комфортного отдыха. Уютная комната с современным дизайном, идеально подходящий для комфортного отдыха.',
        comfort: ['TV', 'PS-4', 'Кондиционер'],
        conditions: conditions,
        images: testPhoto
    },
    {
        id: 4,
        name: 'VIP 4',
        max_people: 2,
        description: 'Уютная комната с современным дизайном, идеально подходящий для комфортного отдыха. Уютная комната с современным дизайном, идеально подходящий для комфортного отдыха.',
        comfort: ['TV', 'PS-4', 'Кондиционер'],
        conditions: conditions,
        images: testPhoto
    },
    {
        id: 5,
        name: 'VIP 5',
        max_people: 2,
        description: 'Уютная комната с современным дизайном, идеально подходящий для комфортного отдыха. Уютная комната с современным дизайном, идеально подходящий для комфортного отдыха.',
        comfort: ['TV', 'PS-4', 'Кондиционер'],
        conditions: conditions,
        images: testPhoto
    },
    {
        id: 6,
        name: 'VIP 6',
        max_people: 2,
        description: 'Уютная комната с современным дизайном, идеально подходящий для комфортного отдыха. Уютная комната с современным дизайном, идеально подходящий для комфортного отдыха.',
        comfort: ['TV', 'PS-4', 'Кондиционер'],
        conditions: conditions,
        images: testPhoto
    },
    {
        id: 7,
        name: 'VIP 7',
        max_people: 2,
        description: 'Уютная комната с современным дизайном, идеально подходящий для комфортного отдыха. Уютная комната с современным дизайном, идеально подходящий для комфортного отдыха.',
        comfort: ['TV', 'PS-4', 'Кондиционер'],
        conditions: conditions,
        images: testPhoto
    },
];