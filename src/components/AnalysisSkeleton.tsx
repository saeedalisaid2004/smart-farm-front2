import { Skeleton } from "@/components/ui/skeleton";

const AnalysisSkeleton = () => (
  <div className="max-w-2xl mx-auto animate-in fade-in duration-500">
    <Skeleton className="h-8 w-64 mb-2" />
    <Skeleton className="h-4 w-96 mb-8" />

    <div className="bg-card border border-border rounded-2xl p-8">
      <div className="flex justify-center mb-6">
        <Skeleton className="w-16 h-16 rounded-full" />
      </div>

      <Skeleton className="h-48 w-full rounded-xl mb-6" />

      <Skeleton className="h-12 w-full rounded-xl" />
    </div>
  </div>
);

export default AnalysisSkeleton;
