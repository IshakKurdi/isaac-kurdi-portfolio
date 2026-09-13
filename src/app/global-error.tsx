"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#090d16] text-white flex flex-col items-center justify-center p-6 text-center font-sans">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <p className="text-gray-400 mb-6 text-sm max-w-md">{error.message || "An unexpected global error occurred."}</p>
        <button
          onClick={() => reset()}
          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
