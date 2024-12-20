import Head from "next/head";

export default function CustomHead() {
  return (
      <div>
          <title>Layanan</title>
          <meta name="description" content="This is a description of my page" />
          <meta name="keywords" content="Next.js, React, SEO, Meta Tags" />
          <meta property="og:title" content="My Page Title for Social Media" />
          <meta property="og:description" content="Description for social media preview" />
          <meta property="og:image" content="https://example.com/og-image.jpg" />
          <meta property="og:url" content="https://example.com" />
          <link rel={"icon"} href={"https://indostock.id/img/logo-itho-header.png"} />
      </div>
  );
}