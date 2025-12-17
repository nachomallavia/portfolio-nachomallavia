# Video Files

Place your optimized WebM video files in this directory.

## Expected Files

- `sixth-sense-pay.webm` - Sixth Sense Pay demo video
- `bafi.webm` - Bafi demo video
- `ecolatina.webm` - Club Ecolatina demo video
- `tennis-camp.webm` - Advanced Tennis Camp demo video

## Optimization Guide

### Using FFmpeg (Command Line)

**For 720p (recommended):**
```bash
ffmpeg -i input.webm -vf scale=1280:720 -c:v libvpx-vp9 -b:v 500k -an output.webm
```

**For 480p (smaller file size):**
```bash
ffmpeg -i input.webm -vf scale=854:480 -c:v libvpx-vp9 -b:v 300k -an output.webm
```

**From screen recording (any format):**
```bash
ffmpeg -i recording.mp4 -vf scale=1280:720 -c:v libvpx-vp9 -b:v 500k -an output.webm
```

### Recommended Settings

- **Resolution**: 1280x720 or 854x480
- **Bitrate**: 300-500 kbps
- **Frame rate**: 24-30 fps
- **Audio**: Remove audio track (use `-an` flag)
- **Codec**: VP9 (libvpx-vp9)

### Target File Size

With these settings, you should achieve:
- **1-2 MB** per 30 seconds of video
- **2-4 MB** per minute of video

### Alternative Tools

- **Online**: [CloudConvert](https://cloudconvert.com/webm-converter)
- **Desktop**: [HandBrake](https://handbrake.fr/)

## Notes

- Videos will autoplay, loop, and be muted
- Videos use lazy loading for better performance
- WebM format provides excellent compression with good quality


