export default function NotificationsLoading() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <div className="h-8 w-48 bg-gray-800 rounded animate-pulse mb-2"></div>
          <div className="h-4 w-32 bg-gray-800 rounded animate-pulse"></div>
        </div>
        <div className="flex gap-2">
          <div className="h-9 w-32 bg-gray-800 rounded animate-pulse"></div>
          <div className="h-9 w-24 bg-gray-800 rounded animate-pulse"></div>
        </div>
      </div>

      <div className="h-10 w-full bg-gray-800 rounded animate-pulse mb-6"></div>

      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="h-32 w-full bg-gray-800 rounded animate-pulse mb-4"></div>
      ))}
    </div>
  )
}
