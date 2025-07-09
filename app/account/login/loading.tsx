export default function LoginLoading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0A0A0B] px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <div className="h-16 w-16 animate-pulse rounded-full bg-[#222]" />
        </div>

        <div className="rounded-lg border border-[#222] bg-[#111] p-6 shadow-xl">
          <div className="mb-6 h-10 animate-pulse rounded-md bg-[#222]" />

          <div className="space-y-4">
            <div className="h-6 w-1/3 animate-pulse rounded bg-[#222]" />
            <div className="h-10 animate-pulse rounded bg-[#222]" />

            <div className="h-6 w-1/3 animate-pulse rounded bg-[#222]" />
            <div className="h-10 animate-pulse rounded bg-[#222]" />

            <div className="h-10 animate-pulse rounded bg-[#222]" />
          </div>
        </div>
      </div>
    </div>
  )
}
