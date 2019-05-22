import React from 'react';



class Hello extends React.Component {
    constructor(props){
        super(props)
        this.state = { who: 'World' };
    }
        handleClick = word => {
            this.setState({
                who: word,
                })
        }
    render(){
    return (
        <div>
            <p>Hello {this.state.who}!</p>
            <button onClick={() => this.handleClick('world!')}>World</button>
            <button onClick={() => this.handleClick('React')}>React</button>
            <button onClick={() => this.handleClick('Friend')}>Friend</button>
        </div>
)
}
}

export default Hello;
