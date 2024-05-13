// src/app/layout/RootLayout.js
import React from 'react';

export default function RootLayout({   children,
}: {
  children: React.ReactNode
} ) {
  return (
    <div>
      {/* Contoh: Header yang persisten di semua halaman */}
      <header>
        <h1>Header of the Application</h1>
      </header>

      {/* Konten utama yang berubah-ubah berdasarkan rute */}
      <main>{children}</main>

      {/* Footer yang persisten di semua halaman */}
      <footer>
        <p>© 2024 My Website</p>
      </footer>
    </div>
  );
}
