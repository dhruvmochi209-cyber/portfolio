import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dhruv Mochi | Portfolio',
    short_name: 'Dhruv Mochi',
    description: 'Senior Full Stack Developer specializing in React, Next.js, and modern web technologies.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      // You can add more icons here for PWA (e.g. 192x192, 512x512)
    ],
  };
}
