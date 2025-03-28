import {Suspense} from "react"
import NewsList from "@/components/news-list"
import {NewsFilters} from "@/components/news-filters"
import {ErrorBoundary} from "@/components/error-boundary"
import {NewsSkeleton} from "@/components/news-skeleton"

// Tornando o componente assíncrono
export default async function Home({ searchParams }: { searchParams: { page?: string; category?: string } }) {
    const params = await searchParams
    const page = Number(params.page) || 1
    const category = params.category || "general"

    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">NewsHub</h1>

            <NewsFilters activeCategory={category}/>

            <ErrorBoundary>
                <Suspense fallback={<NewsSkeleton/>}>
                    <NewsList page={page} category={category}/>
                </Suspense>
            </ErrorBoundary>
        </main>
    )
}