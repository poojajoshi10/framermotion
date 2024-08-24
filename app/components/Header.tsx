import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Custom cursor logic
  const [cursorStyle, setCursorStyle] = useState({ left: 0, top: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorStyle({ left: e.clientX, top: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const menuItems = ["Portfolio", "About", "Stories", "Contact", "More"];

  return (
    <div className={styles.container}>
      {/* Top-left image icon */}
      <a href="/" className={styles.iconLink}>
        <img
          src="http://clapat-themes.com/wordpress/montoya/wp-content/themes/montoya/images/logo-white.png"
          alt="Montoya Logo"
          className={styles.icon}
        />
      </a>

      {/* Conditional rendering based on menu state */}
      <AnimatePresence>
        {!menuOpen ? (
          <motion.div
            className={styles.textContainer}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {"MONTOYA".split("").map((letter, index) => (
              <motion.span
                key={index}
                className={styles.letter}
                whileHover={{ scaleY: 1.5 }}
                transition={{ duration: 0.3 }}
                initial="hidden"
          animate="show"
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className={styles.menu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {menuItems.map((item, index) => (
              <motion.li
                key={index}
                className={styles.menuItem}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item}
              </motion.li>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Burger Menu */}
      <div className={styles.menuContainer} onClick={toggleMenu}>
        <span className={styles.menuLabel}>Menu</span>
        <div className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}>
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </div>
      </div>

      <div
        className={styles.customCursor}
        style={{
          left: `${cursorStyle.left}px`,
          top: `${cursorStyle.top}px`,
        }}
      />
    </div>
  );
};

export default Header;
