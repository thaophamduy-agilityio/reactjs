import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    width: 200,
    book: {
      title: 'Angels and demons',
      author: 'Stuart Matt',
      imageMedium: 'https://picsum.photos/400/400',
      imageSmall: 'https://picsum.photos/200/200',
      published: '2021',
    },
  },
};
