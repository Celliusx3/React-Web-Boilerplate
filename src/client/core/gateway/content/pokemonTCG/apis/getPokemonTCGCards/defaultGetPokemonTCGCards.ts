import { NetworkService } from "client/core/services/network"
import { GetPokemonTCGCardsRequestPayload, GetPokemonTCGCardsResponsePayload } from "./getPokemonTCGCards"
import { getPokemonTCGCardsMapper } from "./getPokemonTCGCards.mapper"
import { Environment } from "client/core/commons"

export const defaultGetPokemonTCGCards = (
  environment: Environment,
  networkService: NetworkService,
  request: GetPokemonTCGCardsRequestPayload,
): GetPokemonTCGCardsResponsePayload => {
  return networkService.request({
    url: `${process.env.POKEMON_TCG_URL}/cards`,
    queryParameters: {...request},
    decoder: getPokemonTCGCardsMapper
  })
}
