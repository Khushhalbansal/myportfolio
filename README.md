# 🚀 My Portfolio Website ( Coming soon !!)
still workinh on it

Welcome to the repository for my personal portfolio website! This is where I showcase my skills, projects, and a bit of my personality through jaw-dropping 3D animations, slick interactions, and fluid motion. If you're into creative web design, you're in the right place.


## 🔥 Features

- **3D Animations**: Custom-made interactive keyboard using Spline with skills as keycaps that reveal titles and descriptions on hover.
- **Slick Interactions**: Powered by GSAP and Framer Motion for smooth animations on scroll, hover, and element reveal.
- **Space Theme**: Particles on a dark background to simulate a cosmic environment, making the experience out of this world.
- **Responsive Design**: Fully responsive across all devices to ensure the best user experience.
- **Innovative Web Design**: Combining creativity with functionality to push the boundaries of modern web design.

## 🛠️ Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS, Shadcn, Aceternity UI
- **Animations**: GSAP, Framer Motion, Spline Runtime
- **Misc**: Resend, Socketio, Zod

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Khushhalbansal/myportfolio
    ```

2. Navigate to the project directory:

    ```bash
    cd myportfolio
    ```

3. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

4. Set up environment variables:

    ```bash
    cp .env.example .env.local
    ```

    Open `.env.local` and fill in the values:

    | Variable | Required | Description |
    |---|---|---|
    | `RESEND_API_KEY` | Yes (for contact form) | API key from [resend.com](https://resend.com) |
    | `UMAMI_DOMAIN` | No | Script URL from your Umami analytics instance |
    | `UMAMI_SITE_ID` | No | Website ID from your Umami dashboard |
    | `NEXT_PUBLIC_WS_URL` | No | URL of your Socket.io WebSocket server |

    > **Note:** The contact form requires a `RESEND_API_KEY`. The analytics and live-visitors features are optional — leave those variables empty to disable them.

5. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the magic!

## 🚀 Deployment

This site is deployed on Vercel. For your own deployment, follow these steps:

1. Push your code to a GitHub repository.
2. Connect your repository to Vercel.
3. Vercel will handle the deployment process.

## 🤝 Contributing

If you'd like to contribute or suggest improvements, feel free to open an issue or submit a pull request. All contributions are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
