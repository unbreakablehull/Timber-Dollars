# Deployment Guide for Timber Dollar Holdings Frontend

## Quick Deploy

To deploy updates to your live site, simply run:

```bash
./deploy.sh
```

This will:
1. Build the production version of your site
2. Upload all files to AWS S3
3. Invalidate the CloudFront cache (takes 1-2 minutes)
4. Your changes will be live at https://www.timberdollarholdings.com

## What Gets Deployed

- All files from the `dist/` folder (created by `npm run build`)
- Static assets (JS, CSS, images) are cached for 1 year
- `index.html` is never cached (allows instant updates)

## Deployment Details

### AWS Resources
- **S3 Bucket:** timber-dollar-holdings-frontend
- **CloudFront Distribution ID:** E1A30ATWO0VBD3
- **Region:** us-east-1

### URLs
- **Primary:** https://www.timberdollarholdings.com (after DNS setup)
- **Root redirect:** https://timberdollarholdings.com → www (after DNS setup)
- **CloudFront:** https://d2khcze84sd15f.cloudfront.net

## Making Changes

### 1. Update Theme/Colors
Edit `/frontend/src/config/theme.js` to switch between color schemes or modify colors.

### 2. Test Locally
```bash
npm run dev
```
Visit http://localhost:5173

### 3. Deploy to Production
```bash
./deploy.sh
```

## Deployment Process Timeline

1. **Build:** ~30 seconds
2. **S3 Upload:** ~10 seconds
3. **CloudFront Invalidation:** 1-2 minutes
4. **Total time to live:** ~2-3 minutes

## Troubleshooting

### Changes not showing?
1. Wait 2-3 minutes for CloudFront invalidation
2. Clear your browser cache (Cmd+Shift+R on Mac)
3. Try incognito/private browsing

### Build fails?
```bash
# Clean install dependencies
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Manual CloudFront invalidation
If needed, you can manually invalidate the cache:
```bash
export $(cat .env | xargs)
export AWS_ACCESS_KEY_ID=$AWS_ACCESS
export AWS_SECRET_ACCESS_KEY=$AWS_SECRET
export AWS_DEFAULT_REGION="us-east-1"

aws cloudfront create-invalidation \
  --distribution-id E1A30ATWO0VBD3 \
  --paths '/*'
```

## Environment Variables

Your AWS credentials are stored in `.env`:
- `AWS_ACCESS` - Your AWS Access Key ID
- `AWS_SECRET` - Your AWS Secret Access Key

**Never commit the .env file to git!**

## Cost Considerations

- **S3 Storage:** ~$0.01/month for a small site
- **CloudFront:** First 1TB/month free, then ~$0.085/GB
- **Requests:** First 10 million requests/month free

## Security Notes

- The S3 bucket is private (not publicly accessible)
- CloudFront uses Origin Access Identity (OAI) to securely access S3
- SSL/TLS certificate from AWS Certificate Manager
- All HTTP traffic redirects to HTTPS