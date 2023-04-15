
import Navbar from './Navbar'
import Footer from './Footer'
import { useEffect, useState } from 'react'

export default function Layout({ children }) {
  const [bgImageLoaded, setBgImageLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.src = "/image/background.jpg";
    img.onload = () => {
      setBgImageLoaded(true);
    };
  }, []);
  return (
    <div className={`flex flex-col min-h-screen ${
      bgImageLoaded ? "" : "hidden"
      }`}>
      <Navbar className="max-w-screen"/>
      <main>{children}</main>
      <Footer />
    </div>
  )
}