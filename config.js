export const CONFIG = {
    // ── Profile Information ──
    name: "Example Name", // Large glowing name in the center
    tagline: "example.com", // Small tagline above the name
    username: "example", // Username shown in the Discord card
    location: "Location", // City/Location
    
    // ── Background ──
    videoUrl: "https://files.catbox.moe/esu8dp.mp4", // Background video link (mp4 recommended)
    
    // ── Integrations ──
    discordId: "", // Lanyard API ID to fetch your Discord status
    
    // ── Global Chat (Firebase Realtime Database) ──
    // Leave blank or set to false if you don't want to use the chat feature.
    firebase: {
        apiKey: "",
        authDomain: "",
        databaseURL: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: ""
    },

    // ── Social Media Icons ──
    // Use FontAwesome classes for icons (e.g., fa-discord, fa-instagram, fa-twitter)
    socials: [
        {
            icon: "fa-discord",
            url: "https://discord.com",
            label: "Discord"
        },
        {
            icon: "fa-steam",
            url: "https://steamcommunity.com",
            label: "Steam"
        },
        {
            icon: "fa-twitter",
            url: "https://twitter.com",
            label: "Twitter"
        }
    ]
};
