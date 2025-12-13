import { Skeleton } from "./ui/skeleton"
import { NUM_PRODUCTS_RENDERED } from "../lib/constants"

// From shadcn
export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 min-w-55">
      <Skeleton className="h-62.5 w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[80%]" />
      </div>
    </div>
  )
}

// Not sure why this works, but it does

export function SkeletonCardRow() {
  return (
    <div className="grid gap-6">
      {Array.from({ length: 2 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  )
}

export function SkeletonCardGrid() {
  // Generate grid of NUM_PRODUCTS_RENDERED / 2 skeleton rows
  return (
    <div className="flex gap-6">
      {Array.from({ length: NUM_PRODUCTS_RENDERED / 2 }).map((_, i) => (
        <SkeletonCardRow key={i} />
      ))}
    </div>
  )
}