"use client"; // This is a client component 👈🏽

import { useState } from 'react';
import Header from '../app/components/Header'
import Menu from '../app/components/Menu';

export default function Home() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <>
      <Header />
      {/* <Menu isOpen={isMenuOpen} /> */}
    </>
  );
}
