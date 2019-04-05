import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';

  const styles = theme => ({
    root: {
      display: 'flex',    
      flexDirection: 'column',
      alignItems: 'center',    
    },
    margin: {
      margin: theme.spacing.unit,
    },
    textField: {
      width: '95%',
    },
  });

  class UserRow extends React.Component {
    render() {
      var name = //this.props.users.stocked ?
        this.props.users.UserName;
        // <span style={{color: 'red'}}>
        //   {this.props.users.UserName}
        // </span>;
      return (
        <tr>
          <td>{name}</td>
          <td>{this.props.users.UserID}</td>
        </tr>
      );
    }
  }

  class UsersTable extends React.Component {
    render() {
      var rows = [];
       this.props.users.forEach((u) => {
         if (u.UserName.indexOf(this.props.filterText) === -1) {
           return;
         }
        rows.push(<UserRow users={u} key={u.UserName} />);
      });
      return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
  }

  

  class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange() {
      this.props.onUserInput(
        this.filterTextInput.value,
        //this.inStockOnlyInput.checked
      );
    }
    render() {
      return (
        <form>
          <input
            type="text"
            placeholder="Search..."
            value={this.props.filterText}
            ref={(input) => this.filterTextInput = input}
            onChange={this.handleChange}
          />
        </form>
      );
    }
  }

  class FilterableUsersTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        filterText: '',
        inStockOnly: false
      };      
      this.handleUserInput = this.handleUserInput.bind(this);
    }
  
    handleUserInput(filterText, inStockOnly) {
      this.setState({
        filterText: filterText,
        inStockOnly: inStockOnly
      });
    }
  
    render() {
        const { classes } = this.props;
      return (
        <div className = {classes.root}>
          <SearchBar
            filterText={this.state.filterText}           
            onUserInput={this.handleUserInput}
          />
          <UsersTable
            users={this.props.users}
            filterText={this.state.filterText}            
          />
        </div>
      );
    }
  }

export default withStyles(styles)(FilterableUsersTable)