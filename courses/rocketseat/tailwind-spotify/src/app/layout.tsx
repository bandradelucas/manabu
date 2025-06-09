import './globals.css'

export const metadata = {
  title: 'Spotify',
  description: 'Give Life Back To Music',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-zinc-900 text-zinc-50'>{children}</body>
    </html>
  )
}
