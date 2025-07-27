# Hostpoint Deployment Instructions

## Prerequisites
Before uploading to Hostpoint, you need to build the React application locally.

## Steps to Deploy

### 1. Build the Application Locally
In your local development environment, run:
```bash
npm run build
# or
yarn build
```

This will create a `dist` folder with all the compiled static files.

### 2. Prepare Files for Upload
1. Copy ALL contents from the `dist` folder to the root of this `Hostpoint-migration` folder
2. The final structure should look like:
   ```
   Hostpoint-migration/
   ├── api/                    (Already included)
   │   ├── config.php
   │   ├── logical-fallacies.php
   │   └── cognitive-biases.php
   ├── assets/                 (From dist folder)
   ├── index.html             (From dist folder)
   ├── .htaccess              (Already included)
   ├── robots.txt             (Already included)
   └── [other files from dist]
   ```

### 3. Update API URLs (if needed)
If your Hostpoint domain is different from the current API URL, update the hooks:
- `src/hooks/useLogicalFallacies.ts` 
- `src/hooks/useCognitiveBiases.ts`

Change the API URL from:
```javascript
https://dev.objective-reality.info/api/
```
To your Hostpoint domain:
```javascript
https://yourdomain.com/api/
```

### 4. Upload to Hostpoint
1. Upload ALL contents of the `Hostpoint-migration` folder to your Hostpoint web root directory
2. Ensure the `api` folder has proper permissions for PHP execution
3. Verify your database credentials in `api/config.php` are correct for Hostpoint

### 5. Test
- Test the main website functionality
- Test language switching
- Test logical fallacies and cognitive biases pages
- Verify API endpoints work correctly

## Notes
- The `.htaccess` file is configured for proper React Router support
- CORS headers are already configured in the PHP files
- The API expects the same database structure as currently used