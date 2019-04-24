import React, { Component } from 'react';


class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            filter: 1,
            todoList: [
                { text: 'Hacer armario no activo', status: false },
                { text: 'Hacer armario activo', status: true }
            ]
        };
    }

    onChangeName = ({ target: { value: name } }) => {
        console.log(name);
        this.setState({ name });
    };

    addPerson = () => {
        let { todoList, name } = this.state;
        todoList = [...todoList, [name]];
        this.setState({ name: '', todoList });
    };

    delPerson = (index) => {
        let { todoList } = this.state
        todoList.splice(index, 1)
        this.setState({ todoList });
    }

    submitNewTask = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const task = data.get('task');
        console.log(task);
    }

    toggleTask = (e,i) => {
        const marcado = e.target.name === 'marcado'; 
        let { todoList } = this.state
        todoList[i].status = !todoList[i].status;
        this.setState({ todoList });
    }


    filterByActives = (elemento) => {
        return elemento.status;

    }

    filterByNoActives = (elemento) => {
        return !elemento.status;

    }

    filterSelector = (status) => {
        const {filter} = this.state;
        var result = true
        
        if(filter ===2) result = status;
        else if(filter === 3) result = !status;
        console.log(result);
        return result;
    }

    render() {
        const { todoList, name } = this.state;
        return (
            <div className="row justify-content-center">
                <div className="col-4">
                    <div><form onSubmit={this.submitNewTask}>
                        <div className="form-group">
                            <label htmlFor={'task'}>New task</label>
                            <input type="text" className="form-control" id="task" placeholder="Add new task" />
                        </div>
                        <button type="submit" className="btn btn-primary">Add</button>
                    </form></div>

                    <div>
                        <p>
                            <input type="text" name="name" value={name} onChange={this.onChangeName} />
                        </p>
                        <div>
                            <button onClick={this.addPerson}>Agregar</button>
                        </div>
                        <div>
                            <input id="rdbAll" name="rdbEstatus" value="1" type="radio" checked={this.state.filter ===1}  onChange={() => {this.setState({filter: 1})}}/>Todos <br />
                            <input id="rdbActive" name="rdbEstatus" value="2" type="radio"  checked={this.state.filter ===2} onChange={() => {this.setState({filter: 2})}} />Activos <br />
                            <input id="rdbNoActive" name="rdbEstatus" value="3" type="radio" checked={this.state.filter ===3} onChange={() => {this.setState({filter: 3})}} />No Activos <br />
                        </div>
                        <hr />
                        <ul>
                            {todoList.filter(({status}) => this.filterSelector(status)).map(({ text, status }, i) => {
                                return <li key={i}><input type="checkbox" checked={status} name="marcado" onChange={(e) => this.toggleTask(e,i)} />{`${i}.- ${text}`}<button onClick={() => this.delPerson(i)}>Eliminar</button></li>
                            })}

                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Todo;