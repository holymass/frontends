import * as React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import {
  default as withStyles,
  WithStyles
} from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const styles = createStyles({
  card: {
    minWidth: 300,
  },
  button: {
    width: 250,
  }
});

export interface MassCardProps extends WithStyles<typeof styles> {
  name: string;
}

export interface MassCardState {
  open: boolean;
}


class MassCard extends React.Component<MassCardProps, MassCardState> {
  constructor(props: MassCardProps) {
    super(props);
    this.state = { open: false };
  }

  handleDialogOpen = () => {
    this.setState({ open: true });
  }

  handleDialogClose = () => {
    this.setState({ open: false });
  }

  render() {
    const { classes, name } = this.props;
    return (
      <div>
        <Card className={classes.card} onClick={this.handleDialogOpen}>
          <CardContent>
            <Typography>
              {name}
            </Typography>
          </CardContent>
        </Card>
        <Dialog open={this.state.open} onClose={this.handleDialogClose}>
          <div>
            <List>
              {['甲年', '乙年', '丙年'].map(year => {
                return (
                  <ListItem key={year}>
                    <Button className={classes.button} target='_blank' href={`/mass/?markdown=${year}/${name}`}>
                      {year}
                    </Button>
                  </ListItem>);
              })}
            </List>
          </div>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(MassCard);
