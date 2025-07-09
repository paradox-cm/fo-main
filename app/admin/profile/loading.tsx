export default function ProfileLoading() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <div className="h-8 w-48 bg-gray-800 rounded animate-pulse mb-2"></div>
          <div className="h-4 w-32 bg-gray-800 rounded animate-pulse"></div>
        </div>
        <div className="h-9 w-32 bg-gray-800 rounded animate-pulse"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="h-80 bg-gray-800 rounded animate-pulse"></div>
        <div className="h-80 bg-gray-800 rounded animate-pulse md:col-span-2"></div>
        <div className="h-64 bg-gray-800 rounded animate-pulse md:col-span-3"></div>
      </div>
    </div>
  )
}
