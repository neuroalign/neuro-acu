# IANA Contact Form Setup Guide

This guide will help you set up the contact form with Google reCAPTCHA v3 spam protection and email notifications.

## Overview

The contact form uses:
- **Google reCAPTCHA v3** - Invisible spam protection (no checkboxes!)
- **Google Apps Script** - Free backend that sends emails via Gmail
- **No hosting required** - Works even before your site goes live

---

## Step 1: Get Google reCAPTCHA Keys (5 minutes)

1. Go to https://www.google.com/recaptcha/admin/create
2. Log in with your Google account
3. Fill in the registration form:
   - **Label**: IANA Contact Form
   - **reCAPTCHA type**: Select **reCAPTCHA v3**
   - **Domains**:
     - Add `localhost` (for testing)
     - Add your future domain (e.g., `neuro-acu.org`)
     - You can add more domains later
   - Accept the Terms of Service
4. Click **Submit**
5. You'll see two keys:
   - **Site Key** (starts with `6L...`) - Used in the website
   - **Secret Key** (starts with `6L...`) - Used in Google Apps Script
6. **Keep these keys handy** - you'll need them in the next steps

---

## Step 2: Create Google Apps Script (10 minutes)

1. Go to https://script.google.com
2. Log in with the **same Google account** you want to receive contact form emails
3. Click **New project**
4. Delete the default code
5. Open the file `contact-form-script.gs` from your project folder
6. **Copy all the code** from that file
7. **Paste it** into the Google Apps Script editor
8. **Update the configuration** (lines 18-20):
   ```javascript
   const RECAPTCHA_SECRET_KEY = 'YOUR_RECAPTCHA_SECRET_KEY'; // Paste your SECRET KEY here
   const RECIPIENT_EMAIL = 'YOUR_EMAIL_ADDRESS'; // Your email address
   const FROM_NAME = 'IANA Contact Form';
   ```
   Replace:
   - `YOUR_RECAPTCHA_SECRET_KEY` with your **Secret Key** from Step 1
   - `YOUR_EMAIL_ADDRESS` with the email where you want to receive form submissions
9. Click **File > Save** (or Ctrl+S / Cmd+S)
10. Name your project: `IANA Contact Form Handler`

---

## Step 3: Authorize and Deploy Google Apps Script (5 minutes)

### First: Authorize the Script

Before deploying, you need to authorize the script to send emails:

1. In the Google Apps Script editor, find the function dropdown at the top
2. Select **doPost** from the dropdown
3. Click the **Run** button (▶️ play icon)
4. A popup will appear: **"Authorization required"**
5. Click **Review permissions**
6. Choose your Google account
7. You'll see: **"Google hasn't verified this app"**
   - This is normal! You created the app, so it's safe
8. Click **Advanced** (bottom left)
9. Click **Go to IANA Contact Form Handler (unsafe)**
10. Click **Allow**
11. The script will run and you might see an error - **this is normal!** (it's trying to process a POST request that doesn't exist)

**Important**: You've now authorized the script. Continue to deployment.

### Then: Deploy the Script

1. In the Google Apps Script editor, click **Deploy** (top right)
2. Select **New deployment**
3. Click the gear icon ⚙️ next to "Select type"
4. Choose **Web app**
5. Configure the deployment:
   - **Description**: Contact form handler
   - **Execute as**: **Me** (your email address)
   - **Who has access**: **Anyone**
6. Click **Deploy**
7. **You should NOT see an authorization screen this time** (you already authorized it above)
8. **Copy the Web App URL** - it will look like:
   ```
   https://script.google.com/macros/s/ABC123.../exec
   ```
9. **Keep this URL** - you'll need it in Step 4

---

## Step 4: Update contact.html (2 minutes)

1. Open `contact.html` in a text editor
2. Find line 15 (in the `<head>` section):
   ```html
   <script src="https://www.google.com/recaptcha/api.js?render=YOUR_RECAPTCHA_SITE_KEY"></script>
   ```
3. Replace `YOUR_RECAPTCHA_SITE_KEY` with your **Site Key** from Step 1

4. Find lines 171-172 (in the `<script>` section):
   ```javascript
   const RECAPTCHA_SITE_KEY = 'YOUR_RECAPTCHA_SITE_KEY';
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL';
   ```
