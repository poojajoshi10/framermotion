import { FC } from 'react';
import { motion } from 'framer-motion';
import styles from './Menu.module.css';

interface MenuProps {
  isOpen: boolean;
}

const Menu: FC<MenuProps> = ({ isOpen }) => {
  return (
    <div className={`${styles.menuContainer} ${isOpen ? 'open' : ''}`}>
      <ul className={styles.menuList}>
        <li className={styles.menuItem}>Portfolio</li>
        <li className={styles.menuItem}>About</li>
        <li className={styles.menuItem}>Stories</li>
        <li className={styles.menuItem}>Contact</li>
        <li className={styles.menuItem}>More</li>
      </ul>
    </div>
  );
};

export default Menu;
