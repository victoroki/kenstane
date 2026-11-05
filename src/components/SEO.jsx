import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords, image, type = 'website' }) => {
    const location = useLocation();
    const defaultTitle = "Kenstane Energy | Solar & Renewable Energy Solutions Kenya";
    const defaultDescription = "Kenstane Energy provides solar panels, renewable energy solutions and installations across Kenya. Africa's premium power generation training and consultancy partner.";
    const defaultKeywords = "Solar, Renewable Energy, Kenya, Energy Training, Power Generation, Risk Engineering, Kenstane Energy";
    
    const baseUrl = 'https://www.kenstaneenergy.co.ke';
    const canonicalUrl = `${baseUrl}${location.pathname}`;
    const currentTitle = title ? `${title} | Kenstane Energy` : defaultTitle;
    const currentDescription = description || defaultDescription;

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Kenstane Energy Ltd",
        "url": baseUrl,
        "logo": `${baseUrl}/logo.png`,
        "description": "Africa's premium power generation training and consultancy partner, bridging critical skills gaps with industry-driven programs and risk engineering expertise.",
        "foundingDate": "2020",
        "areaServed": {
            "@type": "Country",
            "name": "Kenya"
        },
        "serviceType": ["Renewable Energy Training", "Risk Engineering", "Solar Installation", "Power Systems Consultancy"],
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "info@kenstaneenergy.co.ke"
        },
        "sameAs": [
            "https://www.linkedin.com/company/kenstane-energy",
            "https://twitter.com/kenstaneenergy"
        ]
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Kenstane Energy Ltd",
        "image": `${baseUrl}/logo.png`,
        "url": baseUrl,
        "telephone": "+254700000000",
        "email": "info@kenstaneenergy.co.ke",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "KE",
            "addressRegion": "Nairobi"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-1.2921",
            "longitude": "36.8219"
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "17:00"
        },
        "priceRange": "$$"
    };

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{currentTitle}</title>
            <meta name="description" content={currentDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <meta name="author" content="Kenstane Energy Ltd" />
            <link rel="canonical" href={canonicalUrl} />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={currentTitle} />
            <meta property="og:description" content={currentDescription} />
            <meta property="og:image" content={image ? `${baseUrl}${image}` : `${baseUrl}/logo.png`} />
            <meta property="og:site_name" content="Kenstane Energy" />
            <meta property="og:locale" content="en_KE" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={currentTitle} />
            <meta name="twitter:description" content={currentDescription} />
            <meta name="twitter:image" content={image ? `${baseUrl}${image}` : `${baseUrl}/logo.png`} />

            {/* Additional SEO */}
            <meta name="theme-color" content="#059669" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="apple-mobile-web-app-title" content="Kenstane Energy" />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(localBusinessSchema)}
            </script>
        </Helmet>
    );
};

export default SEO;

