import React from "react";

export default {
  page: {
    title: "LightUP’s documentation",
    description:
      "Get set up in minutes to build any projects in hours instead of weeks.",
  },
  carousel: [
    {
      backgroundImgSrc:
        require("@site/static/img/assets/home/carousel-background--cloud.png")
          .default,
      variant: "cloud",
      title: "Strapi Cloud",
      description: (
        <>
          {"Learn more on the "}
          <a href="https://strapi.io/cloud" target="_blank">
            product page
          </a>
          {", or start a "}
          <a href="https://cloud.strapi.io/" target="_blank">
            free trial
          </a>{" "}
          today!
        </>
      ),
      button: {
        label: "Strapi Cloud docs",
        decorative: "☁️",
        to: "/cloud/intro",
      },
    },
    {
      title: "Can’t wait to use Strapi?",
      description: (
        <>
          {"If demos are more your thing, we have a "}
          <a href="https://youtu.be/h9vETeRiulY" target="_blank">
            video demo
          </a>
          {", or you can request a "}
          <a href="https://strapi.io/demo" target="_blank">
            live demo
          </a>
          !
        </>
      ),
      button: {
        label: "Quick start",
        decorative: "🚀",
        to: "/dev-docs/quick-start",
      },
    },
  ],
  categories: [
    {
      cardLink: "/dev-docs/intro",
      cardTitle: "Developer Documentation",
      cardDescription:
        "All you need to get your project up-and-running, and become a Strapi expert",
      cardImgSrc: require("@site/static/img/assets/home/preview--dev-docs.jpg")
        .default,
      linksIconSrc: require("@site/static/img/assets/icons/code.svg").default,
      linksIconColor: "green",
      links: [
        {
          label: "Intro guides",
          to: "/dev-docs/intro",
        },

        {
          label: "REST API",
          to: "/dev-docs/api/rest",
        },
        {
          label: "GraphQL API",
          to: "/dev-docs/api/graphql",
        },
      ],
    },
  ],

  /** Help us to improve the documentation */
  huitd: {
    label: "Help us improve the documentation",
    href: "https://github.com/HPhucDev/light-up-documents",
  },
};