5. Replace:
   - `YOUR_RECAPTCHA_SITE_KEY` with your **Site Key** from Step 1
   - `YOUR_GOOGLE_SCRIPT_URL` with the **Web App URL** from Step 3

6. Save the file

---

## Step 5: Redeploy the Google Apps Script (IMPORTANT!)

**After updating the script with your keys, you MUST create a new deployment:**

1. Go back to your Google Apps Script editor
2. Click **Deploy** (top right)
3. Select **Manage deployments**
4. Click the pencil icon ✏️ next to your existing deployment
5. Under "Version", select **New version**
6. Add a description: "Updated with keys"
7. Click **Deploy**
8. The URL will stay the same - you don't need to update contact.html again

**Why is this necessary?** Google Apps Script caches the old code. Creating a new version ensures your changes are live.

---

## Step 6: Test the Contact Form

### Test Locally (Before Going Live)

1. Open `contact.html` in your web browser (File > Open)
2. Fill in the contact form with test data
3. Click **Submit Enquiry**
4. You should see: "Thank you for contacting IANA..."
5. Check your email - you should receive the form submission within 1-2 minutes

### Troubleshooting

**If you see "Please configure the contact form first":**
- Check that you replaced all `YOUR_RECAPTCHA_SITE_KEY` and `YOUR_GOOGLE_SCRIPT_URL` placeholders

**If you don't receive an email:**
1. Go back to Google Apps Script
2. Click **Executions** (left sidebar, clock icon)
3. Look for error messages
4. Common issues:
   - Wrong email address in `RECIPIENT_EMAIL`
   - Wrong reCAPTCHA Secret Key
   - Didn't authorize the app properly

**If reCAPTCHA fails:**
- Check that you're using the correct Site Key (not the Secret Key!)
- Make sure you added `localhost` to allowed domains in reCAPTCHA admin

---

## How It Works

1. **User fills in the form** → Form data is collected
2. **reCAPTCHA v3 runs** → Google analyzes user behavior (invisible, no checkboxes!)
3. **Score is checked** → If score ≥ 0.5, it's likely a human (not a bot)
4. **Email is sent** → You receive a formatted email with the enquiry
5. **User sees confirmation** → Success message is displayed

---

## Security Features

✅ **reCAPTCHA v3** - Blocks 99%+ of spam bots
✅ **Score-based filtering** - Only allows submissions with good scores
✅ **Server-side verification** - Can't be bypassed by disabling JavaScript
✅ **No CORS issues** - Works from any domain
✅ **Gmail's spam filters** - Additional protection

---

## Cost

🎉 **Completely FREE!**
- Google reCAPTCHA v3: Free (up to 1 million assessments/month)
- Google Apps Script: Free (up to 20,000 emails/day)
- No credit card required
- No hosting fees

---

## After Your Site Goes Live

When you publish your website to a domain:

1. Go to https://www.google.com/recaptcha/admin
2. Find your reCAPTCHA site
3. Click **Settings** (gear icon)
4. Add your live domain to the **Domains** list (e.g., `neuro-acu.org`)
5. Save

**That's it!** The form will work on both localhost and your live site.

---

## Email Template

When someone submits the form, you'll receive a nicely formatted email like this:

```
Subject: IANA Contact Form: [Their Subject]

IANA CONTACT FORM SUBMISSION
=============================

Contact Details
---------------
Name: John Smith
Email: john@example.com
Subject: Membership Enquiry
Enquiry Type: Membership

Message
-------
I would like to know more about IANA membership requirements...

---
Submitted: 19/11/2025, 14:30:00
reCAPTCHA Score: Verified ✓
```

You can reply directly to the email - it will go to the enquirer's email address.

---

## Need Help?

If you run into issues:

1. Check the **Troubleshooting** section above
2. Look at **Executions** in Google Apps Script for error logs
3. Test with different email addresses
4. Make sure all configuration values are correct

---

## Files Overview

- `contact.html` - The contact page (updated with reCAPTCHA)
- `contact-form-script.gs` - Google Apps Script code (paste into script.google.com)
- `CONTACT_FORM_SETUP.md` - This guide

---

**Good luck! The form should work perfectly once configured.**
