import "./styles/globals.css";
import Meta from "./components/Meta";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Business Agency Website",
  description: "Professional business agency website built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Meta title={metadata.title} description={metadata.description} />
      </head>
      <body className="font-sans bg-gray-50 text-gray-800">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
