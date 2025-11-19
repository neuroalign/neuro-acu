/**
 * IANA Contact Form Handler with reCAPTCHA v3
 *
 * SETUP INSTRUCTIONS:
 * 1. Go to https://script.google.com
 * 2. Create a new project
 * 3. Paste this code
 * 4. Update YOUR_RECAPTCHA_SECRET_KEY below
 * 5. Update YOUR_EMAIL_ADDRESS below
 * 6. Deploy as Web App (Deploy > New deployment > Web app)
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 7. Copy the deployment URL and use it in contact.html
 */

// ============ CONFIGURATION ============
const RECAPTCHA_SECRET_KEY = 'YOUR_RECAPTCHA_SECRET_KEY'; // Get from https://www.google.com/recaptcha/admin
const RECIPIENT_EMAIL = 'YOUR_EMAIL_ADDRESS'; // Email where form submissions will be sent
const FROM_NAME = 'IANA Contact Form';
// =======================================

/**
 * Handle POST requests from contact form
 */
function doPost(e) {
  try {
    // Parse form data
    const data = JSON.parse(e.postData.contents);

    // Verify reCAPTCHA
    const recaptchaValid = verifyRecaptcha(data.recaptchaToken);

    if (!recaptchaValid) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        message: 'reCAPTCHA verification failed. Please try again.'
      })).setMimeType(ContentService.MimeType.JSON);
    }

    // Send email
    const emailSent = sendEmail(data);

    if (emailSent) {
      return ContentService.createTextOutput(JSON.stringify({
        success: true,
        message: 'Thank you for contacting IANA. We will respond to your enquiry as soon as possible.'
      })).setMimeType(ContentService.MimeType.JSON);
    } else {
      throw new Error('Failed to send email');
    }

  } catch (error) {
    Logger.log('Error: ' + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: 'An error occurred. Please try again or email us directly at info@neuro-acu.org'
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Verify reCAPTCHA token
 */
function verifyRecaptcha(token) {
  if (!token) {
    return false;
  }

  try {
    const response = UrlFetchApp.fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'post',
      payload: {
        secret: RECAPTCHA_SECRET_KEY,
        response: token
      }
    });

    const result = JSON.parse(response.getContentText());

    // reCAPTCHA v3 returns a score from 0.0 to 1.0
    // 1.0 is very likely a good interaction, 0.0 is very likely a bot
    // We'll accept scores above 0.5
    return result.success && result.score >= 0.5;

  } catch (error) {
    Logger.log('reCAPTCHA verification error: ' + error.toString());
    return false;
  }
}

/**
 * Send email notification
 */
function sendEmail(data) {
  try {
    const subject = `IANA Contact Form: ${data.subject}`;

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #003D82 0%, #0066CC 100%); padding: 30px; text-align: center;">
          <h2 style="color: white; margin: 0;">IANA Contact Form Submission</h2>
        </div>

        <div style="padding: 30px; background: #f8f9fa;">
          <h3 style="color: #003D82; margin-top: 0;">Contact Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #dee2e6;">
              <td style="padding: 12px 0; font-weight: bold; width: 150px;">Name:</td>
              <td style="padding: 12px 0;">${data.name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #dee2e6;">
              <td style="padding: 12px 0; font-weight: bold;">Email:</td>
              <td style="padding: 12px 0;"><a href="mailto:${data.email}" style="color: #0066CC;">${data.email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #dee2e6;">
              <td style="padding: 12px 0; font-weight: bold;">Subject:</td>
              <td style="padding: 12px 0;">${data.subject}</td>
            </tr>
            <tr style="border-bottom: 1px solid #dee2e6;">
              <td style="padding: 12px 0; font-weight: bold;">Enquiry Type:</td>
              <td style="padding: 12px 0;">${formatEnquiryType(data.category)}</td>
            </tr>
          </table>

          <h3 style="color: #003D82; margin-top: 30px;">Message</h3>
          <div style="background: white; padding: 20px; border-left: 4px solid #0066CC; border-radius: 4px;">
            <p style="margin: 0; white-space: pre-wrap;">${data.message}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #6c757d; font-size: 12px;">
            <p style="margin: 0;">Submitted: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}</p>
            <p style="margin: 5px 0 0 0;">reCAPTCHA Score: Verified ✓</p>
          </div>
        </div>
      </div>
    `;

    const plainBody = `
IANA Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}
Enquiry Type: ${formatEnquiryType(data.category)}

Message:
${data.message}

---
Submitted: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}
reCAPTCHA: Verified
    `;

    // Send email
    GmailApp.sendEmail(RECIPIENT_EMAIL, subject, plainBody, {
      htmlBody: htmlBody,
      name: FROM_NAME,
      replyTo: data.email
    });

    return true;

  } catch (error) {
    Logger.log('Email sending error: ' + error.toString());
    return false;
  }
}

/**
 * Format enquiry type for display
 */
function formatEnquiryType(category) {
  const types = {
    'general': 'General Enquiry',
    'membership': 'Membership',
    'cpd': 'Professional Development',
    'directory': 'Directory Listing',
    'research': 'Research & Evidence',
    'other': 'Other'
  };
  return types[category] || category;
}

/**
 * Handle GET requests (for testing)
 */
function doGet(e) {
  return ContentService.createTextOutput('IANA Contact Form Handler is running. This endpoint accepts POST requests only.');
}
