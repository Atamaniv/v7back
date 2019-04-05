import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';//Link NavLink
import Button from '@material-ui/core/Button';
import MenuAppBar from './Menu';
import DividerExampleForm from './components/Divider';
import OutlinedTextFields from './components/TextFields';
import OutlinedInputAdornments from './components/TextFieldsAdornments';
import DelayingAppearance from './components/Load';
import DynamicInlineStyle from './components/ButtonChackerClass';
import Login from './components/Login';
import FilterableProductTable from './components/List';
import FilterableUsersTable from './components/UsersList';
import Tovary from './magazin/tovary';
//import Load from "./magazin/speedsheet.js";



var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99',  stocked: true,  name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99',   stocked: true,  name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99',  stocked: false, name: 'Basketball'},
  {category: 'Electronics',    price: '$99.99',  stocked: true,  name: 'iPod Touch'},
  {category: 'Electronics',    price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics',    price: '$199.99', stocked: true,  name: 'Nexus 7'}
];

var USERS = [
  {UserID: '2', UserName: "Иванов Иван",  UserAvatarSmall: ""},
  {UserID: '34', UserName: "Петров Петр",  UserAvatarSmall: ""},
  {UserID: '3', UserName: "Вадимов Вадим",  UserAvatarSmall: ""},
];

class MyApp extends Component {
  state = {
    loggedIn:false,
    items:[
            {'id':'1','name':'Товар'}
          ]
  }

//ROUTER ==============================================================================
  render() {
    //const { classes } = this.props;
    return (
    <Router>  
      <div className="App">        
       <MenuAppBar/>
         <Route path="/" exact striсt render={()=>{return(
            <div>
              <h1>Home</h1>              
              <DividerExampleForm /><br/>
              <Button 
                style={{outline: 'none'}} 
                
                >Отмена
              </Button>&nbsp;

              <Button 
                style={{outline: 'none'}} 
                variant="contained" 
                //variant="outline"
                color="primary" > Сохранить 
              </Button>

              <Tovary items={this.state.items}/>

            </div>
            );}} 
            />
         <Route path="/about" exact striсt render={()=>{return(
           <div>
           <h1>О программе</h1>
           <DynamicInlineStyle />
           </div>
         );}} />
         <Route path="/textField" exact striсt render={()=>{return(
            <div>
              <h1>textField</h1>
              <div style={{margin:30}}>
              <OutlinedTextFields/>
              </div>
            </div>
          );}} />

         <Route path="/textFieldAdornments" exact striсt render={()=>{return(
            <div>
              <h1>textField</h1>
              <div style={{margin:30}}>
              <OutlinedInputAdornments/>
              </div>
            </div>
          );}} />

        <Route path="/FilterableUsersTable" exact striсt render={()=>{return(
            <div>
              <h1>FilterableUsersTable</h1>
              <div style={{margin:30}}>
              <FilterableUsersTable users={USERS}/>
              </div>
            </div>
          );}} />          

         <Route path="/load" exact striсt render={()=>{return(
            <div>
              <h1>LOADING</h1>
              <div style={{margin:30}}>
              <DelayingAppearance />
              </div>
            </div>
          );}} />

         <Route path="/list" exact striсt render={()=>{return(
            <div>
              <h1>List component</h1>
              <div style={{margin:30}}>
              <FilterableProductTable products={PRODUCTS} />
              </div>
            </div>
          );}} /> 

         <Route path="/login" exact striсt render={()=>{return(
           <div>
             <h1>Вход</h1>

            <div className="rootCenter">
              <div className="rootSubroot">
                <Login />              
              </div>            
            </div>

           </div> 
          );}} />          

      </div>
    </Router>    
    );
  }
}

export default MyApp;