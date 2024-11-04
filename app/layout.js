export const metadata = {
  title: 'JobSpace',
  description: 'Generated by create next app',
};

// Import and use your RootLayout as a child here without 'use client'
import RootLayout from './RootLayout';

export default function Layout({ children }) {
  return <RootLayout>{children}</RootLayout>;
}