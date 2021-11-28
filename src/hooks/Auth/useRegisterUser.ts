import {useMutation, UseMutationOptions} from 'react-query';
import {
  IRegisterUserRequest,
  IRegisterUserResponse,
} from '../../interfaces/IAuthData';

import {httpCustomer} from '../../utils/axiosConfig';

async function useRegisterUserRequest(registerRequest: IRegisterUserRequest) {
  try {
    const res = await httpCustomer.post<IRegisterUserResponse>(
      'customer/register',
      registerRequest,
    );
    if (res.data.statusCode == 200) {
      return res.data;
    } else {
      throw new Error('Something Went Wrong');
    }
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
}

export function useRegisterUser(
  options: UseMutationOptions<
    IRegisterUserResponse,
    Error,
    IRegisterUserRequest,
    unknown
  >,
) {
  return useMutation(useRegisterUserRequest, options);
}
