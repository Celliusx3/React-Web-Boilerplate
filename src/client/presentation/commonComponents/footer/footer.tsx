import * as React from "react"
import { AppBar, Toolbar, Typography } from "@material-ui/core";

interface FooterProps {
  title: string
}

export class Footer extends React.PureComponent<FooterProps> {

  private _renderFooter = () => {
    const {title} = this.props
    return (
      <AppBar position="static" style= {{top: "auto", bottom: 0}}>
        <Toolbar>
          <Typography variant="overline" color="inherit">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }

  render() {
    return (
      this._renderFooter()
    )
  }
}
