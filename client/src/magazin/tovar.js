import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';//Link

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class Tovar extends React.Component {  
  constructor (props){     
    super(props); 
    this.state= {
        id:this.props.id,
        name:this.props.name,
        image:this.props.image,
        opisanie:this.props.opisanie,
        opisanie_show: false
    }
  }
  showDetail=()=>{
    let x=!this.state.opisanie_show
    this.setState({
      opisanie_show : x
    })
  }
  render() {
    const { name, image, opisanie, opisanie_show } = this.state; 
    return (
        <div className="card" style={{padding:'1px'}}>
          <img class="card-img-top" src={image}  alt="" />
          <div className="card-body" style={{margin:0, padding:'12px'}}>
            <p className="card-text" style={{margin:0}}>{name}</p>                      
            {opisanie_show && (
            <p className="card-text"><small className="text-muted">{opisanie}</small></p>
            )}
         </div>
         <Button component={Link} to="/about" onClick={this.showDetail}>
          В корзину
         </Button>

         <Button component={Link} to="/about">
          About
        </Button>
        </div>
    );
  }
}

export default withStyles(styles)(Tovar);


