import * as React from "react"
import { PokemonTCGCard } from "client/core/entities"
import { ButtonBase } from "@material-ui/core";
import metrics from "client/presentation/theme/base/metrics";

interface PokemonTCGCardCardViewProps {
  width: number
  pokemonTCGCard: PokemonTCGCard
  onClick: (event) => void
}

interface PokemonTCGCardCardViewState {
}

export class PokemonTCGCardCardView extends React.Component<PokemonTCGCardCardViewProps, PokemonTCGCardCardViewState> {

  constructor (props) {
    super(props)
  }

  private _renderImage = () => {
    const { pokemonTCGCard, width } = this.props
    return (
      <img style = {{objectFit: "contain", width, height: "auto"}} 
        src={pokemonTCGCard.getImageUrl()} 
        alt={pokemonTCGCard.getId()} />
    )
  }

  render() {
    const { width, onClick } = this.props

    return (
      <ButtonBase 
      onClick = {onClick}
      focusRipple>
        <div style = {{width, height: "auto", display: "inline-flex", padding: metrics.margin.tiny, flexDirection: "column"}}>
          {this._renderImage()}
        </div>
      </ButtonBase>
    )
  }
}
