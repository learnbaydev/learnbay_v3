import { useMutation } from "@tanstack/react-query";
import { Button } from "../../UI/button";
import { Loader2, Download } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

/**
 * @param {{ toast: function }} props
 */
export default function DownloadButton({ toast }) {
  const downloadRoadmapMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest("POST", "/api/download-roadmap", {});
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Download Started",
        description: data.message,
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to download roadmap",
        variant: "destructive",
      });
    },
  });

  return (
    <Button
      variant="ghost"
      onClick={() => downloadRoadmapMutation.mutate()}
      disabled={downloadRoadmapMutation.isPending}
      className="border border-gray-300 bg-white/80 text-gray-700 hover:bg-white hover:border-gray-400 dark:border-slate-600 dark:bg-slate-800/80 dark:text-gray-200 dark:hover:bg-slate-700 dark:hover:border-slate-500 px-8 py-3 h-12 text-base font-semibold rounded-xl transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {downloadRoadmapMutation.isPending ? (
        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
      ) : (
        <Download className="w-5 h-5 mr-2" />
      )}
      Download Career Roadmap
    </Button>
  );
}
