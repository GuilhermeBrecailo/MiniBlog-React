import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import { query } from "firebase/firestore";

export function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}
