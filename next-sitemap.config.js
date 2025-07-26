module.exports = {
    siteUrl: 'https://lavalounge.ru',
    generateRobotsTxt: true,
    changefreq: 'weekly',
    priority: 1,
    robotsTxtOptions: {
        policies: [
            {userAgent: '*', allow: '/'},
        ],
    },
    additionalPaths: async () => {
        const dynamicRoutes = [];

        try {
            const response = await fetch('https://lavalounge.ru/api/partners');
            if (!response.ok) {
                console.error(`Failed to fetch partners: ${response.statusText}`);
                return dynamicRoutes;
            }

            const partners = await response.json();

            partners.data.forEach((partner) => {
                const url = partner.name.trim().replace(/\s+/g, '_');
                dynamicRoutes.push({
                    loc: `/partners/${url}`,
                    lastmod: new Date().toISOString(),
                    changefreq: 'daily',
                    priority: 0.8,
                });
            });

            const response2 = await fetch('https://lavalounge.ru/api/tastes/tastes_short');
            if (!response2.ok) {
                console.error(`Failed to fetch tastes: ${response2.statusText}`);
                return dynamicRoutes;
            }

            const tastes = await response2.json();

            tastes.data.forEach((taste) => {
                const urlPartner = taste.partner_name.trim().replace(/\s+/g, '_');
                const urlTaste = taste.name.trim().replace(/\s+/g, '_');
                dynamicRoutes.push({
                    loc: `/partners/${urlPartner}/${urlTaste}`,
                    lastmod: new Date().toISOString(),
                    changefreq: 'daily',
                    priority: 0.8,
                });
            });

        } catch (err) {
            console.error('Error fetching partners:', err);
        }

        return dynamicRoutes;
    },
};
