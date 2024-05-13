// pages/index.js
import React from "react";

export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: 'front', // Tujuan pengalihan
      permanent: false, // Jika true, redirect permanen (HTTP 301), jika false, sementara (HTTP 302)
    },
  };
};

export default function Index() {
  // Karena ini server-side redirect, tidak perlu render konten apa pun.
  return null;
}
