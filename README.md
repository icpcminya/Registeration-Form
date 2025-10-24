# ICPC Registration Form

A modern, responsive form that collects participant information and sends it directly to Google Sheets.

## Features

- ✅ Bilingual name input (English & Arabic)
- ✅ Gmail validation
- ✅ Phone number validation
- ✅ National ID validation (14 digits)
- ✅ Codeforces handle verification via API
- ✅ Direct submission to Google Sheets
- ✅ Modern, responsive UI
- ✅ Real-time validation

## Setup Instructions

### 1. Google Apps Script Setup

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/12txTQXG85shYhOI9yc3EGb6bqBD4HP8NeRJs51HrlOY/edit
2. Go to **Extensions > Apps Script**
3. Delete any existing code
4. Paste the code from `google-apps-script.js`
5. Click **Deploy > New deployment**
6. Choose **Web app** type
7. Set **Execute as**: Me
8. Set **Who has access**: Anyone
9. Click **Deploy**
10. Copy the **Web app URL**

### 2. Update the Form

1. Open `index.html`
2. Find line with `const SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';`
3. Replace with your actual Web app URL

### 3. Deploy to Netlify

#### Option A: Drag and Drop
1. Go to https://app.netlify.com/drop
2. Drag the entire folder
3. Done!

#### Option B: Git Deploy
1. Push this folder to GitHub
2. Go to https://app.netlify.com
3. Click **Add new site > Import an existing project**
4. Connect your GitHub repository
5. Deploy!

#### Option C: Netlify CLI
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## Testing Locally

Simply open `index.html` in your browser. The form will work as long as you've set up the Google Apps Script endpoint.

## Form Fields

- **Name (English)**: Required text field
- **Name (Arabic)**: Required, must contain Arabic characters
- **Gmail**: Required, must be a valid @gmail.com address
- **Phone Number**: Required, minimum 10 digits
- **National ID**: Required, exactly 14 digits
- **Codeforces Handle**: Required, validated against Codeforces API

## Technologies Used

- Pure HTML/CSS/JavaScript (no dependencies)
- Codeforces API for handle validation
- Google Apps Script for backend
- Netlify for hosting
