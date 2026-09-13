import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#090d16] text-white flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-4xl font-extrabold mb-2">404</h2>
      <p className="text-xl font-bold mb-4">Page Not Found</p>
      <p className="text-gray-400 mb-6 text-sm">Could not find requested resource.</p>
      <Link
        href="/"
        className="px-6 py-2.5 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
