# Email Setup Guide for Contact Form

Your contact form currently saves submissions to in-memory storage. To make it send actual emails, you'll need to integrate an email service. Here are the best options:

## 📧 Recommended Email Services

### Option 1: Resend (Recommended - Easy & Modern)

**Why Resend?**
- Simple API, built for developers
- Free tier: 3,000 emails/month
- Great deliverability
- Easy setup

**Setup Steps:**

1. **Create a Resend Account**
   - Go to [resend.com](https://resend.com)
   - Sign up for a free account
   - Verify your email

2. **Get your API Key**
   - Go to API Keys in your Resend dashboard
   - Click "Create API Key"
   - Copy the key (starts with `re_`)

3. **Add Domain (Optional but recommended)**
   - Go to Domains in Resend
   - Add `ata.ke` domain
   - Follow DNS verification steps
   - This allows emails from `support@ata.ke`

4. **Install Resend Package**
   ```bash
   npm install resend
   ```

5. **Add API Key to Replit Secrets**
   - In Replit, open the "Secrets" tool (lock icon)
   - Add: `RESEND_API_KEY` = your API key

6. **Update Backend Route**
   
   Edit `server/routes.ts`:
   ```typescript
   import { Resend } from 'resend';
   
   const resend = new Resend(process.env.RESEND_API_KEY);
   
   app.post("/api/contact", async (req, res) => {
     try {
       const validatedData = insertContactSchema.parse(req.body);
       
       // Save to storage
       const contact = await storage.createContact(validatedData);
       
       // Send email notification
       await resend.emails.send({
         from: 'ATA Platform <support@ata.ke>', // Use your verified domain
         to: 'support@ata.ke',
         subject: `New Contact Form Submission from ${validatedData.name}`,
         html: `
           <h2>New Contact Form Submission</h2>
           <p><strong>Name:</strong> ${validatedData.name}</p>
           <p><strong>Email:</strong> ${validatedData.email}</p>
           <p><strong>Company:</strong> ${validatedData.company || 'N/A'}</p>
           <p><strong>Role:</strong> ${validatedData.role}</p>
           <p><strong>Message:</strong></p>
           <p>${validatedData.message}</p>
         `,
       });
       
       res.json({ success: true, contact });
     } catch (error: any) {
       console.error('Contact form error:', error);
       res.status(400).json({ 
         success: false, 
         error: error.message || "Failed to send message" 
       });
     }
   });
   ```

---

### Option 2: SendGrid (Enterprise-Grade)

**Why SendGrid?**
- Industry standard
- Free tier: 100 emails/day
- Advanced analytics
- Great for scaling

**Setup Steps:**

1. **Create SendGrid Account**
   - Go to [sendgrid.com](https://sendgrid.com)
   - Sign up (free tier available)

2. **Create API Key**
   - Settings → API Keys → Create API Key
   - Choose "Full Access"
   - Copy the API key

3. **Verify Sender Identity**
   - Settings → Sender Authentication
   - Verify single sender: `support@ata.ke`
   - Or verify your domain

4. **Install Package**
   ```bash
   npm install @sendgrid/mail
   ```

5. **Add to Secrets**
   - Secret: `SENDGRID_API_KEY` = your API key

6. **Update Backend**
   ```typescript
   import sgMail from '@sendgrid/mail';
   
   sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
   
   app.post("/api/contact", async (req, res) => {
     try {
       const validatedData = insertContactSchema.parse(req.body);
       const contact = await storage.createContact(validatedData);
       
       const msg = {
         to: 'support@ata.ke',
         from: 'support@ata.ke', // Must be verified
         subject: `New Contact: ${validatedData.name}`,
         html: `
           <h2>New Contact Form Submission</h2>
           <p><strong>Name:</strong> ${validatedData.name}</p>
           <p><strong>Email:</strong> ${validatedData.email}</p>
           <p><strong>Company:</strong> ${validatedData.company || 'N/A'}</p>
           <p><strong>Role:</strong> ${validatedData.role}</p>
           <p><strong>Message:</strong></p>
           <p>${validatedData.message}</p>
         `,
       };
       
       await sgMail.send(msg);
       res.json({ success: true, contact });
     } catch (error: any) {
       console.error('SendGrid error:', error);
       res.status(400).json({ 
         success: false, 
         error: "Failed to send message" 
       });
     }
   });
   ```

---

### Option 3: Nodemailer (Use Your Own SMTP)

**Why Nodemailer?**
- Works with any email provider (Gmail, Outlook, etc.)
- No third-party service needed
- Full control

**Setup with Gmail:**

1. **Enable App Password** (if using Gmail)
   - Go to Google Account → Security
   - Enable 2-Step Verification
   - Generate App Password for "Mail"

2. **Install Package**
   ```bash
   npm install nodemailer
   ```

3. **Add to Secrets**
   - `EMAIL_USER` = your Gmail address
   - `EMAIL_PASSWORD` = your app password

4. **Update Backend**
   ```typescript
   import nodemailer from 'nodemailer';
   
   const transporter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
       user: process.env.EMAIL_USER,
       pass: process.env.EMAIL_PASSWORD,
     },
   });
   
   app.post("/api/contact", async (req, res) => {
     try {
       const validatedData = insertContactSchema.parse(req.body);
       const contact = await storage.createContact(validatedData);
       
       await transporter.sendMail({
         from: process.env.EMAIL_USER,
         to: 'support@ata.ke',
         subject: `New Contact: ${validatedData.name}`,
         html: `
           <h2>New Contact Form Submission</h2>
           <p><strong>Name:</strong> ${validatedData.name}</p>
           <p><strong>Email:</strong> ${validatedData.email}</p>
           <p><strong>Company:</strong> ${validatedData.company || 'N/A'}</p>
           <p><strong>Role:</strong> ${validatedData.role}</p>
           <p><strong>Message:</strong></p>
           <p>${validatedData.message}</p>
         `,
       });
       
       res.json({ success: true, contact });
     } catch (error: any) {
       console.error('Email error:', error);
       res.status(400).json({ 
         success: false, 
         error: "Failed to send message" 
       });
     }
   });
   ```

---

## 🎯 Quick Start Guide (Resend - Recommended)

Here's the fastest way to get emails working:

### Step 1: Install Resend
```bash
npm install resend
```

### Step 2: Get API Key
1. Sign up at [resend.com](https://resend.com)
2. Create API key
3. Copy it

### Step 3: Add Secret in Replit
1. Click "Secrets" tool (🔒 icon)
2. Add new secret:
   - Key: `RESEND_API_KEY`
   - Value: `re_xxxxxxxxxxxxx` (your key)

### Step 4: Update `server/routes.ts`

Add this at the top:
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
```

Replace the `/api/contact` route with:
```typescript
app.post("/api/contact", async (req, res) => {
  try {
    const validatedData = insertContactSchema.parse(req.body);
    const contact = await storage.createContact(validatedData);
    
    // Send email notification
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: 'ATA Contact Form <onboarding@resend.dev>', // Use this for testing
          to: 'support@ata.ke',
          replyTo: validatedData.email,
          subject: `New Contact: ${validatedData.name} (${validatedData.role})`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #8B5CF6;">New Contact Form Submission</h2>
              <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
                <p><strong>Name:</strong> ${validatedData.name}</p>
                <p><strong>Email:</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>
                <p><strong>Company:</strong> ${validatedData.company || 'Not provided'}</p>
                <p><strong>Role:</strong> ${validatedData.role}</p>
                <hr style="border: 1px solid #ddd; margin: 20px 0;">
                <p><strong>Message:</strong></p>
                <p style="white-space: pre-wrap;">${validatedData.message}</p>
              </div>
            </div>
          `,
        });
      } catch (emailError) {
        console.error('Email send failed:', emailError);
        // Still return success since data was saved
      }
    }
    
    res.json({ success: true, contact });
  } catch (error: any) {
    console.error('Contact form error:', error);
    res.status(400).json({ 
      success: false, 
      error: error.message || "Invalid contact data" 
    });
  }
});
```

### Step 5: Restart Your App
Click the "Restart" button in Replit to apply changes.

### Step 6: Test It!
1. Go to your Contact page
2. Fill out the form
3. Submit
4. Check your `support@ata.ke` inbox!

---

## 📝 Notes

### Using Your Custom Domain (support@ata.ke)

To send from `support@ata.ke` instead of the default Resend domain:

1. **In Resend Dashboard:**
   - Go to "Domains"
   - Click "Add Domain"
   - Enter: `ata.ke`

2. **Add DNS Records:**
   - Resend will give you DNS records to add
   - Add these in your domain registrar (where you bought ata.ke)
   - Wait for verification (usually 5-30 minutes)

3. **Update Code:**
   ```typescript
   from: 'ATA Support <support@ata.ke>'
   ```

### Testing Before Domain Setup

Use Resend's default domain for testing:
```typescript
from: 'ATA Contact <onboarding@resend.dev>'
```

This works immediately without domain verification!

---

## 🔒 Security Best Practices

1. **Never commit API keys** - Always use Replit Secrets
2. **Validate input** - Already done with Zod ✅
3. **Rate limiting** - Consider adding to prevent spam
4. **Email validation** - Check for real email addresses

---

## 🐛 Troubleshooting

**Email not received?**
- Check spam folder
- Verify API key is correct
- Check Replit logs for errors
- Ensure domain is verified (if using custom domain)

**"Unauthorized" error?**
- API key might be wrong
- Check it's added to Secrets correctly

**Emails going to spam?**
- Verify your domain (improves deliverability)
- Add SPF, DKIM records (Resend provides these)

---

## 💰 Cost Comparison

| Service | Free Tier | Best For |
|---------|-----------|----------|
| **Resend** | 3,000/month | Startups, easy setup |
| **SendGrid** | 100/day | Enterprise, analytics |
| **Nodemailer** | Unlimited* | Using existing email |

*Depends on your email provider's limits

---

## ✅ Recommended: Use Resend

For ATA, I recommend **Resend** because:
- ✅ Easy 5-minute setup
- ✅ Generous free tier (3,000 emails/month)
- ✅ Great for African domain verification
- ✅ Modern developer experience
- ✅ Good deliverability

Follow the "Quick Start Guide" above to get started!
