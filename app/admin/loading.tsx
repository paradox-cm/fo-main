export default function AdminDashboardLoading() {
  return (
    <div className="space-y-6 animate-pulse">
      <div>
        <div className="h-8 w-48 bg-[#242423] rounded mb-2"></div>
        <div className="h-4 w-64 bg-[#242423] rounded"></div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-24 bg-[#242423] rounded"></div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          <div className="lg:col-span-4 h-80 bg-[#242423] rounded"></div>
          <div className="lg:col-span-3 h-80 bg-[#242423] rounded"></div>
        </div>

        <div className="h-96 bg-[#242423] rounded"></div>
      </div>
    </div>
  )
}
