import {JsonObject, JsonProperty} from "json2typescript"

@JsonObject("pokemonTCGSet")
class PokemonTCGSet {
  @JsonProperty("code", String)
  public code: string = ""
  @JsonProperty("ptcgoCode", String, true)
  public ptcgoCode: string = ""
  @JsonProperty("name", String)
  public name: string = "" 
  @JsonProperty("series", String)
  public series: string = "" 
  @JsonProperty("totalCards", Number)
  public totalCards: number = 0
  @JsonProperty("standardLegal", Boolean)
  public standardLegal: boolean = false
  @JsonProperty("expandedLegal", Boolean)
  public expandedLegal: boolean = false
  @JsonProperty("releaseDate", String)
  public releaseDate: string = ""
  @JsonProperty("symbolUrl", String)
  public symbollUrl: string = ""
  @JsonProperty("logoUrl", String)
  public logoUrl: string = ""
  @JsonProperty("updatedAt", String)
  public updatedAt: string = ""

  public getCode = (): string => {
    return this.code
  }

  public getPtcgoCode = (): string => {
    return this.ptcgoCode
  }

  public getName = (): string => {
    return this.name
  }

  public getSeries = (): string => {
    return this.series
  }

  public getTotalCards = (): number => {
    return this.totalCards
  }

  public getStandardLegal = (): boolean => {
    return this.standardLegal
  }

  public getExpandedLegal = (): boolean => {
    return this.expandedLegal
  }

  public getReleaseDate = (): string => {
    return this.releaseDate
  }

  public getSymbolUrl = (): string => {
    return this.symbollUrl
  }

  public getLogoUrl = (): string => {
    return this.logoUrl
  }

  public getUpdatedAt = (): string => {
    return this.updatedAt
  }

}

export { PokemonTCGSet }