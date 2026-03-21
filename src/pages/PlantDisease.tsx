import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Upload, Leaf, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { detectPlantDisease, getExternalUserId } from "@/services/smartFarmApi";
import { useToast } from "@/hooks/use-toast";

const PlantDisease = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const { t } = useLanguage();
  const { toast } = useToast();

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
    setResult(null);
  };

  const handleAnalyze = async () => {
    if (!file) {
      toast({ variant: "destructive", title: t("common.chooseImage") });
      return;
    }
    const userId = getExternalUserId();
    if (!userId) {
      toast({ variant: "destructive", title: "Please login first" });
      return;
    }
    setLoading(true);
    try {
      const data = await detectPlantDisease(userId, file);
      setResult(data);
    } catch {
      toast({ variant: "destructive", title: "Analysis failed", description: "Please try again" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout title={t("plantDisease.title")}>
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-card border border-border rounded-2xl p-8">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Leaf className="w-7 h-7 text-primary" />
            </div>
          </div>
          <div
            className="border-2 border-dashed border-border rounded-xl p-12 flex flex-col items-center justify-center mb-6 cursor-pointer hover:border-primary/40 transition-colors"
            onClick={() => fileRef.current?.click()}
          >
            {preview ? (
              <img src={preview} alt="Preview" className="max-h-48 rounded-lg object-contain" />
            ) : (
              <>
                <Upload className="w-10 h-10 text-muted-foreground mb-3" />
                <p className="text-muted-foreground text-sm">{t("common.uploadHint")}</p>
              </>
            )}
          </div>
          <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />
          <div className="flex gap-4">
            <Button variant="outline" className="flex-1 rounded-full py-6 text-base font-medium" onClick={() => fileRef.current?.click()}>
              {t("common.chooseImage")}
            </Button>
            <Button className="flex-1 rounded-full py-6 text-base font-medium" onClick={handleAnalyze} disabled={loading || !file}>
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : t("common.analyzeImage")}
            </Button>
          </div>
        </div>

        {result && (() => {
          if (result.detail || result.status === "Rejected") {
            const msg = result.detail || result.message || "Request rejected";
            return (
              <div className="bg-destructive/10 border border-destructive/30 rounded-2xl p-6 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
                <p className="text-sm text-destructive font-medium">{msg}</p>
              </div>
            );
          }

          const status = result.disease || result.prediction || result.status || result.label;
          const isHealthy = status && (status.toLowerCase().includes('healthy') || status.toLowerCase().includes('سليم'));
          const confidenceRaw = result.confidence;
          const confidenceNum = confidenceRaw
            ? typeof confidenceRaw === 'number'
              ? confidenceRaw * 100
              : parseFloat(String(confidenceRaw))
            : null;

          return (
            <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Analysis Result</h3>

              {status && (
                <div className={`border-2 rounded-2xl p-4 flex items-center gap-3 ${isHealthy ? 'bg-primary/5 border-primary/30' : 'bg-destructive/5 border-destructive/30'}`}>
                  {isHealthy ? (
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  ) : (
                    <AlertCircle className="w-6 h-6 text-destructive shrink-0" />
                  )}
                  <p>
                    <span className="font-semibold text-foreground">Status: </span>
                    <span className={isHealthy ? 'text-primary font-medium' : 'text-destructive font-medium'}>{status}</span>
                  </p>
                </div>
              )}

              {confidenceNum != null && !isNaN(confidenceNum) && (
                <div className="bg-secondary/50 border border-border rounded-2xl p-4 space-y-2">
                  <p>
                    <span className="font-semibold text-foreground">Confidence: </span>
                    <span className="text-foreground">{confidenceNum.toFixed(0)}%</span>
                  </p>
                  <Progress value={confidenceNum} className="h-3" />
                </div>
              )}

              {result.treatment && (
                <div className="bg-secondary/50 border border-border rounded-2xl p-4">
                  <span className="font-semibold text-foreground">Treatment: </span>
                  <span className="text-foreground">{result.treatment}</span>
                </div>
              )}

              {!status && (
                <pre className="text-xs text-muted-foreground bg-secondary rounded-lg p-4 overflow-auto max-h-60">
                  {JSON.stringify(result, null, 2)}
                </pre>
              )}
            </div>
          );
        })()}
      </div>
    </DashboardLayout>
  );
};

export default PlantDisease;
