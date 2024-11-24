'use client';

import localFont from 'next/font/local';
import './globals.css';
import { ClerkLoaded, ClerkProvider, UserButton, useUser } from '@clerk/nextjs';
import SideBar from '@/components/SideBar';
import Sponsor from '@/components/Sponsor';
import TopBar from '@/components/TopBar';
import { ThemeProvider } from '@/context/ThemeContext';
import { useState } from 'react';
import SwitchToggle from '@/components/SwitchToggle';
import Button from '@/components/Button';
import SubScribeService from '@/components/SubScribeService';
import { ShiftingDropDown } from '@/components/ShiftingDropDown';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

export default function RootLayout({ children }) {
  //   const { theme, toggleTheme } = useContext(ThemeContext);
  const [theme, setTheme] = useState('light');

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} antialiased`}>
          <main>
            <div
              className={`${theme === 'light' ? 'bg-white' : 'bg-slate-700'}`}
            >
              <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                <div className="col-span-4 lg:col-span-3">
                  <SideBar theme={theme} />
                </div>
                <div className="col-span-4 lg:col-span-6">
                  <TopBar />
                  {/* <Services /> */}
                  <ShiftingDropDown theme={theme} />
                  {children}
                </div>
                <div className="col-span-4 lg:col-span-3">
                  <div className="flex justify-between items-center">
                    <>
                      <Button theme={theme} text="Sign in" />
                      <Button theme={theme} text="Sign up" />
                    </>
                    <SwitchToggle theme={theme} setTheme={setTheme} />
                  </div>
                  <SubScribeService />
                  <Sponsor />
                </div>
              </div>
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
