//import './Menu.css';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';//Link NavLink
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

class MenuAppBar extends React.Component {
  state = {
    anchorEl: null,
    open: false,
  };

  roundMenuClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }
    this.setState({ anchorEl: null });
    this.setState({ open: false });
  };

  render() {
    const { anchorEl } = this.state;
    const { open } = this.state;
    return (
      <div className="root" style={{height:'30vh'}}>

        <AppBar position="static" >
          <Toolbar style={{outline: 'none', backgroundColor: '#049BE6', background: 'linear-gradient(45deg, #E91E63 20%, #00BCD4 90%)'}}  >  

            <IconButton 
                className="bouton" 
                color="inherit" 
                aria-label="Menu" 
                style={{outline: 'none'}} 
                onClick={this.roundMenuClick} >
             <MenuIcon />             
            </IconButton>

            <Menu          
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}>
              <MenuItem onClick={this.handleClose} component={Link} to="/login">Вход</MenuItem>
              <MenuItem onClick={this.handleClose} component={Link} to="/textField">Текстовые поля</MenuItem>
              <MenuItem onClick={this.handleClose} component={Link} to="/textFieldAdornments">Текстовые поля 2</MenuItem>
              <MenuItem onClick={this.handleClose} component={Link} to="/list">List</MenuItem> 
              <MenuItem onClick={this.handleClose} component={Link} to="/load">Load</MenuItem> 
              <MenuItem onClick={this.handleClose} component={Link} to="/about">О программе</MenuItem>              
              <MenuItem onClick={this.handleClose} component={Link} to="/dimensions">Разрешение</MenuItem>
              <MenuItem onClick={this.handleClose} component={Link} to="/">Домашняя страницы</MenuItem> 
              <MenuItem onClick={this.handleClose} component={Link} to="/FilterableUsersTable">FilterableUsersTable</MenuItem> 
              
            </Menu>     
          
            <Button
              className="menuButton" 
              color="inherit"
              style={{outline:'none', marginLeft:15}}           
              buttonRef={node => {
                this.anchorEl = node;
              }}
              aria-owns={open ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={this.handleToggle}>
              Второе меню
            </Button> 
            <Popper open={open} anchorEl={this.anchorEl} transition disablePortal style={{zIndex:2000}}>
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    id="menu-list-grow"
                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={this.handleClose}>
                        <MenuList>
                          <MenuItem 
                            onClick={this.handleClose}
                            component={Link} to="/login" >
                            Вход
                          </MenuItem>
                          <MenuItem 
                            onClick={this.handleClose}
                            component={Link} to="/about">
                            О программе
                          </MenuItem>
                          <MenuItem 
                            onClick={this.handleClose} 
                            component={Link} to="/">
                            <DeleteIcon />
                          </MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>

            <IconButton component={Link} to="/about" >
              <DeleteIcon />
            </IconButton>              
          </Toolbar>  
        </AppBar>      
      </div>
    );
  }
}

export default MenuAppBar;

