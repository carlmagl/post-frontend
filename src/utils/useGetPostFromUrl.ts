import { usePostQuery } from "../generated/graphql";
import { getIntId } from "./getIntId";

export const useGetPostFromUrl = () => {
  const intId = getIntId();
  return usePostQuery({
    skip: intId === -1,
    variables: {
      id: intId,
    },
  });
};
