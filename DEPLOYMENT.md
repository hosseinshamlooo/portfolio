# GitHub Pages Deployment Guide

## Quick Fix for Image Loading Issues

Your images weren't loading because GitHub Pages serves your site from a subdirectory (`/my-portfolio-aug2025/`), but your images were using absolute paths.

## What I Fixed

1. **Updated `next.config.ts`** with proper GitHub Pages configuration:

   - Added `output: 'export'` for static export
   - Set `basePath` and `assetPrefix` to your repository name
   - Enabled `unoptimized: true` for images (required for static export)
   - Set `distDir: 'out'` to match GitHub Actions workflow

2. **Updated `package.json`** with export script

## How to Deploy

1. **Commit and push your changes:**

   ```bash
   git add .
   git commit -m "Fix GitHub Pages deployment configuration"
   git push origin main
   ```

2. **GitHub Actions will automatically:**

   - Build your Next.js app
   - Export it as static files
   - Deploy to GitHub Pages

3. **Your site will be available at:**
   ```
   https://yourusername.github.io/my-portfolio-aug2025/
   ```

## Important Notes

- All images in the `public/` folder will be automatically available
- The `basePath` ensures all routes work correctly on GitHub Pages
- Images are unoptimized for static export compatibility
- The build output goes to the `out/` directory as expected by GitHub Actions

## Troubleshooting

If images still don't load:

1. Check that your repository name matches the `repoName` in `next.config.ts`
2. Ensure all images are in the `public/` folder
3. Use relative paths or let Next.js handle the paths automatically
4. Check the GitHub Actions logs for build errors

## Local Development

For local development, run:

```bash
npm run dev
```

The basePath is only applied in production, so local development works normally.
