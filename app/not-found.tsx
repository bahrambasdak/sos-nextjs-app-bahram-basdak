import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100 dark:bg-gray-900">
      <div className="text-gray-500 dark:text-gray-400 mb-4 text-6xl">😢</div>
      <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200">
        404
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mt-2">
        صفحه‌ای که به دنبال آن هستید پیدا نشد.
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        برگشت به خانه
      </Link>
    </div>
  );
}
