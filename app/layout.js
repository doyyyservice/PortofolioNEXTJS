import './globals.css'

export const metadata = {
  title: 'Portfolio - Your Name',
  description: 'Full Stack Developer & Designer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
