import {useMutation, UseMutationOptions} from 'react-query';
import {httpCustomer} from '../../utils/axiosConfig';
import {
  IRemoveFavouriteRequest,
  IRemoveFavouriteResponse,
} from '../../interfaces/IFavouriteData';

function useRemoveFavouriteRequest(id: IRemoveFavouriteRequest) {
  console.log(`useRemoveFavouriteRequest`, id);
  return httpCustomer
    .delete<any>(`/profile/wishlist?productId=${id.id}`)
    .then((res: any) => {
      return res.data;
    })
    .catch((err: any) => {
      throw new Error(err.response.data.message);
    });
}

export function useRemoveFavourite(
  options: UseMutationOptions<
    IRemoveFavouriteResponse,
    Error,
    IRemoveFavouriteRequest,
    unknown
  >,
) {
  return useMutation(useRemoveFavouriteRequest, options);
}
