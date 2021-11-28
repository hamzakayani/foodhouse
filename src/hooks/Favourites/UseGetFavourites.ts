import {useQuery, UseQueryOptions} from 'react-query';
import {httpCustomer} from '../../utils/axiosConfig';
import {IFavouriteData} from '../../interfaces/IFavouriteData';

async function useGetFavouritesRequest<T>(id: number) {
  try {
    const res = await httpCustomer.get<T>(`/profile/wishlist/${id}`);
    console.log(`useGetFavouritesRequest`, res);
    return res.data;
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
}

export function useGetAllFavourites<T>(
  value: number,
  options?: UseQueryOptions<T, Error, T>,
) {
  return useQuery(
    ['useGetAllFavourites'],
    () => useGetFavouritesRequest<T>(value),
  );
}
