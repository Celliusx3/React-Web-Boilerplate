import { StorageProvider } from "./storageProvider"

/**
 * An implementation of `StorageProvider`
 */
export class DefaultStorageProvider implements StorageProvider {
  public loadString = (key: string): Promise<string> => {
    try {
      return Promise.resolve ("")
    } catch (error) {
      throw error
    }
  }

  public saveString = (key: string, value: string): Promise<boolean> => {
    try {
      return Promise.resolve (true)
    } catch (error) {
      throw error
    }
  }

  public loadObject = (key: string): Promise<any> => {
    try {
      return this.loadString(key).then(value => JSON.parse(value))
    } catch (error) {
      throw error
    }
  }

  public saveObject = (key: string, value: any): Promise<boolean> => {
    try {
      const stringValue = JSON.stringify(value)
      return this.saveString(key, stringValue)
    } catch (error) {
      throw error
    }
  }

  public remove = (key: string): Promise<void> => {
    try {
      return Promise.resolve()
    } catch (error) {
      throw error
    }
  }

  public clear = (): Promise<void> => {
    try {
      return Promise.resolve()
    } catch (error) {
      throw error
    }
  }
}
