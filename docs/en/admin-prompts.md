# Prompt Management

> Control AI behavior to create the most realistic practice experience.

## Overview
Prompts are the core instructions driving AI behavior. This feature allows administrators to adjust AI responses, evaluation criteria, and persona generation rules to meet company training goals.

> Only available to administrators with Prompt Management permissions.

## Page Structure
- **Title Bar**: Company/Department selection, Version selection, and action buttons.
- **Prompt Card List**: Displays all prompts under the current version.
- **Edit Panel**: Right-side sliding panel providing the detailed editing interface.

---

## Prompt Card Details
Each card displays:
- **Name**: Unique identifier
- **Description**: Brief summary
- **Category Tag**: Category (e.g., Character, Judge, System, etc.)
- **"In Use" Tag**: Appears if the prompt is currently published
- **Edit / Delete**: Action buttons

---

## Editing Prompts
Click **"Edit"** to open the side panel.

### Fields
- **Name**: Unique identifier (Required).
- **Category**: Dropdown selection.
- **Description**: Prompt functionality.
- **Content**: Large text editor for the full prompt instructions.

### Variable System
Use curly braces `{...}` to insert dynamic variables.
Examples: `{question}`, `{character_detail}`, `{conversation_history}`, `{stage_description}`.

---

## Version Management
Allows editing and testing prompts without affecting the live environment.

- **Add Version**: Duplicates prompts from the current version into a new one.
- **Publish**: Sets the selected version as the active version.
- Note: Only the "Published" version applies to new sessions. Ongoing sessions continue to use the older version.

---

## Best Practices
1. **Always create a new version** rather than modifying the active version directly.
2. **Test thoroughly** before publishing.
