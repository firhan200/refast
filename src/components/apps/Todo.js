import React, { useState, useEffect } from 'react';

//libs
import DragSortableList from 'react-drag-sortable';
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
    Col} from './../styles';
import { toast } from 'react-toastify';



const Todo = () => {
     //render todo item
     const TodoItem = ({ todo }) => {
        return (
            <div>
                <Box className="todo-item">
                    <div className="dragable-icon">
                        <i className="fa fa-ellipsis-v"></i>
                    </div>
                    <div className="todo-title">
                        { todo.title }
                    </div>
                    <div className="todo-description">
                        { stringHelper.cutString(todo.description, 100) }
                    </div>
                    <i onClick={() => {
                        const newTodos = todos.filter(todoObj => (todoObj.title !== todo.title));
                        console.log(todo);
                        console.log(newTodos);
                        setTodos(newTodos)
                    }} className="fa fa-star"></i>
                </Box>
                <br/>
            </div>
        )
    }

    const defaultTodos = [
        {
            content: (
                <TodoItem todo={{
                    title: 'Deploy App to Server',
                    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                }}/>
            ),
            isPinned : false,
            isDone : false,
        },
        {
            content: (
                <TodoItem todo={{
                    title: 'Apply new design to website.',
                    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                }}/>
            ),
            isPinned : true,
            isDone : false,
        },
        {
            content: (
                <TodoItem todo={{
                    title: 'fix bug: 2135.',
                    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                }}/>
            ),
            isPinned : false,
            isDone : false,
        }
    ];

    /* hooks */
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [todos, setTodos] = useState(defaultTodos.filter(todo => (!todo.isPinned)));
    const [pinnedTodos, setPinnedTodos] = useState(defaultTodos.filter(todo => (todo.isPinned)));
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
                content: (
                    <TodoItem todo={{
                        title: title,
                        description : description
                    }}/>
                ),
                isDone : false
            }]);

            //reset form
            setTitle('');
            setDescription('');

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

    //on sort dragable
    const onSortTodos = (sortedList, dropEvent) => {
        setTodos(sortedList);
    }

    //on pinned sort dragable
    const onSortPinnedTodos = (sortedList, dropEvent) => {
        setPinnedTodos(sortedList);
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
                        <BoxTitle icon="fa fa-map-pin" label=" Pinned List"/>
                        <br/>
                        <DragSortableList 
                            onSort={onSortPinnedTodos}
                            moveTransitionDuration={0.5}
                            type="vertical"
                            items={pinnedTodos}/>           
                        <BoxTitle icon="fa fa-star-o" label=" My Todo List"/>
                        <br/>
                        <DragSortableList 
                            onSort={onSortTodos}
                            moveTransitionDuration={0.5}
                            type="vertical"
                            items={todos}/>
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