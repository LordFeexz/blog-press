import BackBtn from "@/components/common/back-btn";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <FileQuestion className="mx-auto h-16 w-16 text-blue-500 mb-6" />
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          404 - Page Not Found
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Oops! The page you&apos;re looking for doesn&apos;t exist. It might
          have been moved or deleted.
        </p>
        <div className="space-y-4">
          <BackBtn />
        </div>
      </div>
    </div>
  );
}
