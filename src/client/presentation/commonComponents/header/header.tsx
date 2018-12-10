import * as React from "react"
import { AppBar, Toolbar, Typography } from "@material-ui/core";

interface HeaderProps {
  title: string
}

export class Header extends React.PureComponent<HeaderProps> {

  private _renderHeader = () => {
    const {title} = this.props
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }

  render() {
    return (
      this._renderHeader()
    )
  }
}
