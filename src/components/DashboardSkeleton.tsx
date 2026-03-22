import { Skeleton } from "@/components/ui/skeleton";

const DashboardSkeleton = () => (
  <div className="space-y-6 animate-in fade-in duration-500">
    {/* Stats cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <Skeleton className="w-12 h-12 rounded-xl" />
            <div className="flex-1">
              <Skeleton className="h-3 w-20 mb-2" />
              <Skeleton className="h-6 w-16" />
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Chart area */}
    <div className="bg-card border border-border rounded-2xl p-6">
      <Skeleton className="h-5 w-40 mb-4" />
      <Skeleton className="h-64 w-full rounded-xl" />
    </div>

    {/* Table area */}
    <div className="bg-card border border-border rounded-2xl p-6">
      <Skeleton className="h-5 w-32 mb-4" />
      {Array.from({ length: 5 }).map((_, i) => (
        <Skeleton key={i} className="h-12 w-full rounded-lg mb-2" />
      ))}
    </div>
  </div>
);

export default DashboardSkeleton;
