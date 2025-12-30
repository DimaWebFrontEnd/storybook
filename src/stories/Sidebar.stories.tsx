import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from '../components/SidebarMenu/Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'Navigation/Sidebar',
  component: Sidebar,
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

/* ================= WRAPPER ================= */

const SidebarWrapper: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Sidebar
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        setSidebarOpen={setIsOpen}
      />
    </>
  );
};

/* ================= STORIES ================= */

export const Default: Story = {
  render: () => <SidebarWrapper />,
};

export const Opened: Story = {
  render: () => (
    <Sidebar
      isOpen={true}
      onClose={() => {}}
      setSidebarOpen={() => {}}
    />
  ),
};
