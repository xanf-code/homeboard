/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  env: {
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    SPOTIFY_REFRESH_TOKEN: process.env.SPOTIFY_REFRESH_TOKEN,
    MUSIC_PLAYLIST_ID: process.env.MUSIC_PLAYLIST_ID,
    PODCAST_PLAYLIST_ID: process.env.PODCAST_PLAYLIST_ID,
    KAVACH_URL: process.env.KAVACH_URL,
    WEATHER_URL: process.env.WEATHER_URL,
    HINATA_URL: process.env.HINATA_URL,
  },
  images: {
    domains: ["i.scdn.co"],
  },
};

module.exports = nextConfig;
