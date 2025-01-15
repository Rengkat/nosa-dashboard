# NOSA Admin Dashboard Frontend

This repository contains the frontend implementation for the **NOSA Admin Dashboard**, built to manage the NOSA (Nakam Old Students Association) web application. NOSA is the alumni network of Nakam Memorial Secondary School, Panyam, Plateau State, Nigeria. The dashboard enables the **Super Admin** and **Set Admins** to manage alumni data, content, and interactions effectively.

## Features

The **NOSA Admin Dashboard** includes the following functionalities:

### Super Admin Features:
- **Set Management**: 
  - Create, update, and delete alumni sets.
  - Assign and manage Set Admins for each set.
- **Content Management**: 
  - Manage blogs, news, and the "About Us" and "About the School" pages.
- **Member Management**:
  - Approve or reject membership requests.
  - View and manage member details across all sets.

### Set Admin Features:
- **Set-Specific Management**:
  - Manage members, blogs, and events specific to their assigned set.
  - View statistics and activities within their set.

### Shared Features:
- **Authentication**:
  - Secure login for Super Admins and Set Admins.
- **Dashboard Overview**:
  - Interactive dashboard with charts and summaries of membership, blogs, and news.
- **Communication**:
  - Respond to user inquiries.
  - Post announcements for alumni sets.

## Technology Stack

The frontend was built using:
- **React.js**: A JavaScript library for building dynamic user interfaces.
- **Next.js 14**: A React framework for server-side rendering and improved performance.
- **Redux/Redux Toolkit**: For global state management.
- **Tailwind CSS**: For styling and responsive design.

## Development

### Installation

To run the project locally:

1. Clone the repository:
   ```bash
   git clone <repository-url>
