# ASSIGNMENT-010 (**PlateShare** – Community Food Sharing)

### 🌐 [Click Here To See The Demo](https://plateshare-15260.web.app)
<br>

<img width="1200" height="700" alt="Image" src="https://github.com/user-attachments/assets/cb2d2182-b776-4941-90d4-bcc6c69d2647" />
<br>
<br>

**PlateShare** is a food donation platform designed to connect people who want to share food with those in need.  
Users can easily add, manage, and request food items while helping to reduce food waste and fight hunger.  

## 📖 Features Overview

### 🔐 Authentication
Users can create an account using:
1. **Email & Password**
2. **Google Login / Sign Up**

#### Password Validation Rules
- Must contain **at least one uppercase** letter.  
- Must contain **at least one lowercase** letter.  
- Must be **at least 6 characters long**.

## 🔒 Private Routes
Some routes are accessible only to logged-in users:
- **Add Food** – Add new food donations.
- **Manage My Foods** – Update or delete added food items.
- **My Food Requests** – View and manage your sent food requests.

## 🍱 Page Details

### 🥗 Add Food
Users can submit new food items for donation, including food name, quantity, expiry date, and other details.

### 🧾 Manage My Foods
- View all foods added by the user.
- **Edit** or **Delete** food entries anytime.

### 📬 My Food Requests
- Displays all food requests made by the user.
- Requests can be **deleted**, unless they’ve already been **accepted or rejected** by the food owner.
- The **delete button** becomes disabled after a request is accepted or rejected.

## 🏠 Home Page
- Contains a **Featured Foods** section showcasing foods with higher quantity.  
- Each food card includes a **Details** button.  
- If a user isn’t logged in, they’ll be redirected to the **Login Page** when trying to view details.

## 🥘 Available Foods Page
- Displays all food items where **status = “Available”**.  
- Users can browse and request any available food.

## 👨‍🍳 Food Ownership
Only the **food owner** can:
- See their added foods.
- Accept or reject incoming food requests.

## ⚙️ Technologies & Dependencies

- [**React**](https://react.dev/) – For building the user interface.
- [**Vite**](https://vite.dev/) – For fast development and build tooling.
- [**npm**](https://www.npmjs.com/) – For managing packages and dependencies.
- [**React Router**](https://reactrouter.com/) – For handling navigation and private routes.  
- [**Tailwind CSS**](https://tailwindcss.com/) – For modern, responsive UI styling.  
- [**DaisyUI**](https://daisyui.com/) – For pre-built Tailwind components.  
- [**Firebase**](https://firebase.google.com/) – For authentication and data management.  
- [**Axios**](https://axios-http.com/docs/intro) – For API requests.  
- [**React Hook Form**](https://react-hook-form.com/) – For easy and reliable form management.  
- [**React Toastify**](https://www.npmjs.com/package/react-toastify) – For toast notifications.
- [**React Icons**](https://react-icons.github.io/react-icons/) – For including icons in the UI.
- [**React SweetAlert2**](https://www.npmjs.com/package/sweetalert2-react-content) – For attractive alert and confirmation modals.  
- [**AOS (Animate On Scroll)**](https://michalsnik.github.io/aos/) – For scroll-based animations.  
- [**React Fast Marquee**](https://www.npmjs.com/package/react-fast-marquee) – For smooth auto-scrolling text.  
- [**React Datepicker**](https://www.npmjs.com/package/react-datepicker) – For selecting dates.

# Fonts: Free Google Font used 
- [**Poppins**](https://fonts.google.com/specimen/Poppins)
- [**Damion**](https://fonts.google.com/specimen/Damion)

# Photo & Video Credits
- [**Pexels**](https://www.pexels.com/)
- [**Freepik**](https://www.freepik.com/)
- [**Canva**](https://www.canva.com/)

## Backend Repository
This project uses a separate backend server. You can find it here: [Server Repo Link](https://github.com/AbrarulRhythm/assignment-10-server)

<br>

***Note:** This item is React Template, It’s not a WordPress Theme.*