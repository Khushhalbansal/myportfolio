npm run build
npx firebase-tools deploy --only hosting
git add .
git commit -m "Update nav-link-previews with actual site screenshots, update README, and deploy to Firebase"
git push
