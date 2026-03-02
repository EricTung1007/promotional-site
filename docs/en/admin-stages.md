# Stage Management

> Define sales practice stages, setting evaluation standards and objectives.

## Overview
Sales stages are the foundation of the practice sessions. Each stage represents a crucial step in the conversation; the AI will monitor and evaluate the user based on this configuration.

> Access is restricted to Administrators only.

## Interface Structure
The management page displays a list of stages ordered numerically (typically 1 to 5):
- **Card Title**: Format "Stage N: {Stage Name}" (supports bilingual display).
- **Customer Status (Description)**: The expected psychological state or behavior of the customer during this step.
- **Action Buttons**: Icons to Edit (pencil) or Delete (trash bin) the stage.

---

## Stage Attributes

### Stage Number
- Determines the sequential order. Must be a positive integer and unique. Cannot be modified after creation.

### Stage Name
- The official name of the sales step (e.g., 1. Ice-breaking, 2. Needs Discovery, 3. Closing). Bilingual input supported.

### Current Customer Status
- Describes the psychological state of the customer. The AI uses this as a benchmark to assess whether the agent has successfully overcome this specific psychological barrier.

---

## Operations
- **Add Stage**: Click the Add button to input Number, Name, and Description in the designated languages.
- **Edit**: Click the edit icon on the card (Note: Stage Number cannot be edited).
- **Delete**: Click the delete icon. Warning: Deleting a stage might impact the evaluation reports of previous practice histories.

---

## Design Recommendations
1. **Logical Progression**: Order from easiest to hardest, following a natural sales flow.
2. **Clear Objectives**: Each stage should have specific, measurable goals for the AI to score effectively.
3. **Realistic Descriptions**: Customer psychological states should accurately reflect reality.
4. **Appropriate Quantity**: Between 3 to 7 stages is optimal for a single practice session.
