import { DeviceInfo as RNDeviceInfo } from "./deviceInfo"

export class DefaultDeviceInfo implements RNDeviceInfo {
  public getOSName = (): string => {
    return ""
  }

  public getOSVersion = (): string => {
    return ""
  }

  public getCarrierName = (): string => {
    return ""
  }

  public getBrandName = (): string => {
    return ""
  }

  public getDeviceName = (): string => {
    return ""
  }

  public getDeviceCountry = (): string => {
    return ""
  }

  public getDeviceLocale = (): string => {
    return ""
  }

  public getUniqueId = (): string => {
    return ""
  }

  /**
   * Return platform.
   * @returns {string} `string` web | native
   */
  public getPlatformType = (): string => {
    return "web"
  }
}
