import {useMutation, UseMutationOptions} from 'react-query';
import {
  ILoginRequest,
  IUserSessionData as ILoginResponse,
} from '../../interfaces/IAuthData';
import {httpUser} from '../../utils/axiosConfig';

async function useLoginUserRequest(loginRequest: ILoginRequest) {
  try {
    const res = await httpUser.post<ILoginResponse>('user/login', loginRequest);
    if (res.data.statusCode == 200) {
      return res.data;
    } else {
      throw new Error('Something Went Wrong');
    }
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
}

export function useLoginUser(
  options: UseMutationOptions<ILoginResponse, Error, ILoginRequest, unknown>,
) {
  return useMutation(useLoginUserRequest, options);
}
