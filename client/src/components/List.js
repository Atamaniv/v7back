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

  class ProductCategoryRow extends React.Component { // Категорию 
    render() {
      return (<tr><th colSpan="2">{this.props.category}</th></tr>);
    }
  }

  class ProductRow extends React.Component {
    render() {
      var name = this.props.product.stocked ?
        this.props.product.name :
        <span style={{color: 'red'}}>
          {this.props.product.name}
        </span>;
      return (
        <tr>
          <td>{name}</td>
          <td>{this.props.product.price}</td>
        </tr>
      );
    }
  }

  class ProductTable extends React.Component {
    render() {
      var rows = [];
      var lastCategory = null;
      this.props.products.forEach((product) => {
        if (product.name.indexOf(this.props.filterText) === -1 || 
           (!product.stocked && this.props.inStockOnly)) {
          return;
        }
        if (product.category !== lastCategory) {
          rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
        }
        rows.push(<ProductRow product={product} key={product.name} />);
        lastCategory = product.category;
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
        this.inStockOnlyInput.checked
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
          <p>
            <input
              type="checkbox"
              checked={this.props.inStockOnly}
              ref={(input) => this.inStockOnlyInput = input}
              onChange={this.handleChange}
            />            
            {' '} Only show products in stock 
          </p>          
        </form>
      );
    }
  }

  class FilterableProductTable extends React.Component {
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
            inStockOnly={this.state.inStockOnly}
            onUserInput={this.handleUserInput}
          />
          <ProductTable
            products={this.props.products}
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
          />
        </div>
      );
    }
  }

export default withStyles(styles)(FilterableProductTable)