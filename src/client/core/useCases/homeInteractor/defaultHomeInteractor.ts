import { HomeInteractor } from "./homeInteractor"
import { ContentGateway } from "../../gateway/content/content.gateway"
import { PokemonTCGSet } from "../../entities"

/**
 * An implementation of `HomeInteractor`
 */
export class DefaultHomeInteractor implements HomeInteractor {
  private _contentGateway: ContentGateway

  /**
   * Represents a `HomeInteractor`.
   * @constructor
   */
  constructor(contentGateway: ContentGateway) {
    this._contentGateway = contentGateway
  }

  public getPokemonTCGSets = (): Promise<PokemonTCGSet[]> => {
    return this._contentGateway.getPokemonTCGSets({})
  }
}
