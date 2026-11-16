// src/consts.ts
export const SITE_TITLE = 'Brundlefly';
export const SITE_TAGLINE = "Shannon's Astro Boilerplate";
export const SITE_MENU = [
    { name: "Home", href: "/" },
    {
        name: "About Us",
        href: "/about",
        children: [
            { name: "Our Offerings", href: "/about/offerings" },
            { name: "Our Team", href: "/about/team" },
            { name: "Our Clients", href: "/about/clients" },
        ],
    },
    { name: "Our Work", href: "/our-work" },
    { name: "Contact Us", href: "/contact" },
];
