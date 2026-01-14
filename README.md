Project Idea:

The application renders pages based on configuration data.
Each page is made up of sections, and each section is mapped to a reusable React component.

This approach makes it easy to:

Add new pages

Change layouts

Update content or styling
by modifying configuration instead of component code.

Tech Stack

React 18

Vite

JavaScript

Tailwind CSS

React Router

No external UI libraries or state management tools were used.


How It Works

All UI structure, content, and theme values are defined in appConfig.js

Pages are rendered dynamically based on route configuration

A component resolver maps section types to React components

Theme values like colors, spacing, radius, and shadows come from config

React Context is used to share config and theme across the app

Each page is defined inside appConfig.js with:

Route path

Page title

Sections to render

Props for each section


Reusable Components

All base components (Button, Card, Container) are fully reusable and receive their styles and content through props.



Theme From Config

Theme values (colors, spacing, border radius, shadows) are stored in config and accessed using a custom hook.


Available Pages

Home – Hero section and feature highlights

Products – Configurable product grid

Profile – User profile details and settings


Running the Project
Install dependencies
npm install

Start development server
npm run dev