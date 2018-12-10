import { types, flow, getSnapshot, applySnapshot } from "mobx-state-tree"
import { Dependency } from "client/core/commons"
import { DetailsInteractor, DetailsInteractorSymbol } from "client/core/useCases"
import { PokemonTCGCard } from "client/core/entities"

/**
 * A DetailStore model.
 */
export const DetailsStoreModel = types
  .model("DetailsStore")
  .props({
    isLoading: false,
    pokemonTCGCards: types.optional(types.frozen(), []),
    canFetchMoreCards: types.optional(types.boolean, true),
    error: types.optional(types.string, ""),
  })
  .views(self => ({
  }))
  .actions(self => {
    let initialState = {}
    const detailsInteractor = Dependency.get<DetailsInteractor>(DetailsInteractorSymbol)

    const getPokemonTCGCards = flow(function* getPokemonTCGCards(set: string) {
      if (! self.canFetchMoreCards)
        return

      self.isLoading = true

      try {
        const payload: PokemonTCGCard[] = yield detailsInteractor.getPokemonTCGCards(set, null, null)
        setPokemonTCGCards(payload)

        if (!payload || payload.length <= 0)
          setCanFetchMoreCards(false)

        self.isLoading = false
      } catch (error) {
        console.error(error)
        self.isLoading = false
        self.error = error.message
      }

      return Promise.resolve()
    })

    const setPokemonTCGCards = (items: PokemonTCGCard[]) => {
      if (!items || items.length <= 0)
        return
      if (!self.pokemonTCGCards || self.pokemonTCGCards.length <= 0){
        self.pokemonTCGCards = items
        return
      }
      self.pokemonTCGCards = self.pokemonTCGCards.concat(items)
    }

    const setCanFetchMoreCards = (value: boolean) => {
      self.canFetchMoreCards = value
    }
    
    const clearToInitialState = () => {
      self.pokemonTCGCards = []
    }

    const afterCreate = () => {
      initialState = getSnapshot(self)
    }

    const reset = () => {
      applySnapshot(self, initialState)
    }

    return {
      getPokemonTCGCards,
      reset
    }
  })

/**
 * The DetailStore instance.
 */
export type DetailsStore = typeof DetailsStoreModel.Type

/**
 * The data of an DetailStore.
 */
export type DetailsStoreSnapshot = typeof DetailsStoreModel.SnapshotType
