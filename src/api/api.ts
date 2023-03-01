import DeviceInfo from "react-native-device-info";
import axios, { AxiosRequestConfig } from "axios";
import { config } from "@config";

const CONFIG: AxiosRequestConfig = {
  headers: {
    Authorization: "",
    accept: "application/json",
    "Accept-Language": "en",
    "X-App-Version": DeviceInfo.getVersion(),
    "X-Platform": `${DeviceInfo.getSystemName()} ${DeviceInfo.getSystemVersion()}`,
  },
};
export class Api {
  static JWT: string;

  static Config = CONFIG;

  // Helpers
  static get = async <T>(
    endpoint: string,
    params?: { [key in string]: string | number }
  ): Promise<any> => {
    const url = config.BASE_URL + endpoint;

    return (await axios.get<{ data: T }>(url, { ...Api.Config, params })).data;
  };

  static post = async <D, T>(endpoint: string, data: D) => {
    const url = config.BASE_URL + endpoint;

    return (await axios.post<{ data: T }>(url, data, Api.Config)).data.data;
  };

  static patch = async <D, T>(endpoint: string, data: D) => {
    const url = config.BASE_URL + endpoint;

    return (await axios.patch<{ data: T }>(url, data, Api.Config)).data.data;
  };

  static delete = async <D, T>(endpoint: string, data: D) => {
    const url = config.BASE_URL + endpoint;

    return (await axios.delete<{ data: T }>(url, { ...Api.Config, data })).data
      .data;
  };
}
