# Vercel Deployment

## Local test

Run:

npm install

Then:

npm run dev

Open the local URL shown by Vite.

## Production test

Run:

npm run build

The build must complete without errors.

## Vercel

1. Put the project in a GitHub repository.
2. Open Vercel.
3. Import the GitHub repository.
4. Vercel should detect the Vite project automatically.
5. Build command:
   npm run build
6. Output directory:
   dist
7. No environment variables are required.
8. Deploy.

The app must work without a backend after deployment because tasks are stored in the user's browser localStorage.
