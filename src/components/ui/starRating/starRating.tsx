'use client'

import React from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';

interface StarRatingProps {
    value: number; // Текущий рейтинг (например, 4.9)
    max?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10; // Максимальное количество звёзд (по умолчанию 5)
    size?: number; // Размер звёзд
    readonly?: boolean; // Только для чтения
    onChange?: (value: number) => void; // Обработчик изменения
}

const StarRating: React.FC<StarRatingProps> = ({
                                                   value = 0,
                                                   max = 5,
                                                   size = 24,
                                                   readonly = true,
                                                   onChange
                                               }) => {
    return (
        <div style={{ width: `${size * max}px` }}>
            <Rating
                style={{ maxWidth: `${size * max}px` }}
                value={value}
                onChange={onChange}
                readOnly={readonly}
                items={max}
                halfFillMode="svg"
            />
        </div>
    );
};

export default StarRating;
