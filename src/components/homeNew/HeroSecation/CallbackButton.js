import { useMutation } from "@tanstack/react-query";
import { Button } from "../../UI/button";
import { Loader2, Phone } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

/**
 * @param {{ toast: function }} props
 */
export default function CallbackButton({ toast }) {
  const requestCallbackMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest("POST", "/api/request-callback", {});
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Callback Requested",
        description: data.message,
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to request callback",
        variant: "destructive",
      });
    },
  });

  return (
    <Button
      onClick={() => requestCallbackMutation.mutate()}
      disabled={requestCallbackMutation.isPending}
      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-600 dark:hover:from-blue-600 dark:hover:to-indigo-700 text-white px-8 py-3 h-12 text-base font-bold rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl border-0"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {requestCallbackMutation.isPending ? (
        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
      ) : (
        <Phone className="w-5 h-5 mr-2" />
      )}
      Get Expert Callback
    </Button>
  );
}
