import {environment} from '@env';


export class AuthUrl{
  public static readonly BASE_PATH: string = `${environment.backendUrl}/auth`;
  public static readonly LOGIN_URL = `${AuthUrl.BASE_PATH}/login`;
}

