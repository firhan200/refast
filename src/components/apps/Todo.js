import React, { useState } from 'react';

//libs
import stringHelper from './../../helpers/stringHelper.js';

/* components */
import { 
    Breadcrumb, 
    BreadcrumbItem, 
    Container, 
    Row, 
    BoxTitle,
    Box,
    Button,
    Form,
    FormGroup,
    Input,
    Textarea,
    Alert,
    Col,
    Checkbox,
    H4} from './../styles';
import { toast } from 'react-toastify';

const Todo = () => {
     //render todo item
     const TodoItem = ({ todo }) => {
        return (
            <Box className="todo-item">
                <div className="todo-title">
                    {/* star pin icon */}
                    <i style={{
                        color: '#F1C40F'
                    }} 
                    onClick={ pin.bind(this, todo) } 
                    className={"fa fa-star" + (!todo.isPinned ? '-o' : '')} />&nbsp;

                    {/* todo title */}
                    { todo.title }
                </div>
                <div className="todo-description">
                    { stringHelper.cutString(todo.description, 100) }
                </div>

                {/* todo actions list */}
                <Row>
                    <Col xs={6}>
                        <Checkbox 
                        className="complete"
                        label="completed"
                        isChecked={ todo.isDone }
                        handleChange={ setTodoCompleted.bind(this, todo) }
                        isCircular={true}
                        />
                    </Col>
                    <Col xs={6}>
                        <ul className="todo-actions right">
                            <li onClick={ deleteTodo.bind(this, todo) }>
                                <i className="fa fa-trash"></i>
                            </li>
                            <li onClick={ editTodo.bind(this, todo) }>
                                <i className="fa fa-cog"></i>
                            </li>
                        </ul>
                    </Col>
                </Row>
                
            </Box>
        )
    }

    //dummy todo for display
    let defaultTodos = [
        {
            title: 'Deploy App to Server',
            description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            isPinned : true,
            isDone : false,
        },
        {
            title: 'Apply new design to website.',
            description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            isPinned : false,
            isDone : false,
        },
        {
            title: 'fix bug: 2135.',
            description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            isPinned : false,
            isDone : false,
        }
    ];

    /* hooks */
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [pinned, setPinned] = useState(false);
    //list todo
    const [todos, setTodos] = useState(defaultTodos);
    //list error
    const [formErrors, setFormErrors] = useState([]);
    /* hooks */

    /* methods */
    const saveTodo = (e) => {
        //clear errors
        setFormErrors([]);

        //prevent form to refresh
        e.preventDefault();

        //validating inputs
        const errorMessages = validation();
        if(errorMessages.length < 1){
            //no error, add todo
            //save to array
            setTodos([...todos, {
                title: title,
                description: description,
                isPinned : pinned,
                isDone : false
            }]);

            //reset form
            setTitle('');
            setDescription('');
            setPinned(false);

            //dismiss modal
            document.getElementById('dismissAddTodoModal').click();

            //show toast
            toast("Todo successfully created.")
        }else{
            //show error
            setFormErrors(errorMessages);
        }
    }

    //validating inputs
    const validation = () => {
        let errorMessages = [];
        //check title
        if(title.length < 1){
            //title invalid
            errorMessages.push({
                message : 'title cannot be empty'
            })
        }

        //check description
        if(description.length < 1){
            //description invalid
            errorMessages.push({
                message : 'description cannot be empty'
            })
        }

        return errorMessages;
    }

    //show errors
    const showErrors = () => {
        const errors = formErrors.map(error => (
            <Alert type="danger" icon={true} message={error.message}/>
        ));

        return errors;
    }

    //change pin status on todo
    const pin = (currentTodo) => {
        //find todo
        let todoList = todos.filter(todo => (todo === currentTodo));
        if(todoList.length > 0){
            let newTodo = todoList[0];
            //set pin
            newTodo.isPinned = !newTodo.isPinned;
            setTodos(
                Object.assign([], todos, newTodo)
            );
        }
    }

    //edit todo
    const editTodo = (currentTodo) => {
        //show modal
        document.getElementById("")
    }

    //delete todo
    const deleteTodo = (currentTodo) => {
        //set new list without selected todo
        setTodos(todos.filter(todo => (todo !== currentTodo)))
        //show toast
        toast(stringHelper.cutString(currentTodo.title, 50) + " deleted.");
    }

    const setTodoCompleted = (currentTodo) => {
        //find todo
        let todoList = todos.filter(todo => (todo === currentTodo));
        if(todoList.length > 0){
            let newTodo = todoList[0];
            //set pin
            newTodo.isDone = !newTodo.isDone;
            setTodos(
                Object.assign([], todos, newTodo)
            );
        }
    }

    const Empty = () => {
        return(
            <H4 align="center">no data.</H4>
        )
    }
    /* methods */

    return(
        <div>
            {/* page title */}
            <div className="title">
                Todo Application

                {/* breadcrumb info */}
                <Breadcrumb>
                    <BreadcrumbItem>
                        <a href="#!">App</a>
                    </BreadcrumbItem>
                    <BreadcrumbItem isActive={true}>
                        Todo
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <br/>
            <Container>
                <Row>
                    <Box sm={12} md={4} lg={3}>
                        <Button label="CREATE" isFull={true} data-toggle="modal" data-target="#addTodoModal"/>
                        <hr/>
                        <BoxTitle icon="fa fa-tags" label="Labels"/>
                        <ul className="todo-labels">
                            <li>Tech</li>
                            <li>Design</li>
                            <li>Creative</li>
                        </ul>
                    </Box>
                    <Col sm={12} md={8} lg={9}>        
                        {/* Pinned List */}
                        <BoxTitle icon="fa fa-map-pin" label={" Pinned List (" + (todos.filter(todo => (todo.isPinned)).length) + ")"}/>
                        <br/>
                        { todos.filter(todo => (todo.isPinned)).length > 0 ? (
                            todos.filter(todo => (todo.isPinned)).map((todo, index) => (
                                <TodoItem key={index} todo={ todo }/>
                            ))
                        ) : <Empty /> }
                        <br/> 
                        {/* Pinned List */}
                        
                        {/* Unpinned List */}
                        <BoxTitle icon="fa fa-map-pin" label={" Todo List (" + (todos.filter(todo => (!todo.isPinned)).length) + ")"}/>
                        <br/>
                        { todos.filter(todo => (!todo.isPinned)).length > 0 ? (
                            todos.filter(todo => (!todo.isPinned)).map((todo, index) => (
                                <TodoItem key={index} todo={ todo }/>
                            )) 
                        ) : <Empty /> }
                        {/* Unpinned List */}
                    </Col>
                </Row>
            </Container>

            {/* Add Todo Modal */}
            <div className="modal fade" id="addTodoModal" tabIndex="-1" role="dialog" aria-labelledby="addTodoModal" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addTodoModal">Todo</h5>
                            <button type="button" id="dismissAddTodoModal" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            { showErrors() }
                            <Form handleSubmit={ saveTodo }>
                                <FormGroup>
                                    <Input 
                                        value={title}
                                        handleChange={(e) => setTitle(e.target.value)}
                                        placeholder="Title" 
                                        maxLength={20}/>
                                </FormGroup>
                                <FormGroup>
                                    <Textarea 
                                        value={description} 
                                        handleChange={(e) => setDescription(e.target.value)}
                                        placeholder="Description" 
                                        maxLength={150}/>
                                </FormGroup>
                                <FormGroup>
                                    <Checkbox
                                        isChecked={ pinned }
                                        handleChange={() => setPinned(!pinned)}
                                        label="Pinned"/>
                                </FormGroup>
            
                                <Button type="submit" className="m-r-10" label="Submit"/>
                                <Button type="button" color="danger" data-dismiss="modal" label="Close"/>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Add Todo Modal */}
        </div>
    )
}

export default Todo;