import React from 'react';

class Tovary extends React.Component {
constructor (props){
  super(props);     
  this.state = { items: this.props.items }
  console.log(props);
}  

  render() {
    const { items } = this.state;
    console.log(items);
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">My shop</div>  
        </div>
        <div className="col-lg-3 col-md-3 col-sm-2 text-center"><ul>{items.map((items,i)=><li key={i}>items.name</li>)
        }</ul></div>
      </div>
    );

  }
}

export default Tovary;
