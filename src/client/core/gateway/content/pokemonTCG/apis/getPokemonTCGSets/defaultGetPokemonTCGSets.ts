import { NetworkService } from "client/core/services/network"
import { GetPokemonTCGSetsRequestPayload, GetPokemonTCGSetsResponsePayload } from "./getPokemonTCGSets"
import { getPokemonTCGSetsMapper } from "./getPokemonTCGSets.mapper"
import { Environment } from "client/core/commons"

export const defaultGetPokemonTCGSets = (
  environment: Environment,
  networkService: NetworkService,
  request: GetPokemonTCGSetsRequestPayload,
): GetPokemonTCGSetsResponsePayload => {
  return networkService.request({
    url: `${process.env.POKEMON_TCG_URL}/sets`,
    decoder: getPokemonTCGSetsMapper
  })
}
