import { useState, useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import { RootLayout } from '@/layouts/RootLayout';
import { Hero } from '@/sections/Hero';
import { Projects } from '@/sections/Projects';
import { About } from '@/sections/About';
import { Experience } from '@/sections/Experience';
import { Contact } from '@/sections/Contact';
import { NotFound } from '@/pages/NotFound';

function App() {
  const [pathname, setPathname] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname;
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // 404 Route handling for unknown paths
  if (pathname !== '/' && pathname !== '') {
    return <NotFound />;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        syncTouch: false,
      }}
    >
      <RootLayout>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Contact />
      </RootLayout>
    </ReactLenis>
  );
}

export default App;
