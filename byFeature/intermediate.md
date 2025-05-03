# Intermediate React Folder Structure

This structure is more organized and suitable for medium-sized React projects.

```
src/
├── components/
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── Modal.jsx
│   └── form/
│       ├── Input.jsx
│       ├── Checkbox.jsx
│       └── Select.jsx
├── pages/
│   ├── Login/
│   │   ├── index.jsx
│   │   ├── LoginForm.jsx
│   │   └── useLogin.jsx
│   ├── Dashboard/
│   │   ├── index.jsx
│   │   ├── DashboardStats.jsx
│   │   └── useDashboard.jsx
│   └── Settings/
│       ├── index.jsx
│       └── SettingsForm.jsx
├── layouts/
│   ├── MainLayout.jsx
│   ├── AuthLayout.jsx
│   └── SidebarLayout.jsx
├── hooks/
│   ├── useLocalStorage.jsx
│   └── useFetch.jsx
├── context/
│   ├── AuthContext.jsx
│   └── ThemeContext.jsx
├── assets/
│   ├── images/
│   │   └── logo.svg
│   └── styles/
│       └── global.css
├── utils/
│   ├── api.js
│   └── helpers.js
├── App.jsx
└── index.js
```

## When to Use This Structure

- Medium-sized applications with multiple pages
- Projects with 15-30+ components
- Applications that require user authentication and different layouts
- Projects with a small team of developers

## Advantages

- Better organization with components grouped by type
- Page-specific code is collocated, making it easier to work with
- Dedicated folders for different concerns (assets, utils, context)
- Clearer separation between UI elements and layout components
- Scales better than the simple structure

## Disadvantages

- More complex setup initially
- May have overlap between pages for shared features
- Can be overkill for very small projects
- Pages folder may become unwieldy as the application grows