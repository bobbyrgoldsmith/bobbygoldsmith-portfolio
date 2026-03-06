import { ImageResponse } from 'next/og'

export const alt = 'Bobby R. Goldsmith — Technical Architect & Automation Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #0f172a 50%, #0a0a0a 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 28,
            background: 'linear-gradient(90deg, #06b6d4, #3b82f6)',
            backgroundClip: 'text',
            color: 'transparent',
            fontWeight: 700,
            marginBottom: 16,
          }}
        >
          BG
        </div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 700,
            color: 'white',
            marginBottom: 16,
          }}
        >
          Bobby R. Goldsmith
        </div>
        <div
          style={{
            fontSize: 28,
            background: 'linear-gradient(90deg, #06b6d4, #3b82f6)',
            backgroundClip: 'text',
            color: 'transparent',
            fontWeight: 600,
            marginBottom: 24,
          }}
        >
          Technical Architect & Automation Engineer
        </div>
        <div
          style={{
            fontSize: 20,
            color: '#94a3b8',
            maxWidth: 700,
            textAlign: 'center',
          }}
        >
          13+ years building automation, QA, and DevOps solutions
        </div>
      </div>
    ),
    { ...size }
  )
}
