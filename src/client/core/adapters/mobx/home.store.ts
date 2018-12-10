import { types, flow } from "mobx-state-tree"
import { Dependency } from "client/core/commons"
import { HomeInteractor, HomeInteractorSymbol } from "client/core/useCases"
import { PokemonTCGSet } from "client/core/entities"

/**
 * A HomeStore model.
 */
export const HomeStoreModel = types
  .model("HomeStore")
  .props({
    isLoading: false,
    pokemonTCGSets: types.optional(types.frozen(), []),
    error: types.optional(types.string, ""),
  })
  .views(self => ({
  }))
  .actions(self => {
    const homeInteractor = Dependency.get<HomeInteractor>(HomeInteractorSymbol)

    const getAllPokemonTCGSets = flow(function* getAllPokemonTCGSets() {
      self.isLoading = true

      try {
        const payload: PokemonTCGSet[] = yield homeInteractor.getPokemonTCGSets()
        setPokemonTCGSets(payload)
        self.isLoading = false
      } catch (error) {
        console.error(error)
        self.isLoading = false
        self.error = error.message
      }

      return Promise.resolve()
    })

    const setPokemonTCGSets = (items: PokemonTCGSet[]) => {
      self.pokemonTCGSets = items
    }

    return {
      getAllPokemonTCGSets,
    }
  })

/**
 * The HomeStore instance.
 */
export type HomeStore = typeof HomeStoreModel.Type

/**
 * The data of an HomeStore.
 */
export type HomeStoreSnapshot = typeof HomeStoreModel.SnapshotType
