# Frequently Asked Questions (FAQ)

> Encountering issues? Find answers here.

## Table of Contents

- [Login & Accounts](#login--accounts)
- [Practice Sessions](#practice-sessions)
- [Evaluation Reports](#evaluation-reports)
- [Practice History](#practice-history)
- [Knowledge Assistant](#knowledge-assistant)
- [Administrator Features](#administrator-features)
- [System & Performance](#system--performance)
- [Error Message Quick Reference](#error-message-quick-reference)

---

## Login & Accounts

---

 I cannot log into the system?

**A:** Please check the following items in order:

1. Confirm you are using a company account (Google or Microsoft), not a personal account.
2. Confirm your account has been added to the system by an administrator.
3. Confirm your account status is "Active" (not "Disabled").
4. Try clearing your browser cache and logging in again.
5. If the issue persists, contact your company administrator.

---

 It says "Account Disabled" after logging in?

**A:** Your account has been disabled by an administrator. Please contact your administrator to change your account status back to "Active".

---

 Why can't I see certain features (like admin settings or the knowledge assistant) after logging in?

**A:** Feature visibility depends on your role permissions. Different roles have access to different features:

| Role | Available Features |
| --- | --- |
| User | Conversation Practice, Evaluation Reports, Practice History, Dashboard |
| Admin | All above + User Management, Prompt Management, Stage Management, Knowledge Base Management |

If you need additional permissions, please contact an administrator to adjust your role settings.

---

 How do I log out?

**A:** Click the logout icon in the top right corner of the page (an arrow pointing right), and confirm "Are you sure you want to log out?" to log out.

---

 How do I switch languages?

**A:** Click the language switcher in the top right corner of the page and select your preferred language (Traditional Chinese / Vietnamese / English). The interface will update immediately after switching.

---

## Practice Sessions

---

 What is the difference between "Random Persona" and "Custom Persona"?

**A:**

| Mode | Description |
| --- | --- |
| Random Persona | The system generates a completely random customer persona (age, occupation, gender, income, etc.), ideal for quickly starting a practice session. |
| Custom Persona | You can specify some or all customer attributes (e.g., setting "high income, married"). Unspecified attributes are randomly filled by the system. |

---

 Do I have to fill out all fields when customizing a persona?

**A:** No. All fields are optional. You can set only the attributes you care about, and the AI will automatically fill in the rest. For example, if you only set "age 35, married, high income", the system will automatically generate other attributes.

---

 Does the MBTI personality type affect the AI customer's behavior?

**A:** Yes. The MBTI type significantly affects the AI customer's communication style, decision-making process, and reaction patterns. For example:
- **ISTJ** (Logistician) customers will value data and details more.
- **ENFP** (Campaigner) customers will focus more on emotional connection.
- **INTJ** (Architect) customers will cut straight to the point.

You can click the tooltip icon next to the "Personality" field in the persona setup panel to view detailed descriptions of each type.

---

 Why does persona generation take so long?

**A:** Persona generation usually takes a few seconds. If it takes longer than 30 seconds, it may be a network issue. Please try refreshing the page and try again.

---

 Why are the AI customer's responses unreasonable during the conversation?

**A:** Possible reasons and suggestions:

1. **Extreme persona settings** — Try using a more reasonable combination of attributes.
2. **Unclear conversation context** — Try communicating with more explicit expressions.
3. **Prompts need adjustment** — Report to an administrator to review and adjust the AI Prompt settings.

---

 Why can't I send a message, and it shows a security warning?

**A:** The system has built-in content security detection. Messages containing the following content will be blocked:

- Personal Information (phone numbers, addresses, ID numbers, etc.)
- Content attempting to bypass system security restrictions
- Inappropriate or high-risk content
- Malicious links

Please modify your message and send it again. These checks ensure the safety of the practice environment.

---

 Can I continue an unfinished practice session later?

**A:** Yes. Unfinished sessions can be resumed via:

- The "Continue Practice" button in Recent Records on the dashboard.
- The "Continue Practice" button in Practice History.

When continuing, the AI customer will have a vague impression of the previous conversation.

---

 Can I practice with the exact same customer again?

**A:** Yes. Click "Retry" in the dashboard or practice history to start a new conversation using the exact same customer persona settings. This is very helpful for comparing the effectiveness of different strategies.

---

 When should I end the conversation?

**A:** We recommend ending the session when:

1. You have achieved your intended practice goals.
2. The AI customer expresses a desire to end the conversation (a system prompt will appear).
3. You feel you have reached the learning objective.
4. You want to view the current evaluation results.

---

## Evaluation Reports

---

 Why is my evaluation report stuck generating?

**A:** Report generation usually takes 30 seconds to 2 minutes. If it takes longer than 5 minutes:

1. Try refreshing the page.
2. Wait a moment and check again.
3. If the issue persists, contact an administrator.

Each section of the report (stage evaluation, comprehensive review, etc.) is generated independently, so some sections may finish before others.

---

 What is the difference between "Comprehensive Review" and "Line-by-line Feedback"?

**A:**

| Mode | Description |
| --- | --- |
| Comprehensive Review | Overall analysis, including stage completion status, overall performance evaluation, improvement suggestions, etc. |
| Line-by-line Feedback | Detailed analysis for each conversation turn (your message + AI response), providing specific feedback on communication skills. |

We recommend reading the "Comprehensive Review" first for an overall understanding, then switching to "Line-by-line Feedback" to find specific conversational details to improve.

---

 What are "AI Inner Thoughts"?

**A:** AI Inner Thoughts show the AI's simulated psychological activities of the customer after receiving your message. This helps you understand the customer's true thoughts at each moment, allowing you to adjust your communication strategy next time.

---

 Can I provide feedback if I'm not satisfied with the evaluation results?

**A:** Yes. There is a rating function below each evaluation section:

- **Positive** — Found the evaluation helpful (optional comment can be added).
- **Neutral** — Default state, no specific opinion.
- **Negative** — Feel the evaluation needs improvement (reason must be provided).

Your feedback helps the system continuously optimize evaluation quality.

---

 Why does it say "Did not reach any evaluation stage"?

**A:** This means the AI determined that your conversation did not meet the standards for even the first sales stage. Possible reasons:

- Too few conversation turns.
- Insufficient ice-breaking/trust-building behavior.
- Conversation deviated from the sales topic.

We recommend reviewing the specific feedback in the Line-by-line evaluation for directions on improvement.

---

## Practice History

---

 Why can't I find any records after filtering?

**A:** Please note the following:

1. Confirm the date range is set correctly.
2. Try reducing the number of filter criteria.
3. Click "Clear All" to remove all filters and check if any records exist.
4. Confirm the criteria in the active filter tags match your expectations.

If no records are found, it means no practice sessions occurred under those conditions.

---

 Why is the "Continue Practice" button disabled?

**A:** Only sessions with an "In Progress" status can be continued. If a session has ended (manually or automatically by the system), you can only use "Retry" to start a new conversation.

---

## Knowledge Assistant

---

 Why are the Knowledge Assistant's answers inaccurate or incomplete?

**A:** The quality of the Knowledge Assistant's answers depends on the following factors:

1. **Knowledge Base Content** — Answers are based on files uploaded by administrators. If the knowledge base lacks relevant information, the answer may not be precise enough.
2. **Problem Description** — Try phrasing your question differently; this might yield better results.
3. **Content Freshness** — If the information is outdated, please contact an administrator to update the knowledge base.

> The Knowledge Assistant's answers are for reference only. Please refer to official company documents for actual operations.

---

 Why can't I see the Knowledge Assistant icon?

**A:** Your account may lack read permissions for the knowledge base. Please contact an administrator to verify your permission settings.

---

 Where did my chat history go?

**A:** The Knowledge Assistant's chat history is stored locally in your browser. The following actions will cause the history to be cleared:

- Clearing browser data/cache.
- Clicking the "Clear Chat" button.
- Using private/incognito browsing mode.
- Switching browsers or devices.

---

## Administrator Features

---

 Why did batch importing users fail?

**A:** Common reasons:

| Reason | Solution |
| --- | --- |
| File is not in CSV format | Ensure it is saved as a .csv file. |
| CSV column order is incorrect | Download the template and fill it according to the template format. |
| Duplicate Emails | Ensure there are no duplicate emails. |
| Missing required fields | Check that all required data in each row is complete. |
| Company/Department code does not exist | Verify you are using the correct company and department codes. |

The system provides a detailed error report, including the line number and specific reason for each failed entry.

---

 When do changes to Prompts take effect?

**A:** After modifying a Prompt, you must "Publish" (activate) that version for it to take effect. Once effective:

- **New Conversations** — Will immediately use the new Prompt version.
- **Ongoing Conversations** — Will not be affected and will continue using the previous version.

---

 Will deleting a stage affect completed practice sessions?

**A:** Deleting a stage will not affect the data of completed practice sessions, but it may affect how that stage is displayed in evaluation reports. It's recommended to confirm no ongoing sessions are using the stage before deleting it.

---

 How do I restore a deleted user?

**A:** The system uses a soft delete mechanism. Deleted user data remains in the database. To restore, please contact the system administrator or technical team.

---

## System & Performance

---

 Why is the system loading so slowly?

**A:** We recommend checking the following:

1. Is your network connection stable?
2. Are you using the latest version of a supported browser?
3. Try closing other resource-intensive tabs.
4. Clear your browser cache and try again.

---

 It says "Server error occurred, please try again later"?

**A:** This indicates a temporary anomaly in the backend service. Recommendations:

1. Wait a few minutes and try again.
2. If the issue persists for over 30 minutes, contact an administrator or IT department.
3. Do not repeatedly retry, as this may increase server load.

---

 Which browsers are supported by the system?

**A:**

| Browser | Supported Versions |
| --- | --- |
| Google Chrome | Latest Version |
| Microsoft Edge | Latest Version |
| Mozilla Firefox | Latest Version |
| Apple Safari | Latest Version |

We recommend using Chrome or Edge for the best experience.

---

## Error Message Quick Reference

| Error Message | Description | Handling Method |
| --- | --- | --- |
| Authentication failed, please log in and try again | Login session expired | Log in again |
| Unexpected access, please try again later or contact admin | Insufficient permissions | Verify account permissions, contact admin |
| Requests too frequent, please try again later | Operation rate limit exceeded | Wait a few minutes and try again |
| Server error occurred, please try again later | Backend service anomaly | Wait and retry or contact IT |
| Network connection error | Network interruption | Check network connection |
| Resource not found | The requested resource does not exist | Verify the operation target is correct |
| Operation failed | General operation anomaly | Retry or contact admin |
| Input data incorrect | Form validation failed | Check if the input content meets format requirements |
| Contains unsafe characters | XSS protection triggered | Remove special characters and retry |

---

## Still Have Questions?

If the above FAQs cannot solve your problem:

1. Contact your company's system administrator.
2. Submit a service request to the IT department.
3. Provide the following information to expedite troubleshooting:
   - Your account email
   - The time the issue occurred
   - A detailed description of the issue
   - Screenshots (if any)
   - The complete content of the error message
