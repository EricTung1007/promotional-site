# User Management

> Manage platform accounts, roles, and permissions to control feature access.

## Overview
User management is the core feature of the admin panel, allowing you to create, edit, import, and delete user accounts, as well as assign appropriate roles and permissions.

> This feature is only available to administrators with User Management permissions.

## How to Access
1. Click the **Settings Icon** (Gear) in the top right corner of the page.
2. Select "User Management" in the admin panel.

---

## Page Structure
- **Title Bar**: Includes Filters, Add User, and More Actions menu.
- **Filter Tags**: Displays currently applied filters.
- **User Table**: List of all users.
- **Pagination**: Page navigation.

---

## Filtering Users
Click the **"Filters"** button to open the filter panel:
- **Company**: Filter by associated company.
- **Department**: Filter by department (requires selecting Company first).
- **Role**: Admin / User / Superuser / Supervisor.
- **Email**: Text search.
- **Name**: Text search.
- **Status**: Active / Disabled.

---

## Adding Users
Click **"Add User"** to open the creation form.
- **Name**: Display name (Required if Email is provided).
- **Email**: Login account (Required or Emp No).
- **Emp No**: Employee number.
- **Company**: Select company (Required).
- **Department**: Select department.
- **Role**: Assign role.
- **Status**: Toggle Active/Disabled.

### Roles Description
- **Admin**: Full access to all management features.
- **Superuser**: Advanced access with limited management capabilities.
- **Supervisor**: Can monitor team practice data but cannot modify system settings.
- **User**: General user, can only access practice, history, and evaluations.

---

## Other Features
- **Edit User**: Click "Edit" in the table to modify details.
- **Delete User**: Click "Delete". This performs a soft delete (account cannot log in).
- **Batch Import**: Use a CSV template to add multiple users at once.
- **Batch Delete**: Select multiple users and delete them simultaneously.
