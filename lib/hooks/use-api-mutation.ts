import { useMutation } from "convex/react";
import { FunctionReference } from "convex/server";
import { useState } from "react";

export const useApiMutation = <T extends FunctionReference<"mutation">>(
  mutationFunction: T,
) => {
  const [pending, setPending] = useState(false);
  const apiMutation = useMutation(mutationFunction);

  const mutate = async (payload: any) => {
    setPending(true);
    return apiMutation(payload)
      .finally(() => setPending(false))
      .then((res) => res)
      .catch((err) => {
        throw err;
      });
  };
  return {
    mutate,
    pending,
  };
};
