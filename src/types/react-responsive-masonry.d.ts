declare module 'react-responsive-masonry' {
    import * as React from 'react';

    export interface ResponsiveMasonryProps {
        children: React.ReactNode;
        columnsCountBreakPoints?: { [key: number]: number };
    }

    export interface MasonryProps {
        children: React.ReactNode;
        gutter?: string;
    }

    export const ResponsiveMasonry: React.FC<ResponsiveMasonryProps>;
    const Masonry: React.FC<MasonryProps>;

    export default Masonry;
}
