'use client';

import React from 'react';
import { FaGripfire } from 'react-icons/fa';

interface FireRatingProps {
    value: number;
    size?: number;
}

const FireRating: React.FC<FireRatingProps> = ({
                                                   value = 0,
                                                   size = 24,
                                               }) => {
    const max = 10;
    const safeValue = Math.max(0, Math.min(value, max));
    const activeColor = '#e63946';
    const inactiveColor = '#7e7e7e';

    return (
        <div style={{ display: 'flex', gap: '4px', maxWidth: `${size * max}px` }}>
            {Array.from({ length: max }, (_, index) => (
                <FaGripfire
                    key={`fire_${index}`}
                    size={size}
                    style={{
                        fill: index < safeValue ? activeColor : inactiveColor,
                        color: index < safeValue ? activeColor : inactiveColor,
                    }}
                />
            ))}
        </div>
    );
};

export default FireRating;