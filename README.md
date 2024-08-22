# Flashy.AI

A web app that generates flashcards from uploaded documents (PDF, DOCX, PPTX, TXT) or input text.
This tool helps users create study aids by converting text content into flashcards that can be used for revision. It also features Stripe for payment.

## Features

- **File Upload**: Drag and drop or select files from your device (PDF, DOC, DOCX, PPTX, TXT) to generate flashcards.
- **Text Input**: Enter text manually to create flashcards.
- **Flashcard Navigation**: Flip through generated flashcards to review content.
- **Firebase Integration**: Store user data, flashcards, and other content securely using Firebase.
- **Stripe Payments**: Support for payment processing using Stripe for premium features.
- **Responsive Design**: The interface is optimized for both desktop and mobile devices.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **TypeScript**: Provides type safety for JavaScript code.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Node.js**: Backend environment for handling file parsing and API requests.
- **Firebase**: Used for storing user data and flashcards.
- **Stripe**: Integrated for handling payment processing.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/flashcard-generator.git
   cd flashcard-generator


2. **Install**
   ```
   npm install
   ```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
