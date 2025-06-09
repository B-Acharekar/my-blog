# 📝 My Blog

A full-stack personal blogging platform built with **Next.js**, **MongoDB**, and **Tailwind CSS v4**. Features a custom authentication system, Markdown-based rich blog posts, project submissions, and an admin dashboard.

---

## 🚀 Tech Stack

| Tech                              | Purpose                                  |
|-----------------------------------|------------------------------------------|
| [Next.js 14](https://nextjs.org/) | React framework with App Router support  |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first CSS (using CSS-first config) |
| [MongoDB](https://www.mongodb.com/) | NoSQL database for content, users, and more |
| [TypeScript](https://www.typescriptlang.org/) | Type safety and IDE support              |
| [bcrypt](https://www.npmjs.com/package/bcrypt) | Password hashing                         |
| [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) | Custom JWT-based authentication          |
| [React Markdown](https://github.com/remarkjs/react-markdown) | Render Markdown blog content             |

---

### 📂 Folder Structure

```
my-blog/
├── app/                    # Pages (App Router structure)
│   ├── api/                # API routes (auth, posts, projects)
│   ├── dashboard/          # Admin dashboard pages
│   ├── post/               # Blog post rendering pages
│   └── page.tsx            # Landing/home page
├── components/             # UI and reusable components
├── lib/                    # MongoDB connection, utilities
├── models/                 # Mongoose schemas (User, Post, Project)
├── public/                 # Static files (images, icons)
├── styles/                 # CSS styles (Tailwind via CSS-first)
├── utils/                  # Helper functions (auth, slug, etc.)
└── README.md
```
---
## ✅ Features

### 🧑‍💻 Authentication
- Custom **JWT auth system**
- **bcrypt** for password hashing
- Secure login and registration

### 📝 Blog Features
- Rich **Markdown editor**
- Syntax highlighting for code blocks
- **Searchable** post titles
- Dynamic routing via slug
- View counter for posts
- Social sharing support

### 🧑‍💼 Admin Dashboard
- New **post creation** form
- **Project submission** form
- Projects include:
  - GitHub link
  - Live demo URL
  - Tags
  - Collaborators

### 🌗 UI/UX
- Fully **responsive**
- **Dark mode** toggle
- Modern, clean layout using Tailwind
- Optimized for SEO & performance

---

## 🔧 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/my-blog.git
cd my-blog
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret
```

> 🔐 Ensure the `JWT_SECRET` is a strong, random string.

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## 📸 Screenshots

> Add screenshots or GIFs of:
>
> * Landing page
> * Post detail page
> * Project submission form
> * Admin dashboard

---

## 🧑‍💻 Author

* **Bhushan Acharekar**
* GitHub: [@B-Acharekar](https://github.com/B-Acharekar)
* Twitter: [@Acharek7Bhushan](https://x.com/Acharek7Bhushan)

## 🛠 Future Enhancements

* Image upload in blog posts
* Tag/category-based post filtering
* Rich text (WYSIWYG) option
* Draft saving and post editing
* Comment moderation panel

---

