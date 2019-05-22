import React from 'react';



// class Hello extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = { who: 'World' };
//     }
//         handleClick = word => {
//             this.setState({
//                 who: word,
//                 })
//         }
//     render(){
//     return (
//         <div>
//             <p>Hello {this.state.who}!</p>
//             <button onClick={() => this.handleClick('world!')}>World</button>
//             <button onClick={() => this.handleClick('React')}>React</button>
//             <button onClick={() => this.handleClick('Friend')}>Friend</button>
//         </div>
// )
// }
// }

// export default Hello;


class Bomb extends React.Component{
    state = {
        count:0,
        message:'',
    };

    componentDidMount(){
        let interval = setInterval(() => {
            this.setState({
                count: this.state.count +1,
            })
            this.handleCount(interval);
        }, 1000)
    }

    handleCount = interval => {
        if (this.state.count >= 8){
            this.setState({
                message: 'BOOM!!!',
            })
            clearInterval(interval);
        }
        else if(this.state.count % 2 === 0){
            this.setState({
                message: 'Tick',
            });
        }
        else {
            this.setState({
                message: 'Tock',
            })
        }
    }

    render(){
        return(
            <div className="bomb">
                <p>{this.state.message}</p>
            </div>
        )
    }
}

export default Bomb;