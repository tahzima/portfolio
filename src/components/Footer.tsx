export default function Footer() {
  return (
    <footer className="py-8 bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800">
      <div className="container mx-auto px-4 md:px-6 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}
