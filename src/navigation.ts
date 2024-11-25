import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Homes',
      links: [
        {
          text: 'SaaS',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Startup',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Personal',
          href: getPermalink('/homes/personal'),
        },
      ],
    },
    {
      text: 'Pages',
      links: [
        {
          text: 'Features (Anchor Link)',
          href: getPermalink('/#features'),
        },
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Landing',
      links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink(
            'get-started-website-with-astro-tailwind-css',
            'post'
          ),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: 'Widgets',
      href: '#',
    },
  ],
  actions: [{ text: 'Shop', href: 'https://shop.jasonk.io', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Home', href: '/' },
        { text: 'Contact', href: '/contact' },
        { text: 'Pricing', href: '/pricing' },
        { text: 'Services', href: '/services' },
        { text: 'Shop', href: 'https://shop.jasonk.io' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    {
      ariaLabel: 'X',
      icon: 'tabler:brand-bluesky',
      href: 'https://jasonkumpf.bsky.social',
    },
    {
      ariaLabel: 'Instagram',
      icon: 'tabler:brand-instagram',
      href: 'https://www.instagram.com/kumpf.jason',
    },
    {
      ariaLabel: 'Facebook',
      icon: 'tabler:brand-facebook',
      href: 'https://www.facebook.com/jason.kumpf',
    },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    {
      ariaLabel: 'Github',
      icon: 'tabler:brand-github',
      href: 'https://github.com/contd/',
    },
  ],
  footNote: `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64" {...props} style="display:inline;padding-right:.5rem">
      <circle cx="30.3" cy="36.7" r="23.1" fill="#7d8993" />
      <circle cx="30.3" cy="38.3" r="20.2" fill="#5b636b" />
      <path fill="#fff" d="M31.6 33.7c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4V18.4c0-.8.6-1.4 1.4-1.4s1.4.6 1.4 1.4z" />
      <path fill="#94989b" d="M63.4 43.4c1.1-6.1.6-12.5-1.6-18.3s-6.1-11-11.2-14.7c-5-3.7-11.2-5.9-17.5-6.2c-6.3-.2-12.6 1.4-18 4.8c-5.3 3.3-9.7 8.3-12.3 14.1S-.6 35.5.4 41.7c.7 4.3 2.3 8.4 4.7 12.1h3.2C6 50.4 4.5 46.6 3.8 42.6c-.9-5.3-.3-10.8 1.6-15.7c2-5 5.4-9.3 9.7-12.4s9.5-4.9 14.7-5c5.3-.2 10.5 1.3 14.9 4.1s7.9 7 9.9 11.8c2.1 4.8 2.6 10.2 1.7 15.3c-.9 5-3.2 9.5-6.7 13.2h9.9c1.9-3.2 3.2-6.8 3.9-10.5" />
    </svg>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://jasonk.io/"> jasonk.io</a> · All rights reserved.
  `,
};
