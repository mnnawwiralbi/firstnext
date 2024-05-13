// src/pages/index.js atau di komponen page lain
import React from 'react';
import RootLayout from '@/app/Layout';

const HomePage = () => {
  return (
    <RootLayout>
      <div>Welcome to the Home Page</div>
    </RootLayout>
  );
}

export default HomePage;
