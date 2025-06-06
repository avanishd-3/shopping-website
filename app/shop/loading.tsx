import { SkeletonCard } from "@/components/skeleton-card"

// Constants
import { NUM_PRODUCTS_RENDERED } from "@/lib/constants"

export default function Loading() {
    return (
        <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: NUM_PRODUCTS_RENDERED }).map((_, i) => (
                <SkeletonCard key={i} />
            ))}
            </div>
        </div>
    )
}