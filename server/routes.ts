import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertNewsletterSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
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
