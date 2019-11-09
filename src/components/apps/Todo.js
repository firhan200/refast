import React, { useState } from 'react';

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
    Alert} from './../styles';
import { toast } from 'react-toastify';

const Todo = () => {
    /* hooks */
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [todos, setTodos] = useState([]);
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

    const showErrors = () => {
        const errors = formErrors.map(error => (
            <Alert type="danger" icon={true} message={error.message}/>
        ));

        return errors;
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
                    <Box sm={12} md={8} lg={9}>                   
                        <BoxTitle icon="fa fa-star-o" label="My Todo List"/>
                        { todos.map(todo => (
                            <div>
                                { todo.title }
                            </div>
                        )) }
                    </Box>
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
                                        maxLength={100}/>
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