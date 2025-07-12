import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import styled from "styled-components";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import {
  FormGroup,
  Input,
  Textarea,
  Select,
  ErrorMessage,
} from "../components/ui/FormComponents";
import {
  onboardingSchema,
  OnboardingFormData,
} from "../utils/validationSchemas";

const OnboardingContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 4rem 0;
  position: relative;
  overflow: hidden;
`;

const FormContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  background: #ffffff;

  padding: 3rem;
  border-radius: 32px;
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.15),
    0 0 100px rgba(102, 126, 234, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 4rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 2px;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 640px) {
    font-size: 2rem;
  }
`;

const IntroText = styled.p`
  font-size: 1.2rem;
  color: #475569;
  text-align: center;
  margin-bottom: 3rem;
  line-height: 1.6;
  font-weight: 500;
  position: relative;
  z-index: 2;

  @media (max-width: 640px) {
    font-size: 1.1rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  z-index: 2;
`;

const FieldNumber = styled.span`
  display: inline-block;
  background: #667eea;
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 32px;
  margin-right: 1rem;
  flex-shrink: 0;
`;

const LabelWithNumber = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.75rem;
`;

const LabelText = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #0f172a;
  line-height: 1.4;

  &.required::after {
    content: " *";
    color: #ef4444;
  }
`;

const ConditionalField = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "block" : "none")};
  margin-top: 1.5rem;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 12px;
  border-left: 4px solid #667eea;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 12px;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 6px;
  margin-bottom: 3rem;
  overflow: hidden;
  position: relative;
`;

const ProgressFill = styled.div<{ progress: number }>`
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  border-radius: 6px;
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  width: ${({ progress }) => progress}%;
  position: relative;
`;

const ClosingText = styled.div`
  background: #f8fafc;
  padding: 2rem;
  border-radius: 12px;
  margin: 2rem 0;
  text-align: center;
  font-size: 1.1rem;
  color: #475569;
  line-height: 1.6;
  font-weight: 500;
  border: 1px solid #e2e8f0;
