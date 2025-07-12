import * as Yup from "yup";

export const onboardingSchema = Yup.object({
  // Personal Information
  fullName: Yup.string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be less than 100 characters")
    .required("Full name is required"),

  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email address is required"),

  location: Yup.string()
    .min(2, "Location must be at least 2 characters")
    .max(100, "Location must be less than 100 characters")
    .required("Location is required"),

  // Business Status
  businessStatus: Yup.string()
    .oneOf(
      [
        "have-idea-not-started",
        "started-but-stuck",
        "starting-from-scratch",
        "",
      ],
      "Please select a valid business status",
    )
    .required("Business status is required"),

  businessIdeaDescription: Yup.string().when("businessStatus", {
    is: "have-idea-not-started",
    then: (schema) => schema.required("Please describe your business idea"),
    otherwise: (schema) => schema,
  }),

  // Skills and Experience
  naturalSkills: Yup.string()
    .min(10, "Please provide more detail about your natural skills")
    .max(1000, "Skills description must be less than 1000 characters")
    .required("Natural skills are required"),

  interestsPassions: Yup.string()
    .min(10, "Please provide more detail about your interests")
    .max(1000, "Interests description must be less than 1000 characters")
    .required("Interests and passions are required"),

  externalValidation: Yup.string()
    .min(10, "Please provide more detail about external validation")
    .max(1000, "External validation must be less than 1000 characters")
    .required("External validation is required"),

  relevantExperience: Yup.string().max(
    1000,
    "Experience description must be less than 1000 characters",
  ),

  // Goals and Challenges
  mainGoal: Yup.string()
    .oneOf(
      [
        "side-income-1k",
        "replace-job-income",
        "long-term-freedom",
        "other",
        "",
      ],
      "Please select a valid goal",
    )
    .required("Main goal is required"),

  mainGoalOther: Yup.string().when("mainGoal", {
    is: "other",
    then: (schema) => schema.required("Please specify your main goal"),
    otherwise: (schema) => schema,
  }),

  biggestChallenge: Yup.string()
    .oneOf(
      [
        "business-model-choice",
        "focus-priority",
        "overwhelmed-options",
        "tried-nothing-worked",
        "other",
        "",
      ],
      "Please select a valid challenge",
    )
    .required("Biggest challenge is required"),

  biggestChallengeOther: Yup.string().when("biggestChallenge", {
    is: "other",
    then: (schema) => schema.required("Please specify your biggest challenge"),
    otherwise: (schema) => schema,
  }),

  idealOutcome: Yup.string()
    .min(20, "Please provide more detail about your ideal outcome")
    .max(1000, "Ideal outcome must be less than 1000 characters")
    .required("Ideal outcome is required"),

  motivation: Yup.string()
    .min(20, "Please provide more detail about your motivation")
    .max(1000, "Motivation must be less than 1000 characters")
    .required("Motivation is required"),

  // Background Information
  backgroundStory: Yup.string()
    .min(50, "Please provide more detail about your background")
    .max(2000, "Background story must be less than 2000 characters")
    .required("Background story is required"),

  achievements: Yup.string().max(
    1000,
    "Achievements must be less than 1000 characters",
  ),

  additionalNotes: Yup.string().max(
    1000,
    "Additional notes must be less than 1000 characters",
  ),
});

export type OnboardingFormData = Yup.InferType<typeof onboardingSchema>;
