npx capture-website-cli https://solution-challege-code-404.web.app --output=public/assets/nav-link-previews/landing.png --width=1280 --height=720 --delay=3 --overwrite
npx capture-website-cli "https://solution-challege-code-404.web.app/#about" --output=public/assets/nav-link-previews/about.png --width=1280 --height=720 --delay=4 --scroll-to-element="#about" --overwrite
npx capture-website-cli "https://solution-challege-code-404.web.app/#skills" --output=public/assets/nav-link-previews/skills.png --width=1280 --height=720 --delay=4 --scroll-to-element="#skills" --overwrite
npx capture-website-cli "https://solution-challege-code-404.web.app/#projects" --output=public/assets/nav-link-previews/projects.png --width=1280 --height=720 --delay=4 --scroll-to-element="#projects" --overwrite
npx capture-website-cli https://solution-challege-code-404.web.app/blogs --output=public/assets/nav-link-previews/blog.png --width=1280 --height=720 --delay=3 --overwrite
npx capture-website-cli "https://solution-challege-code-404.web.app/#contact" --output=public/assets/nav-link-previews/contact.png --width=1280 --height=720 --delay=4 --scroll-to-element="#contact" --overwrite

npm run build
npx firebase-tools deploy --only hosting

git add .
git commit -m "Update nav-link-previews with actual site screenshots, update README, and deploy to Firebase"
git push