`;

const SaveStatus = styled.div`
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
`;

const OnboardingPortal: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [saveStatus, setSaveStatus] = useState<string>("");

  const formik = useFormik<OnboardingFormData>({
    initialValues: {
      fullName: "",
      email: "",
      location: "",
      businessStatus: "",
      businessIdeaDescription: "",
      naturalSkills: "",
      interestsPassions: "",
      externalValidation: "",
      relevantExperience: "",
      mainGoal: "",
      mainGoalOther: "",
      biggestChallenge: "",
      biggestChallengeOther: "",
      idealOutcome: "",
      motivation: "",
      backgroundStory: "",
      achievements: "",
      additionalNotes: "",
    },
    validationSchema: onboardingSchema,
    onSubmit: async (values) => {
      try {
        setIsSubmitting(true);
        setSubmitError(null);

        localStorage.removeItem("onboarding-form-data");

        await new Promise((resolve) => setTimeout(resolve, 2000));

        console.log("Form submitted:", values);

        const calendlyUrl =
          import.meta.env.VITE_CALENDLY_URL || "https://calendly.com";
        window.location.href = calendlyUrl;
      } catch (error) {
        console.error("Submission error:", error);
        setSubmitError(
          "There was an error submitting your information. Please try again.",
        );
        window.scrollTo({ top: 0, behavior: "smooth" });
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  useEffect(() => {
    const savedData = localStorage.getItem("onboarding-form-data");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        formik.setValues(parsedData);
        setSaveStatus("Previous progress loaded");
        setTimeout(() => setSaveStatus(""), 3000);
      } catch (error) {
        console.error("Error loading saved data:", error);
      }
    }
  }, []);

  useEffect(() => {
    const saveData = () => {
      localStorage.setItem(
        "onboarding-form-data",
        JSON.stringify(formik.values),
      );
      setSaveStatus("Progress saved");
      setTimeout(() => setSaveStatus(""), 2000);
    };

    const timeoutId = setTimeout(saveData, 3000);
    return () => clearTimeout(timeoutId);
  }, [formik.values]);

  const totalFields = Object.keys(formik.initialValues).length;
  const filledFields = Object.values(formik.values).filter(
    (value) => value && value.toString().trim() !== "",
  ).length;
  const progress = Math.round((filledFields / totalFields) * 100);

  useEffect(() => {
    if (formik.submitCount > 0 && Object.keys(formik.errors).length > 0) {
      const firstErrorField = Object.keys(formik.errors)[0];
      const element = document.getElementById(firstErrorField);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [formik.submitCount, formik.errors]);

  return (
    <OnboardingContainer>
      <Container>
        <FormContainer>
          <Title>🎯 Onboarding Form: Your Custom Business Blueprint</Title>
          <IntroText>
            Answer these questions as honestly as possible—this helps me build
            your plan to fit you personally. All your answers are 100%
            confidential.
          </IntroText>

          <ProgressBar>
            <ProgressFill progress={progress} />
          </ProgressBar>

          {saveStatus && <SaveStatus>{saveStatus}</SaveStatus>}

          <Form onSubmit={formik.handleSubmit}>
            {/* 1. Full Name */}
            <FormGroup>
              <LabelWithNumber>
                <FieldNumber>1</FieldNumber>
                <LabelText className="required">Full Name</LabelText>
              </LabelWithNumber>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={!!(formik.touched.fullName && formik.errors.fullName)}
              />
              {formik.touched.fullName && formik.errors.fullName && (
                <ErrorMessage>{formik.errors.fullName}</ErrorMessage>
              )}
            </FormGroup>

            {/* 2. Email Address */}
            <FormGroup>
              <LabelWithNumber>
                <FieldNumber>2</FieldNumber>
                <LabelText className="required">Email Address</LabelText>
              </LabelWithNumber>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={!!(formik.touched.email && formik.errors.email)}
              />
              {formik.touched.email && formik.errors.email && (
                <ErrorMessage>{formik.errors.email}</ErrorMessage>
              )}
            </FormGroup>

            {/* 3. Location */}
            <FormGroup>
              <LabelWithNumber>
                <FieldNumber>3</FieldNumber>
                <LabelText className="required">
                  Where are you based? (City & Country)
                </LabelText>
              </LabelWithNumber>
              <Input
                id="location"
                name="location"
                type="text"
                placeholder="e.g., London, UK or New York, USA"
                value={formik.values.location}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={!!(formik.touched.location && formik.errors.location)}
              />
              {formik.touched.location && formik.errors.location && (
                <ErrorMessage>{formik.errors.location}</ErrorMessage>
              )}
            </FormGroup>

            {/* 4. Business Status */}
            <FormGroup>
              <LabelWithNumber>
                <FieldNumber>4</FieldNumber>
                <LabelText className="required">
                  Do you already have a business idea or are you starting from
                  scratch?
                </LabelText>
              </LabelWithNumber>
              <Select
                id="businessStatus"
                name="businessStatus"
                value={formik.values.businessStatus}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  !!(
                    formik.touched.businessStatus &&
                    formik.errors.businessStatus
                  )
                }
              >
                <option value="">Select your status</option>
                <option value="have-idea-not-started">
                  I have an idea but haven't started
                </option>
                <option value="started-but-stuck">
                  I have started but feel stuck
                </option>
                <option value="starting-from-scratch">
                  I'm starting from scratch
                </option>
              </Select>
              {formik.touched.businessStatus &&
                formik.errors.businessStatus && (
                  <ErrorMessage>{formik.errors.businessStatus}</ErrorMessage>
                )}
            </FormGroup>

            {/* 5. Business Idea Description - Conditional */}
            <ConditionalField
              show={formik.values.businessStatus === "have-idea-not-started"}
            >
              <FormGroup>
                <LabelWithNumber>
                  <FieldNumber>5</FieldNumber>
                  <LabelText
                    className={
                      formik.values.businessStatus === "have-idea-not-started"
                        ? "required"
                        : ""
                    }
                  >
                    If you have an idea, briefly describe it here.
                  </LabelText>
                </LabelWithNumber>
                <Textarea
                  id="businessIdeaDescription"
                  name="businessIdeaDescription"
                  placeholder="Describe your business idea..."
                  value={formik.values.businessIdeaDescription || ""}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    !!(
                      formik.touched.businessIdeaDescription &&
                      formik.errors.businessIdeaDescription
                    )
                  }
                  rows={4}
                />
                {formik.touched.businessIdeaDescription &&
                  formik.errors.businessIdeaDescription && (
                    <ErrorMessage>
                      {formik.errors.businessIdeaDescription}
                    </ErrorMessage>
                  )}
              </FormGroup>
            </ConditionalField>

            {/* 6. Natural Skills */}
            <FormGroup>
              <LabelWithNumber>
                <FieldNumber>6</FieldNumber>
                <LabelText className="required">
                  What are you naturally good at? (Skills, talents, things
                  people ask you about)
                </LabelText>
              </LabelWithNumber>
              <Textarea
                id="naturalSkills"
                name="naturalSkills"
                placeholder="e.g., Writing, teaching, organizing, problem-solving, photography..."
                value={formik.values.naturalSkills}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  !!(
                    formik.touched.naturalSkills && formik.errors.naturalSkills
                  )
                }
                rows={4}
              />
              {formik.touched.naturalSkills && formik.errors.naturalSkills && (
                <ErrorMessage>{formik.errors.naturalSkills}</ErrorMessage>
              )}
            </FormGroup>

            {/* 7. Interests/Passions */}
            <FormGroup>
              <LabelWithNumber>
                <FieldNumber>7</FieldNumber>
                <LabelText className="required">
                  What are your interests/passions? (What could you talk about
                  for hours?)
                </LabelText>
              </LabelWithNumber>
              <Textarea
                id="interestsPassions"
                name="interestsPassions"
                placeholder="e.g., Fitness, cooking, travel, technology, personal development..."
                value={formik.values.interestsPassions}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  !!(
                    formik.touched.interestsPassions &&
                    formik.errors.interestsPassions
                  )
                }
                rows={4}
              />
              {formik.touched.interestsPassions &&
                formik.errors.interestsPassions && (
                  <ErrorMessage>{formik.errors.interestsPassions}</ErrorMessage>
                )}
            </FormGroup>

            {/* 8. External Validation */}
            <FormGroup>
              <LabelWithNumber>
                <FieldNumber>8</FieldNumber>
                <LabelText className="required">
                  What do people come to you for help with? (What do
                  friends/family/colleagues ask your advice about?)
                </LabelText>
              </LabelWithNumber>
              <Textarea
                id="externalValidation"
                name="externalValidation"
                placeholder="e.g., Career advice, fitness tips, tech problems, relationship advice..."
                value={formik.values.externalValidation}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  !!(
                    formik.touched.externalValidation &&
                    formik.errors.externalValidation
                  )
                }
                rows={4}
              />
              {formik.touched.externalValidation &&
                formik.errors.externalValidation && (
                  <ErrorMessage>
                    {formik.errors.externalValidation}
                  </ErrorMessage>
                )}
            </FormGroup>

            {/* 9. Relevant Experience */}
            <FormGroup>
              <LabelWithNumber>
                <FieldNumber>9</FieldNumber>
                <LabelText>
                  What relevant experience do you have? (Work, education, life
                  experience)
                </LabelText>
              </LabelWithNumber>
              <Textarea
                id="relevantExperience"
                name="relevantExperience"
                placeholder="Describe your background, work experience, education, or any relevant life experiences..."
                value={formik.values.relevantExperience || ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  !!(
                    formik.touched.relevantExperience &&
                    formik.errors.relevantExperience
                  )
                }
                rows={4}
              />
              {formik.touched.relevantExperience &&
                formik.errors.relevantExperience && (
                  <ErrorMessage>
                    {formik.errors.relevantExperience}
                  </ErrorMessage>
                )}
            </FormGroup>

            {/* 10. Main Goal */}
            <FormGroup>
              <LabelWithNumber>
                <FieldNumber>10</FieldNumber>
                <LabelText className="required">
                  What's your main goal with this business?
                </LabelText>
              </LabelWithNumber>
              <Select
                id="mainGoal"
                name="mainGoal"
                value={formik.values.mainGoal}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={!!(formik.touched.mainGoal && formik.errors.mainGoal)}
              >
                <option value="">Select your main goal</option>
                <option value="replace-income">
                  Replace my current income
                </option>
                <option value="extra-income">
                  Generate extra income on the side
                </option>
                <option value="financial-freedom">
                  Achieve financial freedom
                </option>
                <option value="location-independence">
                  Work from anywhere
                </option>
                <option value="help-people">Help people solve problems</option>
                <option value="other">Other</option>
              </Select>
              {formik.touched.mainGoal && formik.errors.mainGoal && (
                <ErrorMessage>{formik.errors.mainGoal}</ErrorMessage>
              )}
            </FormGroup>

            {/* 10b. Main Goal Other - Conditional */}
            <ConditionalField show={formik.values.mainGoal === "other"}>
              <FormGroup>
                <LabelWithNumber>
                  <FieldNumber>10b</FieldNumber>
                  <LabelText
                    className={
                      formik.values.mainGoal === "other" ? "required" : ""
                    }
                  >
                    Please describe your main goal
                  </LabelText>
                </LabelWithNumber>
                <Input
                  id="mainGoalOther"
                  name="mainGoalOther"
                  type="text"
                  placeholder="Describe your main goal..."
                  value={formik.values.mainGoalOther || ""}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    !!(
                      formik.touched.mainGoalOther &&
                      formik.errors.mainGoalOther
                    )
                  }
                />
                {formik.touched.mainGoalOther &&
                  formik.errors.mainGoalOther && (
                    <ErrorMessage>{formik.errors.mainGoalOther}</ErrorMessage>
                  )}
              </FormGroup>
            </ConditionalField>

            {/* 11. Biggest Challenge */}
            <FormGroup>
              <LabelWithNumber>
                <FieldNumber>11</FieldNumber>
                <LabelText className="required">
                  What's your biggest challenge right now?
                </LabelText>
              </LabelWithNumber>
              <Select
                id="biggestChallenge"
                name="biggestChallenge"
                value={formik.values.biggestChallenge}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  !!(
                    formik.touched.biggestChallenge &&
                    formik.errors.biggestChallenge
                  )
                }
              >
                <option value="">Select your biggest challenge</option>
                <option value="no-idea-where-start">
                  Don't know where to start
                </option>
                <option value="too-many-ideas">
                  Too many ideas, can't choose
                </option>
                <option value="no-time">Not enough time</option>
                <option value="no-money">No money to invest</option>
                <option value="fear-failure">Fear of failure</option>
                <option value="tech-skills">Lack of technical skills</option>
                <option value="marketing">Don't know how to market</option>
                <option value="other">Other</option>
              </Select>
              {formik.touched.biggestChallenge &&
                formik.errors.biggestChallenge && (
                  <ErrorMessage>{formik.errors.biggestChallenge}</ErrorMessage>
                )}
            </FormGroup>

            {/* 11b. Biggest Challenge Other - Conditional */}
            <ConditionalField show={formik.values.biggestChallenge === "other"}>
              <FormGroup>
                <LabelWithNumber>
                  <FieldNumber>11b</FieldNumber>
                  <LabelText
                    className={
                      formik.values.biggestChallenge === "other"
                        ? "required"
                        : ""
                    }
                  >
                    Please describe your biggest challenge
                  </LabelText>
                </LabelWithNumber>
                <Input
                  id="biggestChallengeOther"
                  name="biggestChallengeOther"
                  type="text"
                  placeholder="Describe your biggest challenge..."
                  value={formik.values.biggestChallengeOther || ""}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    !!(
                      formik.touched.biggestChallengeOther &&
                      formik.errors.biggestChallengeOther
                    )
                  }
                />
                {formik.touched.biggestChallengeOther &&
                  formik.errors.biggestChallengeOther && (
                    <ErrorMessage>
                      {formik.errors.biggestChallengeOther}
                    </ErrorMessage>
                  )}
              </FormGroup>
            </ConditionalField>

            {/* 12. Ideal Outcome */}
            <FormGroup>
              <LabelWithNumber>
                <FieldNumber>12</FieldNumber>
                <LabelText className="required">
                  If this business was wildly successful, what would your life
                  look like in 12 months?
                </LabelText>
              </LabelWithNumber>
              <Textarea
                id="idealOutcome"
                name="idealOutcome"
                placeholder="Describe your ideal life 12 months from now..."
                value={formik.values.idealOutcome}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  !!(formik.touched.idealOutcome && formik.errors.idealOutcome)
                }
                rows={4}
              />
              {formik.touched.idealOutcome && formik.errors.idealOutcome && (
                <ErrorMessage>{formik.errors.idealOutcome}</ErrorMessage>
              )}
            </FormGroup>

            {/* 13. Motivation */}
            <FormGroup>
              <LabelWithNumber>
                <FieldNumber>13</FieldNumber>
                <LabelText className="required">
                  What's driving you to start this business? (What's your
                  'why'?)
                </LabelText>
              </LabelWithNumber>
              <Textarea
                id="motivation"
                name="motivation"
                placeholder="e.g., Financial freedom, family security, career change, personal fulfillment..."
                value={formik.values.motivation}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  !!(formik.touched.motivation && formik.errors.motivation)
                }
                rows={4}
              />
              {formik.touched.motivation && formik.errors.motivation && (
                <ErrorMessage>{formik.errors.motivation}</ErrorMessage>
              )}
            </FormGroup>

            {/* 14. Background Story */}
            <FormGroup>
              <LabelWithNumber>
                <FieldNumber>14</FieldNumber>
                <LabelText className="required">
                  Tell me a bit about your background and current situation
                </LabelText>
              </LabelWithNumber>
              <Textarea
                id="backgroundStory"
                name="backgroundStory"
                placeholder="Your current job, life situation, family status, anything relevant..."
                value={formik.values.backgroundStory}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  !!(
                    formik.touched.backgroundStory &&
                    formik.errors.backgroundStory
                  )
                }
                rows={5}
              />
              {formik.touched.backgroundStory &&
                formik.errors.backgroundStory && (
                  <ErrorMessage>{formik.errors.backgroundStory}</ErrorMessage>
                )}
            </FormGroup>

            {/* 15. Achievements */}
            <FormGroup>
              <LabelWithNumber>
                <FieldNumber>15</FieldNumber>
                <LabelText>
                  What are you most proud of achieving in your life so far?
                </LabelText>
              </LabelWithNumber>
              <Textarea
                id="achievements"
                name="achievements"
                placeholder="Personal or professional achievements you're proud of..."
                value={formik.values.achievements || ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  !!(formik.touched.achievements && formik.errors.achievements)
                }
                rows={4}
              />
              {formik.touched.achievements && formik.errors.achievements && (
                <ErrorMessage>{formik.errors.achievements}</ErrorMessage>
              )}
            </FormGroup>

            {/* 16. Additional Notes */}
            <FormGroup>
              <LabelWithNumber>
                <FieldNumber>16</FieldNumber>
                <LabelText>Anything else you'd like me to know?</LabelText>
              </LabelWithNumber>
              <Textarea
                id="additionalNotes"
                name="additionalNotes"
                placeholder="Any additional information, questions, or concerns..."
                value={formik.values.additionalNotes || ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  !!(
                    formik.touched.additionalNotes &&
                    formik.errors.additionalNotes
                  )
                }
                rows={4}
              />
              {formik.touched.additionalNotes &&
                formik.errors.additionalNotes && (
                  <ErrorMessage>{formik.errors.additionalNotes}</ErrorMessage>
                )}
            </FormGroup>

            <ClosingText>
              Thanks for sharing all this detail. Once you submit, you'll be
              taken straight to my calendar to book your 1-on-1 call so we can
              get your blueprint started.
            </ClosingText>

            {submitError && <ErrorMessage>{submitError}</ErrorMessage>}

            <Button
              type="submit"
              size="lg"
              fullWidth
              loading={isSubmitting}
              disabled={isSubmitting}
            >
              Submit & Book Your Call
            </Button>
          </Form>
        </FormContainer>
      </Container>
    </OnboardingContainer>
  );
};

export default OnboardingPortal;
