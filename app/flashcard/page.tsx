// 'use client';
// import { useUser } from '@clerk/nextjs';
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';
// import FlashCardPage from './FlashCardPage';

// export default function FlashcardPageWrapper() {
//   const { isLoaded, isSignedIn, user } = useUser();
//   const router = useRouter();

//   useEffect(() => {
//     if (isLoaded && !isSignedIn) {
//       router.push('/');
//     }
//   }, [isLoaded, isSignedIn, router]);

//   if (!isLoaded || !isSignedIn) {
//     return null;
//   }

//   return <FlashCardPage />;
// }

'use client';
import { useState } from 'react';
import styles from './FlashcardGenerator.module.css';
import { UserButton } from '@clerk/nextjs';

export default function FlashcardPage() {
  const [inputText, setInputText] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [flashcards, setFlashcards] = useState<{ front: string; back: string }[]>([]);
  const [currentCard, setCurrentCard] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showFlashcard, setShowFlashcard] = useState(false);
  const [open, setOpem] = useState(false);

  const handleGenerateFlashcards = async () => {
    const formData = new FormData();
    if (file) {
      formData.append('file', file);
    }
    if (inputText) {
      formData.append('text', inputText);
    }

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('API Response:', data);

      if (data.flashcards && Array.isArray(data.flashcards)) {
        setFlashcards(data.flashcards);
        setCurrentCard(0);
        setFlipped(false);
        setError(null);
        setShowFlashcard(true);
      } else {
        throw new Error('Invalid response structure');
      }
    } catch (error) {
      console.error('Error generating flashcards:', error);
      setError('Error generating flashcards. Please try again.');
    }
  };

  const handleFileChange = (file: File) => {
    const validTypes = [
      'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/rtf', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      'image/jpeg', 'image/png', 'text/plain'
    ];
    
    if (validTypes.includes(file.type)) {
      setFile(file);
      handleGenerateFlashcards(); // Automatically generate flashcards when a file is uploaded
    } else {
      setError('Invalid file type. Please upload a PDF, DOC, DOCX, RTF, PPT, PPTX, JPEG, PNG, or TXT file.');
    }
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleSelectFromDevice = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pdf,.doc,.docx,.rtf,.ppt,.pptx,.jpeg,.jpg,.png,.txt';
    input.onchange = (e) => {
      const target = e.target as HTMLInputElement;
      if (target && target.files && target.files[0]) {
        handleFileChange(target.files[0]);
      }
    };
    input.click();
  };

  const handleCardFlip = () => setFlipped(!flipped);

  const handleNextCard = () => {
    setCurrentCard((prev) => (prev + 1) % flashcards.length);
    setFlipped(false);
  };

  const handlePreviousCard = () => {
    setCurrentCard((prev) => (prev - 1 + flashcards.length) % flashcards.length);
    setFlipped(false);
  };

  const closeFlashcard = () => setShowFlashcard(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 flex flex-col items-center justify-center py-8 px-4">
      <UserButton />
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Generate Flashcards</h1>

      <div className={`${styles.uploadSection} mb-12`}>
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <svg
            className="w-12 h-12 text-gray-400 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <p className="text-lg font-medium text-gray-700 mb-2">
            Drag and drop document here to upload
          </p>
          <button
            onClick={handleSelectFromDevice}
            className="bg-blue-500 text-black px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition cursor-pointer"
          >
            Select from device
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Up to 100 MB for PDF and up to 25 MB for DOC, DOCX, RTF, PPT, PPTX, JPEG, PNG, or TXT
          </p>
        </div>
      </div>
      <textarea
        className="p-4 w-full max-w-2xl h-40 border border-gray-300 rounded-lg shadow-md mb-4 bg-white"
        placeholder="Enter text here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        className="bg-blue-500 text-black px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
        onClick={handleGenerateFlashcards}
      >
        Generate Flashcards
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {showFlashcard && flashcards.length > 0 && (
        <div className={styles.flashcardOverlay}>
          <button className={styles.overlayCloseButton} onClick={closeFlashcard}>X</button>
          <div className={styles.flashcardOverlayContent}>
            <div
              className={`${styles.flashcard} ${flipped ? styles.flipped : ''}`}
              onClick={handleCardFlip}
            >
              <div className={styles.front}>
                <div className={styles.content}>{flashcards[currentCard].front}</div>
              </div>
              <div className={styles.back}>
                <div className={styles.content}>{flashcards[currentCard].back}</div>
              </div>
            </div>
            <div className={styles.navigationButtons}>
              <button
                onClick={handlePreviousCard}
                className={styles.navButton}
              >
                &lt;
              </button>
              <button
                onClick={handleNextCard}
                className={styles.navButton}
              >
                &gt;
              </button>
            </div>
          </div>
          <button
            onClick={handlePreviousCard}
            className={`${styles.arrowButton} ${styles.arrowLeft}`}
          >
            &lt;
          </button>
          <button
            onClick={handleNextCard}
            className={`${styles.arrowButton} ${styles.arrowRight}`}
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
}
      
