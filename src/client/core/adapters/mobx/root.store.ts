import { types } from "mobx-state-tree"
import { ConfigurationsStoreModel } from "./configurations.store"
import { DetailsStoreModel } from "./details.store"
import { HomeStoreModel } from "./home.store"

/**
 * An RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  configurationsStore: types.optional(ConfigurationsStoreModel, {}),
  homeStore: types.optional(HomeStoreModel, {}),
  detailsStore: types.optional(DetailsStoreModel, {})
})

/**
 * The RootStore instance.
 */
export type RootStore = typeof RootStoreModel.Type

/**
 * The data of an RootStore.
 */
export type RootStoreSnapshot = typeof RootStoreModel.SnapshotType
