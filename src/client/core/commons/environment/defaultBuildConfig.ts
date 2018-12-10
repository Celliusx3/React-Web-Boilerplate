import { BuildConfig } from "./buildConfig"

export class DefaultBuildConfig implements BuildConfig {
  public isProduction = (): boolean => {
    return process.env.REACT_APP_ENV === "production"
  }

  public isStaging = (): boolean => {
    return process.env.REACT_APP_ENV === "staging"
  }

  public isDebug = (): boolean => {
    return process.env.REACT_APP_ENV === "development"
  }
}
