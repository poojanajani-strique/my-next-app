'use client'

import { useSearchParams } from 'next/navigation'

export default function HomePage() {
  const searchParams = useSearchParams()
  const email = searchParams.get('email')

  const iframeUrl = email
    ? `https://ad-server-three.vercel.app/ad?email=${encodeURIComponent(email)}`
    : null

  return (
    <main>
      <h1>Welcome to the Homepage</h1>

      {iframeUrl ? (
        <iframe
          src={iframeUrl}
          title="Ad Slot"
          width="300"
          height="250"
          style={{ border: 'none', marginTop: '20px' }}
        />
      ) : (
        <p>No ad to show. Please include an email in the query param.</p>
      )}
    </main>
  )
}