/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import About from './components/About';
import Reviews from './components/Reviews';
import OpeningHours from './components/OpeningHours';
import Location from './components/Location';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <OpeningHours />
      <Gallery />
      <Reviews />
      <Location />
      <Footer />
    </div>
  );
}
