# Next-Blog

**Overview**

Welcome to the Next.js Full-Stack Blog project! This application is designed to empower users to create, publish, and explore blog posts effortlessly. Whether you're a seasoned blogger or just starting out, our platform provides the tools you need to share your thoughts with the world. With features like category-based browsing and newsletter subscriptions, staying connected has never been easier.

## Used Technologies:
### Next.js
Next.js is a React framework that enables server-side rendering, static site generation, and routing for React applications. It simplifies the development of React-based web applications by providing a streamlined workflow and efficient performance optimizations.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/240px-Nextjs-logo.svg.png" height="30" alt="NextJS" />

### NextAuth.js
Authentication Providers in NextAuth.js are OAuth definitions that allow your users to sign in with their favorite preexisting logins. You can use any of our many predefined providers, or write your own custom OAuth configuration.

<img src="https://next-auth.js.org/img/logo/logo-sm.png" height="40" alt="NextAuthJS" />

### TypeScript
TypeScript is a superset of JavaScript that adds static typing to the language, enhancing code quality and developer productivity. It allows for better code organization, refactoring, and catching errors at compile-time rather than runtime.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/240px-Typescript_logo_2020.svg.png" height="40" />

### UploadThings
UploadThings is a library or service for handling file uploads in web applications. It simplifies the process of uploading files securely to the server and managing them efficiently.

<img src="https://raw.githubusercontent.com/typehero/typehero/main/media/uploadthing-logo.svg?sanitize=true" height="30" />

### Prisma
Prisma is an open-source database toolkit that simplifies database access and management in modern applications. It provides an ORM (Object-Relational Mapping) layer for interacting with databases, allowing developers to write database queries using a type-safe API.

<img src="https://cdn.worldvectorlogo.com/logos/prisma-2.svg" height="40"/>

### PostgreSQL
PostgreSQL is a powerful, open-source relational database management system known for its reliability, robustness, and extensive feature set. It is widely used in enterprise and web applications for storing and managing structured data.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/240px-Postgresql_elephant.svg.png" height="40" />

### Railway
The Railway PostgreSQL database service allows you to provision and connect to a PostgreSQL database with zero configuration.

<img src="https://png.pngtree.com/png-vector/20230109/ourmid/pngtree-train-on-a-white-background-png-image_6556767.png" height="60" />

### Beehiive
Beehiive is used to subscribe newsletter for next-blog users.

<img src="https://theme.zdassets.com/theme_assets/11651456/b310d005f5cefa45955cbb0f0b32ce9b7183a2b5.png" height="40" />

### Tailwind CSS:
The project utilizes Tailwind CSS for efficient styling and responsive design. Tailwind CSS offers utility-first CSS classes, enabling rapid development and customization of the application's appearance.

<img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" height="40" />

## Project Layout:

project consist of 3 pain pages with responsive layout:
- Home page
- All Blogs page
- Create new Blog page

<img src="https://github.com/annatvali/next-blog/assets/110423142/09a660cf-c7b3-4c36-8e81-4e0717aa13e2" alt="home-desktop" height="300px">
<img src="https://github.com/annatvali/next-blog/assets/110423142/5c9095c9-4850-4592-a8d4-688730d0c1ba" alt="home-mobile" height="300px">
<br />
<img src="https://github.com/annatvali/next-blog/assets/110423142/485b4d7e-dbc3-476c-8544-3b0b781a889b" alt="all-posts-home" height="300px">
<img src="https://github.com/annatvali/next-blog/assets/110423142/22ce50a8-7c93-4c19-9c2c-1718d1e0a7e3" alt="all-posts-loaded-home" height="300px">
<br />
<img src="https://github.com/annatvali/next-blog/assets/110423142/99735eaf-45e9-41f8-9d23-9215945343e1" alt="new-post-home" height="300px">

## Project Functionality

1. **Authentication:**
   - Users can sign in and sign out using their **Google** <img src="https://banner2.cleanpng.com/20180423/gkw/kisspng-google-logo-logo-logo-5ade7dc753b015.9317679115245306313428.jpg" width="20" height="20" alt="google logo" /> or **GitHub** <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width="20" height="20" /> accounts.
   - Authentication is implemented using NextAuth, ensuring secure access to the application.

2. **Post Creation and Publishing:**
   - Signed-in users can create new blog posts within the application.
   - They have the ability to publish their posts for others to read and engage with.

3. **Newsletter Subscription:**
   - The application offers a newsletter subscription feature.
   - Users can stay updated with the latest news and updates by providing a valid email address.

4. **All Posts Page with Load More Functionality:**
   - The application includes an "All Posts" page where users can browse all available blog posts.
   - It features a "Load More" functionality, allowing users to access posts in chunks for better user experience and performance.

5. **Filter By Category**
   - For All Posts page there is a filter by category functionality.
   - User can filter posts by provided categories:
       - Nature
       - Architecture
       - Culinary

