import { Dependency, JsonMapper, JsonMapperSymbol } from "client/core/commons"
import { PokemonTCGCard } from "client/core/entities"

export const getPokemonTCGCardsMapper = (
  json: any,
): Promise<PokemonTCGCard[]> => {
  try {
    console.log(json)
    const jsonMapper = Dependency.get<JsonMapper>(JsonMapperSymbol)
    let pokemonTCGCards: PokemonTCGCard[]  = jsonMapper.deserialize(json.cards, PokemonTCGCard)
    return Promise.resolve(
      pokemonTCGCards
    )
  } catch (error) {
    console.log(error)
    return Promise.reject(
      error
    )
  }
}
