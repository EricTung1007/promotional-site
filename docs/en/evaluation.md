# Evaluation & Feedback

> Gain complete, specific professional feedback ranging from overall performance down to line-by-line analysis.

## Overview
After each practice session, AI Coach automatically generates a detailed evaluation report. It covers three levels of analysis:
1. **Stage Evaluation** — Completion of sales stages and improvement suggestions.
2. **Comprehensive Review** — Overall performance summary and learning direction.
3. **Line-by-line Feedback** — Detailed analysis of each message.

---

## Evaluation Report Interface

When you open a report (via the "Review" button in History), the layout is structured into key areas:

### Toolbar & View Toggles
- **Back Button:** Return to the History list or Dashboard.
- **Language Switcher:** Change the report language.
- **View Toggle Button:** A prominent button to switch between two main views:
  - **Comprehensive Review (Default)**: View Stage Evaluation and the overall Comprehensive Review.
  - **View Sentence-by-sentence Evaluation (檢視逐句評價)**: Deep dive into message-by-message analysis.

### Persona Profile Context (Right Panel)
Constantly visible to help you cross-reference the AI's critique with the customer's background:
- **MBTI Personality Type:** e.g., INTJ (Architect). Crucial for understanding the user's decision-making style.
- **Customer Details:** Education, Marital Status, Income Bracket.
- **Relationship:** The current relationship context between the agent and customer.

---

## Report Generation Process

### Trigger 
When you click "End Conversation", the system will:
Close chat → Trigger 3 background tasks:
- Stage Evaluation Gen
- Comprehensive Review Gen
- Call Summary Gen

> Note: Line-by-line feedback is generated in the background *during* the chat, right after each message.

### UI Status
Generation typically takes 30 seconds to 2 minutes.

---

## 1. Stage Evaluation
The AI reviews the entire conversation at once against administrator-defined stage criteria to determine which sales stages you successfully reached.

### Output
For each reached stage, an evaluation card provides analysis. If you failed to advance to the next stage, a "Reason for Not Advancing" section explains what you need to improve.

---

## 2. Comprehensive Review
Unlike Stage Evaluation, the Comprehensive Review analyzes your performance from a soft-skills perspective: overall conversation quality, sales skills employed, relationship building, and professional knowledge displays.

### Output
A Markdown-formatted report containing:
- Performance Overview
- Strengths Review
- Areas for Improvement
- Actionable Next Steps

---

## 3. Line-by-line Feedback
The most granular level of feedback, analyzing the pros and cons of every single message you sent. Switch to this mode using the "View Sentence-by-sentence Evaluation" button.

### How it Works
This generates asynchronously during practice. When switching to the Line-by-line mode, you can review:
- **AI Inner Thoughts:** What the customer was really thinking but didn't say aloud.
- Detailed critiques of your messaging: Phrasing, stage effectiveness, and tonality.

---

## Grading the AI's Evaluation
Below the Comprehensive Review and each Line-by-line item, you can Thumbs Up / Thumbs Down the AI's critique. This feedback helps improve the AI system iteratively.

## Practice Tips
1. Start with the **Stage Evaluation** to see how far you got.
2. Read the **Reason for Not Advancing** for immediate bottlenecks.
3. Check the **Comprehensive Review** for overall direction.
4. Dive into **Line-by-line Feedback** and read the **AI Inner Thoughts** to understand customer psychology better, cross-referencing their MBTI type.
