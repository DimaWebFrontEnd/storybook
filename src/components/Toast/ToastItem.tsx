import styles from './Toast.module.css';
import closeIcon from '../../assets/close-icon.svg';


type ToastType = 'success' | 'failed';

interface ToastItemProps {
   type: ToastType;
   setIsVisible?: (visible: boolean) => void;
}


const ToastItem: React.FC<ToastItemProps> = ({ type, setIsVisible }) => {

   return (
      <div className={styles.toast}>

         {type === 'success' && (<div className={styles.success}>
            <p>Login successful!</p>
            <img src={closeIcon} alt="Close" className={styles.closeIcon} onClick={() => setIsVisible && setIsVisible(false)} />
         </div>)}

         {type === 'failed' && (<div className={styles.failed}>
            <p>Please Enter Password!</p>
            <img src={closeIcon} alt="Close" className={styles.closeIcon} onClick={() => setIsVisible && setIsVisible(false)} />
         </div>)}

      </div>
   )
}

export default ToastItem
