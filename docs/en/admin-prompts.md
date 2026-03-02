# Prompt Management

> Control the core behavior of the AI, setting its mindset and evaluation standards.

## Overview
Prompts are the core instructions that drive the entire AI Coach platform. This feature allows administrators to adjust how the AI role-plays customers, defines reporting criteria, and applies system rules.

> Access is restricted to Administrators only.

## Interface Structure
The management page is divided into two main sections:
- **Toolbar & Filters (Top/Left)**:
  - **Company/Department Dropdown:** Filter prompts that apply specifically to an organization (e.g., 台灣國泰人壽).
  - **Version Dropdown:** Select the active prompt version you are working on (e.g., v1.0, v2.0 - Active).
- **List & Editor**: A panel displaying the list of specific Prompts and a large text editor for the prompt source code.

---

## Prompt Card Details
Each prompt card displays:
- **Name**: A unique identifier within the system.
- **Category**: Classification of the prompt (e.g., System, Character, Judge, Auto-Suggestions).
- **Description**: A brief summary of its function.
- **Status**: Indicates whether the Prompt is part of the "Active/In-Use" version.

The editor provides a large text area for administrators to securely type and update instructions directly.

---

## Variable System
Within the Prompt content, you can utilize dynamic variables enclosed in curly braces `{...}` to instruct the system to automatically inject actual runtime data:
For example:
- `{question}`: The user's latest query or message.
- `{character_detail}`: The auto-generated customer persona background.
- `{conversation_history}`: The transcript of the chat up to the current instance.
- `{stage_description}`: Descriptions of the currently applicable sales stages.

---

## Version Control
The system permits you to safely edit and test Prompts without impacting live sessions:
- **Add Version**: Duplicates all Prompts from the current version into a new draft.
- **Save Changes**: Edits are contained exclusively within the selected version.
- **Publish**: Promotes the draft version into the live production environment as the Active version. Note: Once published, the new version applies strictly to *new* practice sessions moving forward.
