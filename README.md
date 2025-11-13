# E-commerce Digital Store – Digital Products & Tech Courses Platform

**Digital Store** is a modern web application designed to sell **digital products** and provide **technological courses**. 
Built with **Next.js 14**, **Tailwind CSS**, and **Strapi**, it offers a seamless shopping experience with secure authentication and instant access to purchased products.

---

## ✨ Key Features

* 💾 **Instant Downloads** – Get your digital products immediately.
* 👩‍🏫 **Expert Courses** – Learn from verified professionals.
* ♾️ **Lifetime Access** – Keep your products and courses forever.
* 💳 **Stripe Payments** – Secure and reliable checkout system.
* 💬 **Customer Reviews** – Real feedback to increase trust.
* 🛒 **Shopping Cart** – Add multiple products and checkout easily.
* 📩 **Email Notifications** – Purchase confirmations via **Resend**.
* 📱 **Responsive Design** – Works perfectly on all devices.

---
## 📸 Screenshots
<img width="1894" height="838" alt="image" src="https://github.com/user-attachments/assets/f6e8806f-5f3a-40c8-9a29-33a62eea4a79" />
<img width="1876" height="838" alt="image" src="https://github.com/user-attachments/assets/6478c47d-bac9-41fc-8cd7-04717af112bb" />
<img width="1871" height="839" alt="image" src="https://github.com/user-attachments/assets/28fd5281-eb0a-460a-bcfe-3645658cabf1" />
<img width="1888" height="834" alt="image" src="https://github.com/user-attachments/assets/8d8d7a03-1390-4202-b8bf-dc4723a63814" />
<img width="1894" height="806" alt="image" src="https://github.com/user-attachments/assets/a7efd828-7174-45d4-8f02-e0be6a41dc46" />
<img width="1889" height="839" alt="image" src="https://github.com/user-attachments/assets/07094fe3-ac3a-4647-bde4-05b3212fad00" />
<img width="1896" height="832" alt="image" src="https://github.com/user-attachments/assets/e9479765-e640-4fbd-b087-376fd29d6536" />
<img width="1882" height="836" alt="image" src="https://github.com/user-attachments/assets/407d718f-92f6-4118-910d-2b8127362d00" />
<img width="1893" height="842" alt="image" src="https://github.com/user-attachments/assets/6366f80f-4f2c-46c6-a2e2-4a9d5688da46" />
<img width="1917" height="828" alt="image" src="https://github.com/user-attachments/assets/276810f2-6164-4715-b995-7c83e6f4e315" />
<img width="1883" height="827" alt="image" src="https://github.com/user-attachments/assets/ebc92e5f-e57a-4669-bc2b-9d37ff364a8f" />
<img width="1892" height="841" alt="image" src="https://github.com/user-attachments/assets/bc0a8870-a448-45e1-b050-7df740ba9046" />
<img width="546" height="748" alt="image" src="https://github.com/user-attachments/assets/6a5784b8-ca28-4585-b53c-dd455890d7e1" />
<img width="548" height="739" alt="image" src="https://github.com/user-attachments/assets/b06fffe9-bb2a-427b-9b47-4bf2c706ff64" />



---
## 🛠️ Tech Stack

### Frontend

* **Framework:** Next.js 14
* **Styling:** Tailwind CSS
* **UI Components:** Shadcn/ui, Lucide React Icons
* **Authentication:** Clerk
* **Payment:** Stripe (`@stripe/react-stripe-js`, `stripe`)
* **Email:** Resend + React Email

### Backend

* **CMS & API:** Strapi (for managing products, courses, and orders)
---

## 🚀 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) v18 or higher
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

### Frontend Setup

1. Clone the repository:
   
```
git clone https://github.com/your-username/digital-store.git
cd digital-store/frontend
```

2. Install dependencies:

```
npm install
```

3. Set up environment variables:
   Create a `.env.local` file in the frontend root:

```env
NEXT_PUBLIC_CLERK_FRONTEND_API=
CLERK_API_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
RESEND_API_KEY=
```

4. Run the development server:

```
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

### Backend Setup (Strapi)

1. Navigate to the backend folder:

```
cd ../backend
```

2. Install dependencies:

```
npm install
```

3. Configure `.env` for Strapi:

```env
DATABASE_CLIENT=postgres
DATABASE_NAME=your_db_name
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=your_db_user
DATABASE_PASSWORD=your_db_pass
JWT_SECRET=your_jwt_secret
```

4. Run Strapi:

```bash
npm run develop
```

Open [http://localhost:1337/admin](http://localhost:1337/admin) to access the Strapi admin panel.

---

## 🧩 Project Structure

```
FRONT/
├─ .next/                  # Next.js build output
├─ app/                    # Next.js 14 App Router
│  ├─ _components/         # Reusable React components (header, footer, buttons)
│  ├─ _context/            # React Context API (cart, auth, theme)
│  ├─ _utils/              # API calls and helper functions
│  ├─ (auth)/              # Authentication routes (login, register, etc.)
│  ├─ (routes)/            # Other dynamic or static routes (home, contact, products)
│  ├─ api/                 # API route handlers (Next.js API routes)
│  ├─ favicon.ico          # Website favicon
│  ├─ globals.css          # Global CSS file
│  ├─ layout.js            # App layout (wraps pages with header/footer)
│  └─ page.js              # Main home page
├─ node_modules/           # Installed packages
├─ public/                 # Public static assets (images, icons)
├─ .env.local              # Environment variables
├─ .gitignore
├─ jsconfig.json           # Path alias configuration
├─ middleware.js           # Next.js middleware
└─ next-env.d.ts           # TypeScript types (even if using JS)

Backend/
├─ api/            # Strapi content types (products, courses, orders)
├─ config/         # Strapi configuration
└─ extensions/     # Plugins and customizations
```

---

## 📜 Available Scripts

**Frontend**

* `npm run dev` – Start development server
* `npm run build` – Build for production
* `npm run start` – Run production build
* `npm run lint` – Lint project

**Backend**

* `npm run develop` – Start Strapi in development mode
* `npm run build` – Build Strapi for production
* `npm run start` – Start Strapi production server

---

## 💡 How It Works

1️⃣ Browse digital products or tech courses.
2️⃣ Add desired items to the cart.
3️⃣ Checkout securely using Stripe.
4️⃣ Receive instant access and email confirmation.

---

## 💬 Testimonials (Example)

> “The best platform to buy digital products and learn new skills — 5 stars!”
> “Fast downloads, clear instructions, and amazing course content.”

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

