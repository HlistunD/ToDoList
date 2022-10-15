import { Component } from "react";

export class Deal extends Component {
    state = {
        userInput: "",
        listDeal: []
    }

    onChangeEvent(e){
        this.setState({userInput: e});
    }
    addItem(input) {
        if (input === '') {
        alert("Please put your agenda")
        } else { 
        let listArray = this.state.listDeal;
        listArray.push(input)
        this.setState({listDeal: listArray, userInput: ''})
        }
    }
    deleteItem() {
        let listArray = this.state.listDeal;
        listArray = [];
        this.setState({listDeal: listArray})
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle("crossed");
    }

    onFormSub(e) {
        e.preventDefault();
    }
    
    render () {
        return(
        <div>
            <form onSubmit={this.onFormSub}>
            <div>
                <input type="text" placeholder="What do you need do?"
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
            </div>
            <div>
                <button onClick={() => this.addItem(this.state.userInput)}>Add</button>
            </div>
            <ul>
                {this.state.listDeal.map((item, index) => (
                <li onClick={this.crossedWord} key={index}>{item}</li>
                ))}
            </ul>  
            <div>
                <button onClick={() => this.deleteItem(this.state.userInput)}>Delete</button>
            </div> 
            </form>
        </div>
        )
    }
}