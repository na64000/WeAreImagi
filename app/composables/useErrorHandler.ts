import { ref } from "vue";

export function useErrorHandler() {
  const error = ref<Error | null>(null);

  const handleError = (err: unknown) => {
    console.error("Error caught by handler:", err);
    error.value = err as Error;
    return false; // prevent error from propagating
  };

  const clearError = () => {
    error.value = null;
  };

  return {
    error,
    handleError,
    clearError,
  };
}
