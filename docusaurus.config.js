/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "React and Nodejs Boilerplate",
  tagline: "React and Nodejs Boilerplate",
  url: "https://saasstarterkit.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Saas Starterkit",
  projectName: "Saas-Starterkit",
  themeConfig: {
    navbar: {
      title: "Saas Starter Kit",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
        href: "https://www.saasstarterkit.com",
      },
      items: [
        {
          href: "https://github.com/Saas-Starter-Kit",
          className: "header-github-link",
          position: "right",
        },
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/Saas-Starter-Kit/ssk_docs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
}
