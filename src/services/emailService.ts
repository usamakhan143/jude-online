import emailjs from "@emailjs/browser";
import { OnboardingFormData } from "../utils/validationSchemas";

// Initialize EmailJS with public key
const initEmailJS = () => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if (publicKey) {
    emailjs.init(publicKey);
  }
};

// Initialize on module load
initEmailJS();

export interface EmailServiceConfig {
  serviceId: string;
  adminTemplateId: string;
  customerTemplateId: string;
  adminEmail: string;
  adminName: string;
}

// Get configuration from environment variables
const getEmailConfig = (): EmailServiceConfig => {
  return {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
    adminTemplateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ADMIN || "",
    customerTemplateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CUSTOMER || "",
    adminEmail: import.meta.env.VITE_ADMIN_EMAIL || "admin@yourdomain.com",
    adminName: import.meta.env.VITE_ADMIN_NAME || "Admin Team",
  };
};

// Format form data for email templates
const formatFormDataForEmail = (data: OnboardingFormData) => {
  return {
    // Customer information
    customer_name: data.fullName,
    customer_email: data.email,
    customer_location: data.location,

    // Business information
    business_status: data.businessStatus,
    business_idea: data.businessIdeaDescription || "Not provided",

    // Skills and experience
    natural_skills: data.naturalSkills,
    interests_passions: data.interestsPassions,
    external_validation: data.externalValidation,
    relevant_experience: data.relevantExperience || "Not provided",

    // Goals and challenges
    main_goal: data.mainGoal,
    main_goal_other: data.mainGoalOther || "Not applicable",
    biggest_challenge: data.biggestChallenge,
    biggest_challenge_other: data.biggestChallengeOther || "Not applicable",
    ideal_outcome: data.idealOutcome,
    motivation: data.motivation,

    // Background
    background_story: data.backgroundStory,
    achievements: data.achievements || "Not provided",
    additional_notes: data.additionalNotes || "None",

    // Metadata
    submission_date: new Date().toLocaleString(),
    formatted_date: new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
  };
};

// Send notification email to admin
export const sendAdminNotification = async (
  formData: OnboardingFormData,
): Promise<void> => {
  const config = getEmailConfig();

  if (!config.serviceId || !config.adminTemplateId) {
    console.warn("EmailJS configuration missing for admin notification");
    return;
  }

  const emailData = {
    ...formatFormDataForEmail(formData),
    admin_email: config.adminEmail,
    admin_name: config.adminName,
  };

  try {
    const response = await emailjs.send(
      config.serviceId,
      config.adminTemplateId,
      emailData,
    );

    console.log(
      "Admin notification sent successfully:",
      response.status,
      response.text,
    );
  } catch (error) {
    console.error("Failed to send admin notification:", error);
    throw new Error("Failed to send admin notification");
  }
};

// Send thank you email to customer
export const sendCustomerThankYou = async (
  formData: OnboardingFormData,
): Promise<void> => {
  const config = getEmailConfig();

  if (!config.serviceId || !config.customerTemplateId) {
    console.warn("EmailJS configuration missing for customer thank you email");
    return;
  }

  const emailData = {
    ...formatFormDataForEmail(formData),
    to_email: formData.email,
    to_name: formData.fullName,
  };

  try {
    const response = await emailjs.send(
      config.serviceId,
      config.customerTemplateId,
      emailData,
    );

    console.log(
      "Customer thank you email sent successfully:",
      response.status,
      response.text,
    );
  } catch (error) {
    console.error("Failed to send customer thank you email:", error);
    throw new Error("Failed to send customer thank you email");
  }
};

// Send both emails
export const sendOnboardingEmails = async (
  formData: OnboardingFormData,
): Promise<void> => {
  try {
    // Send both emails in parallel
    await Promise.all([
      sendAdminNotification(formData),
      sendCustomerThankYou(formData),
    ]);

    console.log("All onboarding emails sent successfully");
  } catch (error) {
    console.error("Error sending onboarding emails:", error);
    // Don't throw error to prevent blocking the Calendly redirect
    // The form submission should continue even if emails fail
  }
};

// Email template suggestions for EmailJS dashboard
export const emailTemplateGuides = {
  adminTemplate: {
    subject: "New Onboarding Form Submission - {{customer_name}}",
    body: `
New onboarding form submission received!

Customer Details:
- Name: {{customer_name}}
- Email: {{customer_email}}
- Location: {{customer_location}}
- Submission Date: {{formatted_date}}

Business Information:
- Status: {{business_status}}
- Business Idea: {{business_idea}}

Skills & Experience:
- Natural Skills: {{natural_skills}}
- Interests/Passions: {{interests_passions}}
- External Validation: {{external_validation}}
- Relevant Experience: {{relevant_experience}}

Goals & Challenges:
- Main Goal: {{main_goal}} {{main_goal_other}}
- Biggest Challenge: {{biggest_challenge}} {{biggest_challenge_other}}
- Ideal Outcome: {{ideal_outcome}}
- Motivation: {{motivation}}

Background:
- Background Story: {{background_story}}
- Achievements: {{achievements}}
- Additional Notes: {{additional_notes}}

Please follow up with the customer promptly.
    `,
  },

  customerTemplate: {
    subject: "Thank You for Your Onboarding Submission, {{to_name}}!",
    body: `
Hi {{to_name}},

Thank you for completing our detailed onboarding form! We're excited to help you create your custom business blueprint.

What happens next:
✅ Your submission has been received
✅ Our team will review your information
✅ You'll be redirected to book your 1-on-1 call
✅ We'll prepare a personalized strategy for your call

Your submission details:
- Submitted on: {{formatted_date}}
- Email: {{to_email}}
- Location: {{customer_location}}

We're looking forward to our conversation and helping you build the business of your dreams!

Best regards,
The Business Blueprint Team

P.S. If you have any questions before our call, feel free to reply to this email.
    `,
  },
};
