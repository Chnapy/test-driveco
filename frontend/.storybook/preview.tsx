import type { Preview } from "@storybook/react";
import React from "react";
import { MainProviders } from "../src/main-providers";

export default {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <MainProviders>
        <Story />
      </MainProviders>
    ),
  ],
} satisfies Preview;
