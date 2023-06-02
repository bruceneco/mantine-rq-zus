import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const key = "repo";

export const useGetRepo = () => {
  return useQuery({
    queryKey: [key],
    queryFn: () =>
      axios
        .get("https://api.github.com/repos/tannerlinsley/react-query")
        .then((res) => res.data),
  });
};
