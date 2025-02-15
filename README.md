# Thoughts Blog

Welcome to **Thoughts Blog**! 📝 A dynamic and interactive blog site built with **React**, **TypeScript**, **Next.js**, **Tailwind CSS**, and **Sanity.io** for seamless data storage and content management.

This blog site is designed to provide fast, efficient rendering with **Next.js server-side rendering**, integrate a customizable **Sanity.io admin dashboard**, and deliver an interactive experience using **Zustand** for state management.

## 🚀 Features

- **Server-Side Rendering (SSR)**: Fast content fetching and rendering with **Next.js**'s SSR capabilities.
- **Sanity.io Integration**: All blog posts are stored and managed through **Sanity.io**, providing a flexible and real-time content management system.
  - Directly embed the **Sanity V3** admin dashboard into the web app for easy content management.
- **TypeScript Validation**: **Zod** ensures type-safe validation on all HTTP requests to **Sanity.io** for more secure and consistent data handling.
- **Post Likes**: Implemented post liking functionality using **Zustand** for efficient and lightweight state management.
- **Responsive Design**: Beautiful and responsive user interface built with **Tailwind CSS**.

## 🛠️ Technologies Used

- **React**: A declarative, efficient, and flexible JavaScript library for building user interfaces.
- **Next.js**: A React framework for server-side rendering and static site generation.
- **TypeScript**: JavaScript with strong typing to improve code quality and maintainability.
- **Sanity.io**: A powerful CMS for real-time content management and data storage.
- **Zustand**: A lightweight state management library for React.
- **Zod**: Type-safe schema validation for ensuring secure data handling.
- **TailwindCSS**: A utility-first CSS framework for rapid, responsive design.

## 📂 Installation

To get started with the project, clone the repository:

```bash
git clone https://github.com/your-username/thoughts.git
cd thoughts
```

Install the dependencies:

```bash
npm install
```

## 🏃‍♂️ Running the Project Locally

To start the development server:

```bash
npm run dev
```

Now, open your browser and visit [http://localhost:3000](http://localhost:3000) to see the blog in action.

## ⚙️ Sanity.io Setup

1. Create an account at [Sanity.io](https://www.sanity.io/).
2. Create a new project in Sanity.io and set up a schema for blog posts.
3. Install the Sanity CLI tool if you haven't already:

```bash
npm install -g @sanity/cli
```

4. Configure the **Sanity.io client** in the project by setting up the necessary credentials (project ID, dataset, etc.) in your `.env.local` file.
5. Use the **Sanity Studio** for managing blog posts and interacting with your content.

## 💡 Features to Explore

- **Create, Edit, and Delete Posts**: Manage your blog content through the **Sanity.io** CMS, with the ability to publish, update, or remove posts.
- **Responsive Layout**: A sleek and fully responsive UI built with **Tailwind CSS**, perfect for viewing on any device.
- **Post Likes**: Enjoy a like feature implemented with **Zustand** to store post interactions locally.
- **Real-Time Data Fetching**: Thanks to **Next.js SSR**, the blog posts are fetched and rendered efficiently on the server-side, delivering content quickly.
- **Sanity Admin Integration**: Manage blog content easily directly through your web app's integrated **Sanity V3** admin dashboard.

## 💌 Contact

Have questions or suggestions? Feel free to open an issue or send me a message. Contributions are always welcome! 
