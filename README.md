# Next.js Business & Agency Website Template

A premium, fully responsive Next.js template designed specifically for businesses, agencies, and consulting firms. This modern and feature-rich template provides everything you need to create a sleek, high-performance website with minimal effort. Whether you're launching a corporate site, showcasing services, or building an online portfolio, this template offers the flexibility and scalability to match your needs.

![Responsive-view](https://github.com/user-attachments/assets/4e766d2d-c54e-43ac-b341-cbd6518116fa)

## Key Features:

- **Responsive & Adaptive Design**: Seamlessly optimized for desktop, tablet, and mobile devices, ensuring a perfect user experience across all screen sizes.

- **Modular & Scalable Components**: Built with reusable React components, making it easy to customize, extend, and scale your site as your business grows.

- **EmailJS Integration**: Effortlessly collect inquiries and feedback with a fully functional contact form, powered by **EmailJS** for instant email notifications.

- **Tailored Styling with CSS & Tailwind CSS**: Designed with modern aesthetics in mind, utilizing **Tailwind CSS** for a clean, intuitive, and easy-to-manage layout that looks stunning out of the box.

- **Dynamic Content Sections**: Includes key sections like a **hero banner**, **services overview**, **testimonials**, **pricing packages**, **portfolio showcase**, and an intuitive **contact form**, all neatly organized in a single scrolling page.

- **SEO Optimized**: Built with SEO best practices to ensure your website is easily discoverable and ranks well in search engines.

- **Fast Load Times**: Thanks to Next.js' automatic code splitting, your website will load faster, ensuring a smooth and quick browsing experience for visitors.

## Live Demo

Check out the live demo of the project here: [Live Demo](https://nextjs-business-agency-template.netlify.app/)

## Prerequisites

### Before you begin, ensure you have the following installed:

- Node.js (v16+)
- npm or yarn

### Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd business-agency-website
npm install
```

## Steps to Run the Template Locally

1. **Download and Extract the ZIP**  
   Download the ZIP file containing the project and extract it to a folder of your choice.

2. **Install Dependencies**  
   Open a terminal in the project folder and run the following command to install the required dependencies:

   ```bash
   npm install

   ```

### Development

To start the development server, run:

```bash
npm run dev
```

Visit http://localhost:3000 to view the app in your browser.

TypeScript Setup (Optional): If you need TypeScript support, ensure you install the necessary types:

```bash
npm install react react-dom
npm install --save-dev @types/react @types/react-dom typescript
```

## Deployment

To build the project for production, run:

```bash
npm run build
```

To serve the production build locally, run:

```bash
npm run start
```

## Important: After Extracting the ZIP

When you download the repository as a zip file from GitHub, you might see a folder structure like this:

```arduino
business-template-main/
    business-template-main/
        app/
        package.json
        README.md
        ...
```

Please do the following:

1. Navigate to the inner business-template-main folder.
2. Move all its contents to the outer business-template-main folder.
3. Delete the empty inner folder.
4. Proceed with installation instructions (e.g., npm install, npm run dev).

### File Structure

```plaintext
.business-agency-website/
├── .next/ # Build output (ignored)
├── app/
│ ├── api/ # API endpoints
│ ├── components/ # Reusable components
│ ├── data/ # JSON data files
│ ├── styles/ # Global and component-specific CSS
│ ├── favicon.ico # Favicon
│ ├── layout.tsx # Global layout
│ ├── page.tsx # Homepage
├── public/
│ ├── icons/ # Icon assets
│ ├── images/ # Image assets
├── node_modules/ # Dependencies (ignored)
├── .env.local # Environment variables (ignored)
├── .gitignore # Git ignore file
├── README.md # Documentation
├── package.json # Project metadata and scripts
└── next.config.ts # Next.js configuration
```

## Deployment (continued)

You can deploy the site using **Vercel**, **Netlify**, **Heroku**, **AWS**, **DigitalOcean**, **Render**, **Firebase Hosting**, **Azure**, **GitHub Pages**, **Railway**, or other hosting platforms. Follow the instructions based on your preferred deployment method.

### 1. Deploying with Vercel (Recommended)

Vercel offers seamless integration with Next.js and is free to use for personal projects.

#### Steps to Deploy on Vercel:

1. **Create a Vercel account**: [Sign up for Vercel](https://vercel.com/signup)
2. **Connect your GitHub account** to Vercel if not already done.
3. **Push the project to GitHub** (skip this step if already using GitHub):

   - Initialize a git repo and push it to GitHub:

   ```bash
   git init
   git remote add origin <your-github-repository-url>
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

### Deploy on Vercel:

1. Go to [Vercel](https://vercel.com) and click on **New Project**.
2. Choose your **GitHub** repository or manually upload the project.
3. Vercel will automatically detect that it's a **Next.js** project.
4. Click **Deploy**.
5. After a few moments, your site will be live, and Vercel will provide you with a public URL.

---

### 2. Deploying with Netlify (Alternative)

Netlify is another free hosting platform that works well with Next.js.

#### Steps to Deploy on Netlify:

1. **Create a Netlify account**: [Sign up for Netlify](https://app.netlify.com/signup)

2. **Push the project to GitHub** (if not already done):

   Follow the same steps as mentioned in the Vercel instructions above.

3. **Deploy on Netlify**:

   1. Go to [Netlify](https://app.netlify.com) and click on **New site from Git**.
   2. Connect your **GitHub** account and select your repository.
   3. Netlify will detect that you're using **Next.js** and automatically build the project.
   4. Set the **Build Command**: `npm run build`
   5. Set the **Publish Directory**: `.next`
   6. Click **Deploy**, and Netlify will provide a public URL once your site is live.

### 3. Deploying with Other Hosting Platforms

#### 3.1 Deploying on Heroku

Heroku allows you to host Next.js apps using Node.js.

- Follow the [Heroku documentation](https://devcenter.heroku.com/articles/git) for deploying Node.js apps.
- You can push your app to Heroku using Git, similar to Vercel and Netlify.
- Heroku requires the app to be a Node.js app, so make sure you include a **Procfile** in your project with the following:

```bash
web: npm run start
```

### 3.2 Deploying on AWS (Amazon Web Services)

AWS offers a variety of services for hosting your Next.js app, such as Elastic Beanstalk and S3 (for static hosting).

- For Elastic Beanstalk, follow the [AWS Elastic Beanstalk Node.js deployment guide](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html).
- For static site hosting with S3, you can export your app and upload the `out/` directory.

### 3.3 Deploying on DigitalOcean

You can deploy your Next.js app on DigitalOcean using a droplet or Kubernetes.

- You can follow the [DigitalOcean tutorials](https://www.digitalocean.com/community/tutorials) to set up a Node.js environment or use App Platform for automatic deployments.
- Static files can be deployed using DigitalOcean Spaces (similar to AWS S3).

### 3.4 Deploying on Render

Render offers free hosting for Next.js apps.

- Follow [Render's documentation](https://render.com/docs) for Node.js deployments or use their static site hosting.

### 3.5 Deploying on Firebase Hosting

Firebase Hosting is ideal for static websites.

- First, build the project using the command:

```bash
  npm run build
```

Once the build is complete, Next.js will automatically prepare the static files for deployment. The output will be placed in the `out/` directory.

Once the build is complete, Next.js will automatically prepare the static files for deployment. The output will be placed in the `out/` directory.

To deploy your app to Firebase Hosting, you will need to upload the contents of the `out/` folder. Firebase Hosting requires you to serve static files from this folder.

For detailed instructions on how to deploy with Firebase Hosting, check out the official Firebase documentation:

[Firebase Hosting Documentation](https://firebase.google.com/docs)

This will help you deploy your static website live on Firebase Hosting.

### 3.6 Deploying on Azure (Microsoft)

Azure supports Next.js deployment via their App Services.

- Follow the [Azure App Service documentation](https://docs.microsoft.com/en-us/azure/app-service/) for Node.js deployment.

### 3.7 Deploying on GitHub Pages (via GitHub Actions)

You can deploy your app on GitHub Pages by using GitHub Actions to push your static files to the `gh-pages` branch.

- Follow the [GitHub Pages Deployment Guide](https://pages.github.com/) for more information.

### 3.8 Deploying on Railway

Railway is another platform that supports Node.js hosting.

- Follow the [Railway documentation](https://docs.railway.app/) to deploy your app with Railway.

### 4. Manual Deployment (Without GitHub)

If you don't want to use GitHub, or you prefer a different hosting platform, you can manually deploy the app by following these steps:

#### Build the Project for Production:

In your terminal, run the following command:

```bash
npm run build
```

This will create an out/ folder with static files that can be deployed to any static hosting service like Netlify, GitHub Pages, Firebase Hosting, or AWS S3.

### Upload to Your Hosting Provider:

Use your hosting provider's interface to upload the contents of the `out/` folder.

For example, if using Netlify manually:

1. Go to Netlify, click **New site from Git**, and drag the `out/` folder to the Netlify dashboard.
2. If you're using other hosting services (like Firebase, AWS S3, DigitalOcean), refer to their documentation for instructions on how to deploy static sites.

---

### Important Notes:

- **EmailJS Integration**: If you are using the contact form, ensure you have configured your EmailJS account and added the correct API keys in the `.env.local` file.

- **Custom Domain**: After deployment, you can set up a custom domain through Vercel, Netlify, or your hosting service. Follow the documentation of your hosting provider to connect a custom domain.

---

### Other Hosting Providers:

If you want to host the template on other platforms like WordPress, Squarespace, or other shared hosting services, you'll generally need to:

- **For WordPress and Squarespace**: These platforms are primarily CMS-based and don’t natively support Next.js. Hosting static HTML files (like what `npm run build` generates) could be possible if you manually upload the exported files, but it's not typically a recommended setup for modern Next.js applications.

- **For other hosting services (like .com, DigitalOcean, Hostinger)**: If they support static file hosting, you can use GitHub Pages or directly upload the `out/` folder generated by `npm run build`. However, if your host supports Node.js (like DigitalOcean or Hostinger), you can use the Node.js runtime to serve the app, though this setup would require a different deployment process (usually with a server setup).

---

### Usage

- Customize the content in the `app/data/` folder (e.g., `services.json`, `testimonials.json`) to reflect your business.
- Update styles in `app/styles/` if needed.

<br><br>

# `Header.tsx` Component

## Overview

The `Header.tsx` component is responsible for rendering the navigation bar at the top of the page. It provides a **sticky header** that remains fixed as the user scrolls. The component adapts for both **desktop** and **mobile** views, making the navigation responsive. It is designed to smoothly scroll to different sections of the page when navigation items are clicked.

## Features

- **Sticky Header**: The header is fixed at the top, ensuring that navigation links are always accessible.
- **Responsive Design**:
  - On desktop screens, the navigation items are displayed horizontally.
  - On mobile screens, a collapsible hamburger menu is displayed, providing a clean interface.
- **Smooth Scrolling**: When a navigation item is clicked, the page smoothly scrolls to the corresponding section.
- **Logo Link**: The logo in the header functions as a link that scrolls the page back to the "hero" section.

## File Structure

Ensure your project is organized like this for the header component to function correctly:

## Project Structure

```plaintext
/components
  ├── Header.tsx           # Header component with navigation
/layouts
  ├── Layout.tsx           # Layout component that includes the header and page content
/pages
  ├── page.tsx             # Main page where the layout and content are rendered
/public
  ├── icons
     ├── logo.png          # Logo image file
/styles
  ├── globals.css          # Tailwind CSS imports and global styles
```

## How it Works

### Desktop Navigation

On desktop screens (medium size and larger), the navigation items are displayed horizontally. Each list item is clickable and, when clicked, the page will scroll smoothly to the section associated with that item.

### Mobile Navigation

On smaller screens (less than 768px), the navigation bar hides the menu and replaces it with a **hamburger menu**. When clicked, the menu expands to show the navigation items. This ensures a clean and minimal design for mobile users.

### Logo

The logo displayed in the header is clickable and will scroll the page back to the "hero" section.

### State Management

The component uses React's `useState` to manage the state of the mobile navigation (`nav`) and screen size (`isMobile`). The `useEffect` hook is used to track window resizing and adjust the navigation layout accordingly.

- **Mobile/Tablet State**: When the window width is smaller than 768px, the mobile navigation is enabled.
- **Desktop State**: When the window is resized to be larger than 768px, the desktop navigation is shown, and the mobile menu is hidden.

### Smooth Scroll

When a navigation item is clicked, the `handleScrollToSection` function is triggered. This function uses `scrollIntoView` to smoothly scroll to the corresponding section on the page.

## Dependencies

- **React**: For building the UI components.
- **React Icons**: For the hamburger menu icon (`AiOutlineMenu`) and close icon (`AiOutlineClose`).
- **Next.js Image**: For optimizing image rendering of the logo (`Image` from `next/image`).
- **Tailwind CSS**: For styling the component (if used in your project).

## Customization

You can modify the following aspects of the header:

- **Logo**: Replace the `logo.png` image in the `/public/icons/` folder with your custom logo.
- **Navigation Items**: Add or remove sections by editing the `<ul>` list in the `Header.tsx` file. Ensure that each `onClick` handler links to the correct section ID.
- **Styling**: Customize the styles in your global CSS or use Tailwind utility classes to adjust colors, spacing, and other design elements.

## Conclusion

The `Header.tsx` component provides a clean, responsive navigation bar that works seamlessly across different screen sizes. It includes essential features like sticky positioning, smooth scrolling, and a collapsible mobile menu. Feel free to adapt the component to fit the design and functionality requirements of your project.

<br><br>

# Hero Section Component

## Overview

The **Hero Section** is the first section users see when visiting the website. It serves as an attention-grabbing introduction to the company or service, showcasing key messaging and providing a clear call to action. The section includes a typing animation for dynamic text, an animated image, and buttons that guide users to other parts of the site.

## Features

- **Dynamic Typing Animation**: The text in the hero section changes over time, cycling through key messages to engage users.
- **Responsive Layout**: The section adjusts its layout for different screen sizes, showing a larger image and buttons on desktops and smaller ones on mobile devices.
- **Call to Action**: Includes buttons that allow users to smoothly scroll to different sections of the website (e.g., "Get Started" and "Learn More").
- **Animated Blob**: A visually appealing animated blob image that moves up and down, creating a dynamic background effect.

## File Structure

Ensure your project is organized as follows for the Hero section to function properly:

```plaintext
your-project
│
├── /public
│   ├── /icons
│   │   └── arrow-right.svg  # Arrow icon used in the buttons
│   └── /images
│       ├── Big-blob.png     # Animated blob image used for dynamic effect
│       └── other images...
│
├── /components
│   └── Hero.tsx             # The Hero section component code
│
├
│└── page.tsx             # Your main page file where the Hero component is rendered

```

### Files in `public/icons`:

- `arrow-right.svg`: Used as the arrow icon next to the "Learn More" button.

### Files in `public/images`:

- `Big-blob.png`: A large image used for the animated blob effect in the Hero section.

## How it Works

1. **Hero Section Layout**:

   - The hero section is wrapped inside a `<section>` element with custom gradient background and padding.
   - On larger screens (`lg` and `md`), the section displays a tagline, a type animation text, a paragraph of description, and buttons. On mobile screens, the section adapts the layout and shows the content in a vertical stack.

2. **Type Animation**:

   - The **`TypeAnimation`** component is used to cycle through different text strings. The animation repeats indefinitely and each text string is displayed for 2 seconds before transitioning to the next.

3. **Animated Blob**:

   - The **`motion.img`** from `framer-motion` is used to animate the blob image. It moves up and down, creating a lively effect. This animation is set to repeat indefinitely with a mirror effect.

4. **Buttons**:
   - The "Get Started" and "Learn More" buttons are designed to scroll the user to the respective sections of the page. Clicking on them will trigger the `handleScrollToSection` function, which uses the `scrollIntoView` method to smoothly scroll to sections like "services" or "about."

## Customization

You can customize the following aspects of the Hero section:

- **Logo**: Replace any icons or images (such as `arrow-right.svg`) in the `public/icons` directory with your own files.
- **Text**: The text in the TypeAnimation component can be adjusted to fit your messaging. You can change the sequence or text speed to match your preferences.
- **Blob Image**: Replace the `Big-blob.png` image in the `/public/images` directory with your own animated or static image for the background effect.
- **Section Styling**: Customize the background gradient, font sizes, text colors, and spacing using your global CSS or Tailwind utility classes.

## Dependencies

- **React**: For creating the Hero component.
- **Framer Motion**: For animating the blob image and creating smooth transitions.
- **React Type Animation**: For the dynamic typing effect of the text.
- **Next.js Image**: For optimized image rendering (e.g., for the logo or blob image).
- **Tailwind CSS**: For utility-first styling (or adjust styles using your CSS framework).

## Conclusion

The **Hero Section** serves as a dynamic, engaging introduction to your website. With a responsive design, animated text, and interactive buttons, it’s a great way to grab user attention and direct them to key areas of your site. Customizations are easy to implement, and you can modify text, images, and animations to better fit your brand and message.

<br><br>

# LogoTicker Component

The `LogoTicker` component is a dynamic, horizontally scrolling ticker designed to showcase logos in a visually engaging manner. It leverages `Framer Motion` for smooth animations and is fully responsive.

## Features

- **Continuous Scrolling**: Logos scroll infinitely in a seamless loop.
- **Responsive Design**: Adapts to various screen sizes.
- **Reusable**: Easily configurable with any set of logos via a JSON data file.
- **Smooth Animation**: Powered by `Framer Motion`.

---

## How It Works

### Core Functionality

1. **Dynamic Animation**:

   - The `motion.div` continuously scrolls the logo set to the left.
   - The `repeat: Infinity` property ensures infinite looping.

2. **Gradient Mask**:

   - A linear gradient mask effect (`mask-image`) creates a fading effect at the edges.

3. **Seamless Loop**:
   - Logos are repeated to ensure no gaps appear during scrolling.

---

## File Structure

```plaintext
/app
├── /components
│   └── LogoTicker.tsx      # Component code for the ticker
├── /data
│   └── logosData.json      # JSON file containing logo data (src and alt)
├── /public
│   └── /images
│       └── /logos          # Folder containing logo images
│           ├── logo-acme.png
│           ├── logo-quantum.png
│           ├── logo-apex.png
│           ├── logo-echo.png
│           ├── logo-pulse.png
│           └── logo-celestial.png
├
└── page.tsx             # Your main page file where the LogoTicker component is rendered
```

# Usage

## Import and Use the Component

In the app folder, the file 'page.tsx' lies where this component is rendered.

### Add Logo Data:

- Place your logo images in the `/public/images/logos` directory.
- Update `logosData.json` with the `src` and `alt` attributes for each logo.

## Customization

### Animation Speed:

- Adjust the `duration` property in the `motion.div` to control the scrolling speed.

### Logo Dimensions:

- Change the `width` and `height` attributes of the `Image` component.

### Gradient Mask:

- Modify the `mask-image` CSS property for different fade effects.

## Dependencies

- **Framer Motion**: For animations.
- **Next.js Image**: For optimized image handling.

## Example Output

The `LogoTicker` component displays a smooth-scrolling row of logos with a gradient fade effect at the edges, creating a professional and modern visual feature for your website.

<br><br>

# About Component

The `About` component is a React functional component designed for the "About Us" section of a website. It is built using Next.js, optimized for performance, and styled for responsiveness and interactivity. This document outlines its purpose, structure, and how to integrate it into a project.

## Features

- **Dynamic Background Gradient**: Adjusts based on the user's scroll position for a visually appealing effect.
- **Responsive Design**: Optimized for both mobile and desktop screens.
- **SEO Optimization**: Includes a `Meta` component for improved search engine ranking.
- **Interactive Team Section**: Offers toggling for smaller screens and hover effects for larger screens.
- **Animation**: Smooth fade-in animations for content appearance.

## Dependencies

- **React**: For building the component.
- **Next.js**: Provides server-side rendering and image optimization.
- **react-icons**: For using vector icons.

### Import Statements

- `Meta`: A custom component for SEO metadata.
- `Image`: Next.js' image optimization component.
- `MdArrowDownward`: Icon from the `react-icons` library.

## Component Structure

### Static Content

The component uses an `aboutContent` object that contains static data for:

- Title and description of the "About Us" section.
- Mission, Vision, and Values.
- Team member details, including name, role, and image.

### JSX Structure

1. **Meta Component**: Handles the SEO metadata for the page.
2. **About Section**:
   - Title, description, and subsections (Mission, Vision, Values).
   - Background gradient adjusts dynamically with scrolling.
3. **Team Section**:
   - Small screens: Toggle functionality to show/hide team members.
   - Large screens: Grid layout with hover effects.

## Dynamic Features

### Scroll-Based Gradient

The background gradient changes opacity dynamically as the user scrolls. This is achieved using a combination of:

- `useState` for storing the scroll position.
- `useEffect` to listen to the `scroll` event.

### Team Section Toggle

On smaller screens, the team section can be toggled using a button, implemented with:

- `useState` to manage the visibility state.
- CSS transitions for smooth appearance/disappearance.

### Animation

Keyframe animations (`@keyframes fadeIn`) are used to provide smooth content appearance.

## Props

The component does not currently accept props. All data is sourced from the `aboutContent` object. To make it more flexible, you can pass `title`, `description`, `sections`, or `team` as props.

## Styling

- **CSS Classes**: Utility classes from frameworks like Tailwind CSS.
- **Animations**: Defined using inline styles and `@keyframes`.
- **Responsive Grid**: Adjusts the layout for different screen sizes.

## Integration

Import the Component in page.tsx

## Customization

To customize the content or styling:

## Content:

Update the aboutContent object.
Replace images with your assets.

## Styling:

Modify Tailwind CSS classes or add your own styles.

## Animations:

Adjust keyframes or transition durations.

## Team Section:

Images and roles of team members, styled for interaction.

## Project Structure

```plaintext
.your-project
│
├── /public
│   ├── /images
│   │   └── john.png         # Team member images
│
├── /app
│   ├── /components
│   │   └── About.tsx         # The About component code
│   └── page.tsx             # Your main page file where the About component is rendered

```

## Conclusion

The About component is a dynamic, responsive, and visually engaging way to showcase your organization's mission, vision, values, and team. Its modular design makes it easy to integrate into any Next.js project while providing a polished user experience.

<br><br>

# Services Component

The `Services` component showcases your company's offerings in a horizontally scrollable carousel. It is designed to be visually engaging and fully responsive, allowing users to explore your services efficiently.

---

## Features

- **SEO Optimization**: Integrates a `Meta` component for better search engine visibility.
- **Horizontal Scrolling**: Allows smooth navigation through services using buttons or gestures.
- **Interactive Cards**: Cards scale up and display shadows on hover for a modern effect.
- **Customizable Content**: Service details are dynamically loaded from a JSON file.

---

## File Structure

```plaintext
/app
├── /components
│   └── Services.tsx           # Component code for services
├── /data
│   └── services.json          # JSON data file for services
├── /public
│   └── /images
│       └── /services          # Service images
|
└── page.tsx             # Your main page file where the LogoTicker component is rendered
```

## How It Works

### Dynamic Content:

- Service data (title, image, description, details) is fetched from `services.json`.

### Smooth Scrolling:

- Buttons or gestures move the carousel horizontally.
- The `scrollBy` method ensures smooth navigation.

### Hover Effects:

- Cards scale up and reduce opacity for an interactive experience.

# Use the Component

## Update Data:

- Add or edit services in the `services.json` file:

[
{
"title": "Web Development",
"image": "/images/services/service-1.jpg",
"description": "We create high-quality websites for businesses.",
"details": "Responsive design, eCommerce solutions, CMS integration, and more."
}
]

## Customization

### Scroll Distance:

- Adjust the `left` property in `scrollBy` to change the scroll amount.

### Card Styling:

- Update Tailwind classes in the card section for custom styles.

### SEO Meta:

- Modify the Meta component's title, description, keywords, and author.

### Service Images:

- Replace images in `/public/images/services` with your assets.

## Dependencies

- **Next.js Image**: For optimized image handling.
- **Tailwind CSS**: For utility-first styling.

## Example Output

The Services component displays an interactive and visually appealing carousel of services, offering users detailed information and a call to action to learn more.

<br><br>

# CTASection Component

## Overview

The `CTASection` component is a visually engaging, call-to-action (CTA) section designed with a background gradient, animated text, and interactive elements to encourage user interaction. It features a compelling title, description, and a "Connect With Us" button that directs users to a contact form. The section also includes decorative animated circles for added visual appeal.

## Features

- **Background Gradient**: A smooth gradient transition from dark blue to lighter blue to give the section depth.
- **Animated Title**: A gradient text animation that grabs the user’s attention.
- **Description**: A concise and appealing description that invites users to innovate with you.
- **Call-to-Action Button**: A styled button that directs users to the contact form.
- **Decorative Circles**: Animated, floating circles for a modern, dynamic look.

## Usage

### Import the Component

To use the `CTASection` in your project, simply import it and include it within page.tsx

import CTASection from './components/CTASection';

### Customization

You can easily customize various aspects of the `CTASection`:

- **Text and Links**:

  - Modify the title and description text directly in the JSX.
  - Update the `href` attribute of the "Connect With Us" button to link to your desired destination (e.g., a contact form or a booking page).

- **Colors and Styling**:

  - Change the gradient colors for both the background and the text. For example, you can modify the `from-[#010D3E]`, `to-[#001E80]`, and other color codes to fit your brand's color scheme.
  - Adjust the button's colors by changing the `bg-gradient-to-r` values.

- **Animation**:
  - Adjust the `animate-title`, `animate-description`, and `animate-button` classes for different animation effects or timing.
  - Modify the floating circles' size, colors, and animation delays as desired.

## Dependencies

- **Tailwind CSS**: The component uses Tailwind CSS classes for styling and animations. Ensure that Tailwind is properly set up in your project.
- **Framer Motion (Optional)**: You can add more advanced animations using Framer Motion, though it's not required for this component.

## Example Output

The `CTASection` component will display a section with:

- A bold, animated gradient title ("Your Future, Our Innovation").
- A description that invites users to innovate together.
- A call-to-action button ("Connect With Us") that links to the contact form or a specified destination.
- Animated, floating decorative circles that add a dynamic, modern touch.

## Conclusion

The `CTASection` component provides a sleek, professional-looking section for your website with modern animations and a clear call-to-action. It’s designed to engage users and encourage them to take the next step in interacting with your business.
<br><br>

# Portfolio Gallery Component

## Overview

The `PortfolioGallery` component displays a grid of portfolio projects with details such as project title, description, client, solution, and results. It dynamically renders data from a `portfolio.json` file. The component is fully responsive and includes hover effects, optimizing the user experience across various devices.

This component is designed to be used in your main `page.tsx` file located in the `app` directory, rendering the portfolio gallery directly on the page.

## Features

- **Responsive Grid Layout**: Automatically adjusts to various screen sizes using Tailwind CSS grid system.
- **Image Optimization**: Uses Next.js's `Image` component for automatic image optimization.
- **Hover Effects**: Projects scale and cast shadows when hovered, creating an interactive experience.
- **Dynamic Content**: Portfolio data is dynamically loaded from a JSON file, making it easy to update and maintain.
- **SEO Optimization**: Meta tags are included for improved search engine optimization.

## Folder Structure

The component and its dependencies are located within the `app/` directory, while the portfolio images are stored in the `public/images/portfolio/` directory:

```plaintext
app/
├── components/
│   ├── PortfolioGallery.tsx       # The PortfolioGallery component code
├── data/
│   ├── portfolio.json            # Portfolio data
├── page.tsx                      # Main page where the PortfolioGallery component is rendered
public/
├── images/
│   ├── portfolio/
│   │   ├── project-1.jpg         # Example image for portfolio project 1
│   │   ├── project-2.jpg         # Example image for portfolio project 2
│   │   └── other-projects.jpg    # Other project images...

```

## Usage

### 1. Import the Component

To use the `PortfolioGallery` component in your `page.tsx`, import it and include it in your component's JSX as shown below:

import PortfolioGallery from "./components/PortfolioGallery";

### 2. Update Portfolio Data

The `PortfolioGallery` component fetches its data from the `portfolio.json` file located in the `app/data/` directory. You can update or add new projects by modifying this JSON file.

Example structure for each project:

```
{
  "title": "Project Title",
  "image": "/images/portfolio/project-1.jpg",  # Path to the image in the public folder
  "description": "Brief description of the project.",
  "client": "Client Name",
  "solution": "Solution provided",
  "result": "Result achieved"
}
```

### 3. Customize the Section

You can customize the following elements within the component:

- **Section Title**: Modify the text inside the `section-title` class (e.g., "Our Work").
- **Description**: Adjust the description of the portfolio section to fit your branding or messaging.
- **Hover Effects**: Modify the hover effects on project cards by editing Tailwind CSS classes like `hover:scale-105` and `hover:shadow-xl`.

## Dependencies

- **Next.js**: Required for the overall project structure and rendering.
- **Tailwind CSS**: Used for styling, grid layouts, and hover effects.
- **next/image**: Automatically optimizes images for better performance.

## Example Output

When rendered, the component will display a responsive grid of portfolio projects with the following features:

- **Images**: Each project will have an optimized image (using Next.js `Image`).
- **Text Details**: Each project includes a title, description, client, solution, and result.
- **Hover Effects**: Hovering over each project card will scale it and add a shadow effect for an interactive experience.

<br><br>

# Pricing Section Component

## Overview

The `Pricing` component is a flexible, responsive pricing section designed to showcase various pricing plans for businesses. It is ideal for websites offering subscription-based services, with clear visual indicators for different pricing tiers. The component allows users to choose the plan that suits their business needs.

This component fetches its pricing data from a JSON file and displays the plans dynamically. It also supports animations for the "Popular" plan and features like price and feature lists that users can customize easily.

### Features

- **Responsive Layout**: The layout adjusts based on the screen size, from one column to multiple columns.
- **Dynamic Pricing**: Pricing data is fetched from the `pricing.json` file.
- **Popular Plan Highlight**: The "Popular" plan is highlighted with an animated label.
- **Interactive Call-to-Action**: A button links to the contact form for further inquiries.
- **Customizable Styles**: Tailwind CSS classes are used for quick styling, making it easy to customize.

### File Structure

Here is the file structure related to the `Pricing` section:

```plaintext
app/
├── components/
│   ├── Meta.tsx        # Metadata management for SEO, used to set page title, description, etc.
│   ├── Pricing.tsx     # Main component that renders the pricing section
│   ├── data/
│   │   └── pricing.json # Data source for pricing plans (JSON file)
│   ├── page.tsx        # Main page that imports and renders the Pricing component
└── styles/
    └── globals.css     # Global styles for the application
```

### Detailed Breakdown of Files

#### `app/components/Pricing.tsx`

This file contains the main component that displays the pricing plans. It renders the plans dynamically by fetching data from `pricing.json`. The component uses Tailwind CSS classes for styling and Framer Motion for animations.

- **Meta.tsx**: Provides SEO-friendly metadata for the page like title, description, and keywords.
- **Pricing Section**: The section itself displays pricing plans with details like the plan name, price, description, and features. It also includes an animated "Popular" label for popular plans.

#### `app/data/pricing.json`

This JSON file holds the pricing data and features. Here’s an example structure for each plan:

```json
[
  {
    "plan": "Basic",
    "description": "Ideal for small businesses and personal projects.",
    "price": "$100/month",
    "features": ["1 Website", "Basic Support", "1 GB Storage"],
    "inverse": false,
    "popular": false
  },
  {
    "plan": "Pro",
    "description": "For growing businesses with advanced needs.",
    "price": "$500/month",
    "features": ["5 Websites", "Priority Support", "10 GB Storage"],
    "inverse": true,
    "popular": true
  },
  {
    "plan": "Enterprise",
    "description": "For large enterprises with custom solutions.",
    "price": "Custom Pricing",
    "features": [
      "Unlimited Websites",
      "Dedicated Support",
      "Unlimited Storage"
    ],
    "inverse": false,
    "popular": false
  },.....
]
```

# Usage Instructions

### Install Dependencies:

Ensure that you have installed all the required dependencies, including Next.js, Tailwind CSS, and Framer Motion.
If not already installed, you can do so by running the following commands:

npm install next react react-dom tailwindcss framer-motion

app/page.tsx
This is the main entry point of the application, where the Pricing component is imported and rendered.

```
import Pricing from './components/Pricing';

export default function HomePage() {
  return (
    <div>
      <Pricing />
    </div>
  );
}
```

## Customize the Pricing Plans

To update the pricing plans, modify the `pricing.json` file in the `app/data/` folder.
Each plan includes the name, description, price, and list of features. You can add or remove plans as needed.

### Example of adding a new plan:

````
```json
{
  "plan": "Ultimate",
  "description": "For businesses with comprehensive needs.",
  "price": "$2000/month",
  "features": [
    "Unlimited Websites",
    "24/7 Dedicated Support",
    "Unlimited Storage",
    "Custom Integrations"
  ],
  "inverse": true,
  "popular": true
}
````

## Styling

The component uses Tailwind CSS for styling. You can customize the classes in the `Pricing.tsx` file to change the appearance according to your design preferences.

## Conclusion

The Pricing section is a highly customizable, responsive component for displaying your pricing plans. It dynamically loads data from a JSON file, so you can easily update the plans without touching the component code itself. By integrating Tailwind CSS and Framer Motion, it offers a modern and engaging user experience.

For more information on customizing and styling, refer to the official [Tailwind CSS Documentation](https://tailwindcss.com/docs) and [Framer Motion Documentation](https://www.framer.com/motion/).

<br><br>

# Testimonials Section

## Overview

The **Testimonials** section is a key part of your website that displays user feedback in a visually engaging and responsive manner. This section is designed to dynamically showcase a collection of testimonials, with support for multiple columns and animation effects.

The implementation is based on **Next.js**, **React**, and **Tailwind CSS** for styling, along with **Framer Motion** for animations. Testimonials are loaded dynamically from a `testimonials.json` file, making it easy to update them without touching the component code.

## File Structure for Testimonials Section

Here is the relevant file structure related to the **Testimonials** section in your project:

```plaintext
app
│
├── components
│   ├── Testimonials.tsx        # Main component that renders the testimonials section
│   ├── Meta.tsx                # SEO management for the testimonials page
│
├── data
│   └── testimonials.json       # JSON file containing testimonial data
│
├── styles
│   └── globals.css             # Global styles for the project (includes styling for testimonials)
│
├── public
│   └── images
│       └── testimonials
│           ├── avatar-1.png    # Avatar images for testimonials
│           ├── avatar-2.png
│           └── avatar-3.png
│           # ... more images
│
├── layout.tsx                  # Layout that wraps the content (may include testimonials section)
├── page.tsx                    # Main page that renders the Testimonials component
```

## Key Files and Directories

### `app/components/Testimonials.tsx`:

- Contains the main code to render testimonials.
- Supports responsiveness with 3 columns (depending on screen size).
- Uses the `testimonials.json` file to load data.

### `app/data/testimonials.json`:

- Holds the testimonial data in a JSON format.
- Each testimonial includes text, imageSrc, name, and username.
- Easily update or add new testimonials by modifying this file.

### `app/public/images/testimonials/`:

- Stores the image assets (user avatars) associated with each testimonial.

### `app/styles/globals.css`:

- Global styles for the application. Modify this to adjust any overarching styles for the testimonials section, such as typography or container widths.

## Setup Instructions

### 1. Install Required Dependencies

Ensure you have all necessary dependencies installed:

npm install next react react-dom tailwindcss

### 2. Set Up Testimonial Data

Testimonial data is stored in `app/data/testimonials.json`. Here's an example format:

```json
[
  {
    "text": "This app has changed my workflow!",
    "imageSrc": "/images/testimonials/avatar-1.png",
    "name": "John Doe",
    "username": "@johndoe"
  },
  {
    "text": "I can't imagine working without this tool now.",
    "imageSrc": "/images/testimonials/avatar-2.png",
    "name": "Jane Smith",
    "username": "@janesmith"
  },
  {
    "text": "A truly revolutionary product for teams.",
    "imageSrc": "/images/testimonials/avatar-3.png",
    "name": "Alex Johnson",
    "username": "@alexj"
  }
]
```

Feel free to add, remove, or modify testimonials as needed.

### 3. Update Image Paths

The image sources (`imageSrc`) in the `testimonials.json` should point to the correct location of your avatar images in the `public/images/testimonials/` folder. Update these paths as per your setup.

## Customizing the Testimonials Section

### 1. Modify the Testimonials Layout

You can adjust the layout of the testimonials by modifying the following:

- **Column Display**: The `TestimonialsColumn` component divides the testimonials into 3 columns. You can change the number of columns or adjust the breakpoints in the `Testimonials` component (defined in `Testimonials.tsx`).

Example:

```tsx
<div className="flex justify-center gap-6 mt-10 md:max-w-fit">
  <TestimonialsColumn testimonials={firstColumn} duration={15} />
  <TestimonialsColumn
    testimonials={secondColumn}
    duration={19}
    className="hidden md:block"
  />
  <TestimonialsColumn
    testimonials={thirdColumn}
    className="hidden lg:block"
    duration={17}
  />
</div>
```

### 2. Customize Styles

You can easily customize the styles for the testimonials section using Tailwind CSS:

- **Card Styles**: Each testimonial is rendered inside a card element. Customize the card class in your CSS to adjust the design.
- **Animation**: You can modify the `duration` prop in `TestimonialsColumn` to adjust the speed of animations.

Example: You can add custom styles in the `globals.css` file or modify the Tailwind classes directly in the JSX.

### SEO

To ensure SEO optimization, the `Meta` component is used in the Testimonials section:

```tsx
<Meta
  title="Customer Testimonials"
  description="Read what our users have to say about our products and services."
  keywords="testimonials, reviews, user feedback, customers"
  author="Your Company"
/>
```

You can modify the title, description, and other meta tags in the Meta.tsx file to better suit your site’s SEO strategy.

## Conclusion

The **Testimonials** section is a customizable, responsive component that dynamically loads testimonials from a JSON file. By utilizing **Tailwind CSS**, you have full flexibility to modify the appearance and responsiveness of the component. The section supports multiple columns and smooth animations for a more engaging user experience.

For further customization, you can adjust the layout, animation duration, and styling to match your website’s design and branding.

<br><br>

# Contact Section

## Overview

The **Contact Section** is a key feature of your website that allows users to easily get in touch with your team. It includes essential contact information such as phone, email, business hours, and department-specific emails. Additionally, the section contains a contact form where users can submit their queries directly. The design is responsive and ensures an optimal experience across all devices.

This component is built using **React**, **Next.js**, and **Tailwind CSS**. The layout dynamically displays the contact information and includes a section for contacting different departments. The **ContactForm** component allows users to submit inquiries, and all contact details are easily customizable.

## Features

- **Responsive Layout**: Displays contact information in a flexible two-column layout.
- **Dynamic Contact Information**: Easily updateable contact details through an object structure.
- **Departmental Contact Info**: Different departments can have their own contact emails.
- **Interactive Email Links**: Email links are clickable and open the user’s default email client.
- **Customizable Form**: The **ContactForm** component can be customized as needed for handling submissions.

## File Structure

Here is the relevant file structure related to the Contact Section in your project:

```plaintext
├── app
│   ├── components
│   │   ├── ContactSection.tsx     # Main component for the contact section
│   │   ├── ContactForm.tsx        # Component for the contact form
│   ├── api
│   │   └── send-email.ts         # API function for sending the contact form data
│   ├── styles
│   │   └── contactPage.css       # Custom styles for the contact page
│   ├── utils
│   │   ├── emailjs.js            # Email submission logic
│   │   └── validation.js         # Form validation logic
│   ├── page.tsx                  # Page where the ContactSection component is rendered
```

## Contact Section Component (`ContactSection.tsx`)

The **ContactSection** component is divided into two main parts: contact details and a contact form.

## Description of the Code

### Contact Details

The contact information (phone, email, business hours) and department-specific emails are structured in an object to simplify updates.

### Responsive Layout

The layout uses Tailwind CSS's grid system to ensure a responsive design, displaying information in one or two columns depending on the screen size.

### Conditional Rendering

The email links are conditionally rendered, ensuring that users can click on them to open their email client directly.

### Reusable Form

The `ContactForm` component is embedded, making it easy to extend or modify as needed.

---

## Customization

### Contact Info

Update the `contactInfo` array in the `contactDetails` object with your contact details such as phone number, email, and business hours.

### Departments

Modify the `departments` array for different departments within your organization, adding their respective emails and optional notes.

### Styling

Customize the section styling in the `contactPage.css` file to match your brand’s design.

---

## Conclusion

The Contact Section is a flexible and easily customizable component. It allows you to display essential contact details, departmental contact emails, and a contact form in an aesthetically pleasing and responsive layout. By using React, Next.js, and Tailwind CSS, you can easily update and maintain the section according to your needs.

---

# References

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)

<br><br>

# Contact Form component

This repository contains a fully functional contact form built with Next.js. The form integrates with **EmailJS** to send emails without requiring backend knowledge. Below are instructions on how to use, customize, and deploy this template.

## File Structure

Here is the relevant file structure related to the Contact form in the project:

```plaintext
.
├── components
│   └── ContactForm.tsx  # Main contact form component
├── styles
│   └── contactPage.css  # CSS for styling the contact form
├── utils
│   └── validation.ts    # Form validation logic
├── .env.local           # Environment variables for EmailJS (not included in the repo, you have to create it)

```

## Features

- Dynamic form fields for individual and company users.
- Client-side validation using **Yup**.
- Seamless email functionality powered by **EmailJS**.
- Responsive and accessible design.

# Setting Up EmailJS

## 1. Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account.
2. After signing up, log in to your account and go to the **Dashboard**.
3. Create an **Email Service** (e.g., Gmail, Outlook, etc.) and note down the **Service ID**.
   ![EmailJs - ServiceID](https://github.com/user-attachments/assets/133abe6d-0ed1-4d9f-a222-d416dd476c18)
4. Create an **Email Template** and note down the **Template ID**.
   ![EmailJs - TemplateID](https://github.com/user-attachments/assets/ab3e9cc4-a955-4178-92bf-ad20515d5ac0)
5. From the **Account Settings**, copy the **Public Key**.
   ![EmailJs - PublicKey](https://github.com/user-attachments/assets/2a2d5b7b-48c0-4e89-a380-d83806be305e)


## 2. Configure Environment Variables

To integrate EmailJS into your project, you'll need to configure environment variables.

### Steps:

1. Open the project files on your computer.
2. Create a `.env.local` file in the root folder if it doesn’t already exist.
3. Add the following environment variables to the `.env.local` file:

```bash
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
```

Make sure to replace the placeholders (your_public_key_here, your_service_id_here, and your_template_id_here) with the actual values you retrieved from the EmailJS dashboard.

4. Save the .env.local file.

## Note:

- The `NEXT_PUBLIC_` prefix is used for environment variables that need to be publicly accessible in the client-side code.
- Ensure the `.env.local` file is not committed to the repository (it should be ignored by Git).

## Deploying to Netlify

Before deploying your site, make sure to add your environment variables in Netlify.

1. Deploy your site from GitHub by selecting your repository.
2. During the deployment process, Netlify will ask you to enter any environment variables. Add the necessary environment variables at this step.

   - **Key**: `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
   - **Value**: `your_public_key_here`

   - **Key**: `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - **Value**: `your_service_id_here`

   - **Key**: `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - **Value**: `your_template_id_here`

3. Once the deployment is complete, go to **Site settings** in your Netlify dashboard.
4. Under **Site configuration**, find **Environment variables**.
5. You’ll see the environment variables you added earlier. Click on them, edit them, and then make them **secret**.
6. You can now use the website and successfuly use the contact form.

## 3. Running the Project

Once you've set up your `.env.local` file, you can run the project locally.

### Steps:

1. Start the development server:

```bash
   npm run dev
```

2. Open your browser and go to [http://localhost:3000](http://localhost:3000). You should be able to see the contact form.

3. Fill out the contact form and submit it. If everything is configured correctly, the form should send an email using EmailJS.

## 4. Troubleshooting

If you encounter any issues with the EmailJS integration, here are a few things to check:

1. **Ensure the .env.local file is properly configured:**  
   Double-check that your `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`, `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, and `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` are correct.

2. **Check your browser's console for any errors:**  
   If the form isn't working, open the developer tools in your browser and check the console for any error messages.

3. **Restart your development server after modifying .env.local:**  
   You need to restart your server for changes to the environment variables to take effect.

## Deploying the Project

You can deploy this project on any hosting platform that supports Next.js applications, such as Netlify, Render, or your own hosting service.(as described in the steps above)

## Using the Contact Form

Once the project is deployed, users can fill out the contact form and submit their queries. The form will:

- Validate the inputs.
- Send the data to the configured EmailJS service.
- Display success or error messages based on the result.

<br><br>

# Footer Component

A responsive and stylish footer component built with React and Tailwind CSS. Includes social media links, quick navigation links, and a "Back to Top" button.
![Footer](https://github.com/user-attachments/assets/faa2284c-3478-4d12-985c-33b20c34a5b5)

## Features

- **Responsive Design**: Adapts seamlessly across devices.
- **Social Media Links**: Hover effects for better UX.
- **Quick Links**: Easy navigation to key sections.
- **Scroll to Top**: Smooth scrolling functionality.

## Installation

Install dependencies if missing:

```bash
npm install react-icons
```

## Usage

1. Add the `Footer` component to your project:

   ```javascript
   import Footer from "./path-to/Footer";
   ```

2. Place it in your layout or page

## Contact or Further Help

If you have any questions or need further assistance, feel free to reach out to me at:

**Email**: [aerisxbase@gmail.com] (mailto:aerisxbase@gmail.com)

## Thank You!

A big thank you to everyone who purchases or uses this template! 🎉 Your support means a lot to me as I'm just starting out. I hope this template helps you create an amazing website for your business.

## License

This project is licensed under the MIT License.

