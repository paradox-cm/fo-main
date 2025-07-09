import { Skeleton } from "@/components/ui/skeleton"

export default function DesignSystemLoading() {
  return (
    <div className="container mx-auto py-12 px-4">
      <header className="mb-12">
        <Skeleton className="h-8 w-32 mb-4" />
        <Skeleton className="h-16 w-full max-w-2xl mb-4" />
        <Skeleton className="h-6 w-full max-w-3xl" />
      </header>

      <Skeleton className="h-12 w-full max-w-md mb-8" />

      <div className="space-y-12">
        <section>
          <Skeleton className="h-10 w-48 mb-8" />
          <div className="grid gap-8 md:grid-cols-2">
            <Skeleton className="h-[400px] w-full rounded-lg" />
            <Skeleton className="h-[400px] w-full rounded-lg" />
          </div>
        </section>

        <section>
          <Skeleton className="h-10 w-48 mb-8" />
          <div className="grid gap-8 md:grid-cols-2">
            <Skeleton className="h-[300px] w-full rounded-lg" />
            <Skeleton className="h-[300px] w-full rounded-lg" />
          </div>
        </section>

        <section>
          <Skeleton className="h-10 w-48 mb-8" />
          <div className="grid gap-8 md:grid-cols-2">
            <Skeleton className="h-[350px] w-full rounded-lg" />
            <div className="space-y-8">
              <Skeleton className="h-[150px] w-full rounded-lg" />
              <Skeleton className="h-[150px] w-full rounded-lg" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
