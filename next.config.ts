import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    transpilePackages: ['swiper'],
    devIndicators: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lavalounge.ru',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
