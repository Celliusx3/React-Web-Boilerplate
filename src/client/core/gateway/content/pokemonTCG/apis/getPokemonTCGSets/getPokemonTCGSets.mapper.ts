import { PokemonTCGSet } from "client/core/entities"
import { Dependency, JsonMapper, JsonMapperSymbol } from "client/core/commons"

export const getPokemonTCGSetsMapper = (
  json: any,
): Promise<PokemonTCGSet[]> => {
  try {
    const jsonMapper = Dependency.get<JsonMapper>(JsonMapperSymbol)
    let pokemonTCGSets: PokemonTCGSet[] = jsonMapper.deserializeArray(json.sets, PokemonTCGSet)
    return Promise.resolve(
      pokemonTCGSets
    )
  } catch (error) {
    return Promise.reject(
      error
    )
  }
}
