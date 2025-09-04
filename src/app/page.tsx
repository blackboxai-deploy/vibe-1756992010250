export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Hello World!
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-6"></div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Welcome to your first Next.js application. This is a simple, clean, and modern Hello World page built with React and Tailwind CSS.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-500">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="font-semibold text-gray-700 mb-1">Framework</div>
              <div>Next.js 14</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="font-semibold text-gray-700 mb-1">Styling</div>
              <div>Tailwind CSS</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="font-semibold text-gray-700 mb-1">Components</div>
              <div>shadcn/ui</div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Ready to build something amazing? Start editing{" "}
              <code className="bg-gray-100 px-2 py-1 rounded text-xs font-mono">
                src/app/page.tsx
              </code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}