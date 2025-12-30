import React, { useState } from 'react';
import styles from './Sidebar.module.css';

export interface SidebarItemProps {
  id: string;
  label: string;
  children?: SidebarItemProps[];
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ label, children }) => {
   
  const [open, setOpen] = useState(false);

  const hasChildren = children && children.length > 0;

  return (
    <div className={styles.item}>
      <div className={styles.label} onClick={() => hasChildren && setOpen(!open)}>
        {label} {hasChildren && <span>{open ? '▼' : '▶'}</span>}
      </div>
      {hasChildren && open && (
        <div className={styles.children}>
          {children.map((child) => (
            <SidebarItem key={child.id} {...child} />
          ))}
        </div>
      )}
    </div>
  );
};
