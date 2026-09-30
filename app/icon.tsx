import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: '#4f46e5', // bg-indigo-600 equivalent
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '8px',
          fontWeight: 700,
          fontFamily: 'sans-serif',
          boxShadow: '0 4px 6px -1px rgba(79, 70, 229, 0.4)',
        }}
      >
        RG
      </div>
    ),
    {
      ...size,
    }
  );
}