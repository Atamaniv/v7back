import * as React from 'react';
// key example unique id, the best then {todos.map((todo, index) => <Todo {...todo} key={index}/> )}
//=============================================== 
{todos.map(todo => (
  <Todo
    {...todo}
    key={todo.id}
  />
))}
//===============================================
const Listing = ({ hello }) => (
    <div>{hello}</div>
  );
//===============================================
class MyNewComponent extends React.Component {
  state = {
  }; 
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  render() {
    return ( <h1> Текст </h1> );
  }
}
export default MyNewComponent;


// Преобразование свойств 
//===============================================
const Details = ( { name, language } ) => (
  <div>
    <p>{ name } works with { language }</p>
  </div>
); 
//===============================================
class Details extends React.Component {
  render() {
    const { name, language } = this.props;
    return (
      <div>
        <p>{ name } works with { language }</p>
      </div>
    )
  }
}
//===============================================
//
//=============================================================================================
const withProps = ( newProps ) => ( WrappedComponent ) => {
  const ModifiedComponent = ( ownProps ) => ( // модифицированная версия компонента
    <WrappedComponent { ...ownProps } { ...newProps } /> // исходные свойства + новые свойства
  );
  return ModifiedComponent;
};
const Details = ( { name, title, language } ) => (
  <div>
    <h1>{ title }</h1>
    <p>{ name } works with { language }</p>
  </div>
);
const newProps = { name: "Alex" }; // это добавлено компонентом высшего порядка
const ModifiedDetails = withProps( newProps )( Details ); // компонент высшего порядка каррирован для улучшения читабельности
const App = () => (
  <ModifiedDetails 
    title="I'm here to stay"
    language="JavaScript"
  />
);
//=============================================================================================