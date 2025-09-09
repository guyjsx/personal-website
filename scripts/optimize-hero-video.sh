#!/usr/bin/env bash
set -euo pipefail

# Usage: scripts/optimize-hero-video.sh <video-url>
# - Downloads a scenic clip to public/hero-src.mp4
# - If ffmpeg is available, creates public/hero-bg.mp4 (1080p H.264) and poster public/hero-poster.jpg

URL=${1:-}
if [ -z "$URL" ]; then
  echo "Provide a video URL, e.g.: scripts/optimize-hero-video.sh https://example.com/mountains.mp4" >&2
  exit 1
fi

mkdir -p public/.sources

TMP_FILE=$(mktemp /tmp/hero-src.XXXXXX.mp4)
echo "Downloading clip..."
curl -L "$URL" -o "$TMP_FILE"

mv "$TMP_FILE" public/.sources/hero-src.mp4
echo "Saved source (gitignored): public/.sources/hero-src.mp4"

if command -v ffmpeg >/dev/null 2>&1; then
  echo "ffmpeg found; optimizing..."
  ffmpeg -y -i public/.sources/hero-src.mp4 -vf "scale='min(1920,iw)':'-2'" -c:v libx264 -preset veryfast -crf 23 -movflags +faststart -an public/hero-bg.mp4
  # Mobile-optimized variant (~720p) with higher CRF for smaller size
  ffmpeg -y -i public/.sources/hero-src.mp4 -vf "scale='min(1280,iw)':'-2'" -c:v libx264 -preset veryfast -crf 26 -movflags +faststart -an public/hero-bg-mobile.mp4
  ffmpeg -y -ss 00:00:01.000 -i public/hero-bg.mp4 -vframes 1 -q:v 2 public/hero-poster.jpg
  echo "Optimized video: public/hero-bg.mp4"
  echo "Mobile video:    public/hero-bg-mobile.mp4"
  echo "Poster image:    public/hero-poster.jpg"
else
  echo "ffmpeg not found; using original as hero video (may be larger)."
  cp public/.sources/hero-src.mp4 public/hero-bg.mp4
  cp public/.sources/hero-src.mp4 public/hero-bg-mobile.mp4
  echo "Place a poster image at public/hero-poster.jpg if desired."
fi

echo "Done. Set NEXT_PUBLIC_HERO_VIDEO=1 to enable video."
