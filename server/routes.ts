import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertNewsletterSchema } from "@shared/schema";
import { Resend } from "resend";

// Initialize Resend with API key from environment
const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      // Send email notification if Resend is configured
      if (resend) {
        try {
          await resend.emails.send({
            from: 'ATA Contact Form <onboarding@resend.dev>', // Default sender for testing
            to: 'support@ata.ke',
            replyTo: validatedData.email,
            subject: `New Contact Form Submission from ${validatedData.name}`,
            html: `
              <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="background: linear-gradient(135deg, #8B5CF6 0%, #00D9A0 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
                  <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 700;">New Contact Form Submission</h1>
                </div>
                
                <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 12px 12px;">
                  <div style="background: white; padding: 24px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                    <div style="margin-bottom: 16px;">
                      <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 14px; font-weight: 600;">Name</p>
                      <p style="margin: 0; color: #111827; font-size: 16px;">${validatedData.name}</p>
                    </div>
                    
                    <div style="margin-bottom: 16px;">
                      <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 14px; font-weight: 600;">Email</p>
                      <p style="margin: 0;"><a href="mailto:${validatedData.email}" style="color: #8B5CF6; text-decoration: none;">${validatedData.email}</a></p>
                    </div>
                    
                    <div style="margin-bottom: 16px;">
                      <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 14px; font-weight: 600;">Company</p>
                      <p style="margin: 0; color: #111827; font-size: 16px;">${validatedData.company || 'Not provided'}</p>
                    </div>
                    
                    <div style="margin-bottom: 16px;">
                      <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 14px; font-weight: 600;">Role</p>
                      <p style="margin: 0; color: #111827; font-size: 16px; text-transform: capitalize;">${validatedData.role}</p>
                    </div>
                    
                    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
                    
                    <div>
                      <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px; font-weight: 600;">Message</p>
                      <p style="margin: 0; color: #111827; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${validatedData.message}</p>
                    </div>
                  </div>
                  
                  <div style="margin-top: 20px; text-align: center;">
                    <p style="color: #6b7280; font-size: 12px; margin: 0;">
                      This message was sent via the ATA contact form
                    </p>
                  </div>
                </div>
              </div>
            `,
          });
          console.log(`✅ Contact form email sent to support@ata.ke for ${validatedData.name}`);
        } catch (emailError) {
          console.error('📧 Email send failed:', emailError);
          // Don't fail the request - data is still saved
        }
      } else {
        console.log('⚠️  Resend not configured - skipping email notification');
      }
      
      res.json({ success: true, contact });
    } catch (error: any) {
      res.status(400).json({ 
        success: false, 
        error: error.message || "Invalid contact data" 
      });
    }
  });

  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      
      const existing = await storage.getNewsletterByEmail(validatedData.email);
      if (existing) {
        return res.status(400).json({ 
          success: false, 
          error: "This email is already subscribed" 
        });
      }
      
      const newsletter = await storage.createNewsletter(validatedData);
      res.json({ success: true, newsletter });
    } catch (error: any) {
      res.status(400).json({ 
        success: false, 
        error: error.message || "Invalid newsletter data" 
      });
    }
  });

  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      res.json({ success: true, contacts });
    } catch (error: any) {
      res.status(500).json({ 
        success: false, 
        error: "Failed to fetch contacts" 
      });
    }
  });

  app.get("/api/newsletters", async (req, res) => {
    try {
      const newsletters = await storage.getAllNewsletters();
      res.json({ success: true, newsletters });
    } catch (error: any) {
      res.status(500).json({ 
        success: false, 
        error: "Failed to fetch newsletter subscriptions" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
