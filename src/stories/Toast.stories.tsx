import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ToastItem from '../components/Toast/ToastItem';

const meta: Meta<typeof ToastItem> = {
  title: 'Feedback/Toast',
  component: ToastItem,
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['success', 'failed'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ToastItem>;

/* ================= TEMPLATE ================= */

const ToastWrapper = ({ type }: { type: 'success' | 'failed' }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {isVisible && (
        <ToastItem type={type} setIsVisible={setIsVisible} />
      )}
    </>
  );
};

/* ================= STORIES ================= */

export const Success: Story = {
  render: () => <ToastWrapper type="success" />,
};

export const Error: Story = {
  render: () => <ToastWrapper type="failed" />,
};

export const Interactive: Story = {
  args: {
    type: 'success',
  },
  render: ({ type }) => <ToastWrapper type={type} />,
};
