Publish this folder to get a public link that opens on any network.

Fastest option: Netlify Drop
1. Open https://app.netlify.com/drop
2. Drag the entire `invite-share` folder into the page
3. Wait for upload to finish
4. Copy the generated public URL
5. Send that URL in WhatsApp

Alternative: Cloudflare Pages
1. Create a new Pages project
2. Upload the `invite-share` folder
3. Set no build command
4. Set output directory to `/`
5. Publish and copy the public URL

Important
- Replace the RSVP placeholder in `app.jsx` before publishing:
  `rsvpUrl: "https://forms.gle/replace-with-your-rsvp-form-link"`
- The public homepage is `index.html`, so publishing this folder will open the invitation directly.
