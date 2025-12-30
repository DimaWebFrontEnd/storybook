import styles from './Sidebar.module.css';
import { SidebarItem } from './SidebarItem';
import sidebarIcon from '../../assets/sidebar-icon.svg'
import homeIcon from '../../assets/house.svg'

interface SidebarProps {
   isOpen: boolean;
   onClose: () => void;
   setSidebarOpen: any;
}


export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, setSidebarOpen }) => {

   const items = [
      { id: '1', label: 'Dashboard', icon: homeIcon },
      {
         id: '2',
         label: 'Projects',
         children: [
            { id: '2-1', label: 'Project A' },
            { id: '2-2', label: 'Project B' },
         ],
      },
      { id: '3', label: 'Settings' },
   ];

   return (
      <>
         {isOpen && <div className={styles.overlay} onClick={onClose} />}
         <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
            <button
               onClick={() => setSidebarOpen(!isOpen)}
               style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 16, padding: '8px 16px', width: '40px', height: '40px', backgroundColor: "#F0F8FF", outline: 'none', border: 'none' }}
            >
               <img src={sidebarIcon} alt="Sidebar Toggle" />
            </button>
            {items.map((item) => (
               <SidebarItem key={item.id} {...item} />
            ))}
         </div>
      </>
   );
};



