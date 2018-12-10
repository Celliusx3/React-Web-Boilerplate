import { AppInfo } from "./appInfo"

export class DefaultAppInfo implements AppInfo {
  public getAppName = (): string => {
    return process.env.APP_NAME
  }

  public getBundleId = (): string => {
    return ""
  }

  public getBuildVersion = (): string => {
    return process.env.APP_VERSION
  }

  public getBuildNumber = (): string => {
    return ""
  }
}
