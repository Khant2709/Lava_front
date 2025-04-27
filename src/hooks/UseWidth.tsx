'use client'

import React, {useState, useEffect, useContext, ReactNode} from 'react';

const WindowWidthContext = React.createContext<number | undefined>(undefined);

interface WindowWidthProviderProps {
    children: ReactNode;
}

const WindowWidthProvider: React.FC<WindowWidthProviderProps> = ({children}) => {
    const [width, setWidth] = useState<number | undefined>(undefined);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                const timeout = setTimeout(() => setWidth(window.innerWidth), 100);
                return () => clearTimeout(timeout);
            };

            setWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <WindowWidthContext.Provider value={width}>
            {children}
        </WindowWidthContext.Provider>
    );
};

function useWindowWidth(): number | undefined {
    const width = useContext(WindowWidthContext);
    return width ?? undefined;
    // return width === undefined ? 1024 : width;
}

export {WindowWidthProvider, useWindowWidth};