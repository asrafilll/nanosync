import "@/styles/globals.css";

export const metadata = {
  title: "Eventmakers - Nanosync",
  description: "Find best events in your place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
