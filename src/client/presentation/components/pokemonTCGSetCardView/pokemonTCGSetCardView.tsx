import * as React from "react"
import { PokemonTCGSet } from "client/core/entities";
import { ButtonBase, Typography } from "@material-ui/core";
import metrics from "client/presentation/theme/base/metrics";

interface PokemonTCGSetCardViewProps {
  width: number
  height: number
  pokemonTCGSet: PokemonTCGSet
  onClick: (event) => void
}

interface PokemonTCGSetCardViewState {
}

export class PokemonTCGSetCardView extends React.Component<PokemonTCGSetCardViewProps, PokemonTCGSetCardViewState> {

  constructor (props) {
    super(props)
  }

  private _renderImage = () => {
    const { pokemonTCGSet, width } = this.props

    return (
      <img style = {{objectFit: "contain", width, height: width}} 
          src={pokemonTCGSet.getLogoUrl()} 
          alt={pokemonTCGSet.getCode()} />
    )
  }

  private _renderTag = () => {
    const {pokemonTCGSet} = this.props
    var tagStyle: React.CSSProperties
    var tagText = ""
    if (pokemonTCGSet.getStandardLegal() && pokemonTCGSet.getExpandedLegal()){
      tagText = "Standard & Expanded"
      tagStyle = {backgroundColor: "#e91e63"}
    } else if (pokemonTCGSet.getStandardLegal() && !pokemonTCGSet.getExpandedLegal()){
      tagText = "Standard"
      tagStyle = {backgroundColor: "#009688"}
    } else if (!pokemonTCGSet.getStandardLegal() && pokemonTCGSet.getExpandedLegal()){
      tagText = "Expanded"
      tagStyle = {backgroundColor: "#3f51b5"}
    } else {
      return null
    }
    return (
      <div style ={{color:"#fff", width: "fit-content", padding: metrics.margin.tiny, marginTop: metrics.margin.tiny, marginBottom: metrics.margin.tiny, borderRadius: metrics.borderRadius.small, ...tagStyle}}>
        {tagText}
      </div>
    )
  }

  private _renderTitle = () => {
    const { pokemonTCGSet } = this.props
    return (
      <Typography variant="body1" align="left">
        {pokemonTCGSet.getName()}
      </Typography>
    )
  }

  render() {
    const { width, height, onClick } = this.props

    return (
      <ButtonBase 
      onClick = {onClick}
      focusRipple>
        <div style = {{width, height, display: "inline-flex", padding: metrics.margin.tiny, flexDirection: "column"}}>
          {this._renderImage()}
          {this._renderTag()}
          {this._renderTitle()}
        </div>
      </ButtonBase>
    )
  }
}