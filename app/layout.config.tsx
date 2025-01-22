import { type DocsLayoutProps } from "fumadocs-ui/layout";
import { type HomeLayoutProps } from "fumadocs-ui/home-layout";
import { pageTree } from "@/app/source";

// shared configuration
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: "My learning journey",
  },
  links: [
    {
      text: "Repository",
      url: "https://github.com/duythenights/my-learning-journey",
    },
  ],
};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: pageTree,
};
