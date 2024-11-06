// layouts/MainLayout.tsx
import React, { ReactNode } from 'react';
import Sidebar from  '../composants/Sidebar';
import Footer from '../composants/Footer';

interface MainLayoutProps {
    children: ReactNode;
  }

  const Layout = ({ children }: MainLayoutProps) => {
    return (
        <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flex: 1 }}>
                <Sidebar />
                
                <main style={{ flex: 1, padding: '20px' }}>
                    {children}
                </main>
            </div>
            
            <Footer />
        </div>
    );
};

export default Layout;
