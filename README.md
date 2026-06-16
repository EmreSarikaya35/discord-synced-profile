# Personal Profile Website with Global Chat

Example Website: [mrkaffin.com](https://mrkaffin.com/)

A sleek, premium, glassmorphism-styled personal profile website template. It features a CRT-overlay background video, real-time Discord status syncing via Lanyard, and an anonymous global chat powered by Firebase.

## Features
- **Modern UI:** Glassmorphism design, smooth animations, and a glitch text enter screen.
- **Discord Integration:** Live display of your Discord status (Online, Idle, DND, Offline) and custom activities.
- **Global Chat:** Real-time anonymous global chat room.
- **Video Background:** High-performance background video player with mute/unmute controls.
- **Fully Configurable:** No need to touch HTML/CSS. Everything is controlled via a single `config.js` file.

## Setup Instructions

Simply clone or download this repository, and open `config.js` in a text editor to customize your site.

### 1. Basic Profile & Background Setup
In `config.js`, you can easily change your `name`, `tagline`, `username`, `location`, and social media links. 
For the background video, upload your `.mp4` file to a direct host like [Catbox.moe](https://catbox.moe/) and paste the link into `videoUrl`.

### 2. Discord Status Setup (Lanyard API)
To show your live Discord status on the site, we use the free [Lanyard API](https://github.com/Phineas/lanyard).
1. Join the Lanyard Discord server (this is required to activate the bot for your account): [Join Lanyard Discord](https://discord.gg/lanyard)
2. Get your **Discord User ID** (Enable Developer Mode in Discord settings, right-click your profile, and click "Copy User ID").
3. Paste your User ID into the `discordId` field in `config.js`.

### 3. Global Chat Setup (Firebase)
The global chat uses Google's free Firebase Realtime Database. To set it up:
1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. Click the **Web (`</>`)** icon to register a web app.
3. Copy the `firebaseConfig` object provided by Firebase and paste the values into the `firebase` section in `config.js`.
4. On the left menu of Firebase Console, click **Build > Realtime Database** and click **Create Database**.
5. Choose your region and start in **Test Mode**.

**IMPORTANT: Keeping the Chat Open Forever**
By default, Firebase test mode expires after 30 days. To keep your global chat working permanently without requiring user login:
1. Go to the **Realtime Database** section in Firebase.
2. Click the **Rules** tab.
3. Replace the existing code with the following exact code:
```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```
4. Click **Publish**. Your chat is now permanently open!

## Deployment
Since this is a static website built with pure HTML/CSS/JS, you can host it anywhere for free! Just upload the files to **GitHub Pages**, **Vercel**, **Netlify**, or any traditional web host.

Example Website: [mrkaffin.com](https://mrkaffin.com/)
