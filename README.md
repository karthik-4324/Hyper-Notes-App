# 📝 Hyper Notes — Your Personal Note Manager

**Hyper Notes** is a personal note management application built using React. It allows users to create, manage, organize, and maintain their notes through a simple and intuitive interface.

The application uses React for UI development, React Router for navigation, and browser LocalStorage to persist notes across page refreshes.

## ✨ Features

- **Create Notes:** Create new notes with a title and content.
- **View Notes:** Display and access saved notes.
- **Edit Notes:** Update existing note titles and content.
- **Important Notes:** Mark notes as important for quick access.
- **Archive Management:** Archive notes and restore them whenever needed.
- **Bin Management:** Move unwanted notes to the bin.
- **Restore Notes:** Recover notes from the bin.
- **Permanent Deletion:** Permanently remove notes when no longer needed.
- **Persistent Storage:** Preserve notes using browser LocalStorage.
- **Organized Navigation:** Navigate between Notes, Important, Archive, and Bin pages.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React | Building reusable UI components |
| Vite | Development server and build tool |
| React Router DOM | Client-side navigation |
| Material UI (MUI) | UI components and styling |
| MUI Icons | Interface icons |
| LocalStorage | Persisting notes in the browser |

## 📂 Project Structure

```text
src/
├── components/
│   ├── Header/
│   ├── Sidebar/
│   └── ...
│
├── pages/
│   ├── Notes/
│   ├── Archive/
│   ├── Important/
│   └── Bin/
│
├── App.jsx
├── main.jsx
└── index.css
```

*The structure above represents the main architectural organization*

## 🧠 Key Implementation Details

### 1. Centralized Notes State

The application maintains a single collection of notes as its source of truth.

Each note contains properties such as:

- `id` — Unique identifier.
- `title` — Note title.
- `content` — Note content.
- `important` — Indicates whether the note is marked important.
- `archived` — Indicates whether the note is archived.
- `deleted` — Indicates whether the note is moved to the bin.

Different pages display filtered views of the same notes collection instead of maintaining separate collections.

### 2. Note Management

Implemented note operations to create, update, organize, archive, restore, and delete notes.

This provides a simple note lifecycle without duplicating application data.

### 3. Client-Side Routing

Used React Router DOM to navigate between different sections of the application:

- Notes
- Important
- Archive
- Bin

### 4. LocalStorage Persistence

Used browser LocalStorage to preserve notes across page refreshes.

The application retrieves previously saved notes when it starts and updates LocalStorage whenever the notes collection changes.

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

### 2. Navigate to the project directory

```bash
cd hyper-notes
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal to access Hyper Notes.

## 🎨 Design

Hyper Notes focuses on a clean, simple, and user-friendly interface.

The application uses a sidebar-based navigation layout to provide easy access to different note categories and management options.

## 📚 What I Learned

Building Hyper Notes helped me strengthen my practical understanding of:

- React components and reusable UI architecture.
- Managing application state using React Hooks.
- Implementing CRUD operations.
- Working with conditional rendering.
- Implementing client-side routing.
- Managing browser LocalStorage.
- Organizing application data using a consistent note model.
- Building interactive user interfaces with Material UI.

## 🔮 Future Improvements

- Backend integration for persistent cloud storage.
- User authentication and individual accounts.
- Database integration.
- Synchronization of notes across devices.

## 👨‍💻 Author

**Karthik Kona**

A Computer Science graduate interested in software development, Java, React, and full-stack application development.

---

*Hyper Notes — Capture Ideas. Organize Thoughts.*
