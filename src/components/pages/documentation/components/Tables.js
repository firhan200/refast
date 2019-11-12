import React, { Fragment } from 'react';
import DocsExample from './../DocsExample';
import { 
    Table, Badge, Button
} from '../../../styles';

const Tables = () => {
    return (
        <Fragment>
            <DocsExample 
                title="Tables"
                example={(
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>John Doe</td>
                                <td>john.doe@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Sarah Johnson</td>
                                <td>sarah.johnson@gmail.com</td>
                            </tr>
                        </tbody>
                    </Table>
                )}
                code={(
`import React from 'react';
import { Table } from './styles';

const Tables = () => {
    return(
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>John Doe</td>
                    <td>john.doe@gmail.com</td>
                </tr>
                <tr>
                    <td>Sarah Johnson</td>
                    <td>sarah.johnson@gmail.com</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default Tables;
`
                )}
                properties={(
`Table.propTypes = {
    style : PropTypes.object, //your custom table style object
    className : PropTypes.string, //your custom styling class here
    isResponsive : PropTypes.bool, //is table responsive
    type : PropTypes.oneOf(['dark', 'striped', 'bordered']), //table styling type
    size : PropTypes.oneOf(['small', 'medium', 'large']), //table size
}`
                )}
            />

            <DocsExample 
                title="Table Types"
                example={(
                    <div>
                        Bordered Table
                        <Table type="bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>John Doe</td>
                                    <td>john.doe@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>Sarah Johnson</td>
                                    <td>sarah.johnson@gmail.com</td>
                                </tr>
                            </tbody>
                        </Table>
                        Dark Table
                        <Table type="dark">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>John Doe</td>
                                    <td>john.doe@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>Sarah Johnson</td>
                                    <td>sarah.johnson@gmail.com</td>
                                </tr>
                            </tbody>
                        </Table>
                        Striped Table
                        <Table type="striped">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>John Doe</td>
                                    <td>john.doe@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>Sarah Johnson</td>
                                    <td>sarah.johnson@gmail.com</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                )}
                code={(
`import React from 'react';
import { Table } from './styles';

const Tables = () => {
    return(
        <div>
            Bordered Table
            <Table type="bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>john.doe@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Sarah Johnson</td>
                        <td>sarah.johnson@gmail.com</td>
                    </tr>
                </tbody>
            </Table>
            Dark Table
            <Table type="dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>john.doe@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Sarah Johnson</td>
                        <td>sarah.johnson@gmail.com</td>
                    </tr>
                </tbody>
            </Table>
            Striped Table
            <Table type="striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>john.doe@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Sarah Johnson</td>
                        <td>sarah.johnson@gmail.com</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Tables;
`
                )}
            />

            <DocsExample 
                title="Table Sizes"
                example={(
                    <div>
                        Small Table
                        <Table size="small">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>John Doe</td>
                                    <td>john.doe@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>Sarah Johnson</td>
                                    <td>sarah.johnson@gmail.com</td>
                                </tr>
                            </tbody>
                        </Table>
                        Medium/Default Table
                        <Table size="medium">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>John Doe</td>
                                    <td>john.doe@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>Sarah Johnson</td>
                                    <td>sarah.johnson@gmail.com</td>
                                </tr>
                            </tbody>
                        </Table>
                        Large Table
                        <Table size="large">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>John Doe</td>
                                    <td>john.doe@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>Sarah Johnson</td>
                                    <td>sarah.johnson@gmail.com</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                )}
                code={(
`import React from 'react';
import { Table } from './styles';

const Tables = () => {
    return(
        <div>
            Small Table
            <Table size="small">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>john.doe@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Sarah Johnson</td>
                        <td>sarah.johnson@gmail.com</td>
                    </tr>
                </tbody>
            </Table>
            Medium/Default Table
            <Table size="medium">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>john.doe@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Sarah Johnson</td>
                        <td>sarah.johnson@gmail.com</td>
                    </tr>
                </tbody>
            </Table>
            Large Table
            <Table size="large">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>john.doe@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Sarah Johnson</td>
                        <td>sarah.johnson@gmail.com</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Tables;
`
                )}
            />

            <DocsExample 
                title="Table Responsive"
                example={(
                    <Table isResponsive={true}>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Last Login</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>John Doe</td>
                                <td>john.doe@gmail.com</td>
                                <td><Badge type="success" message="active"/></td>
                                <td>10:30, 20 Nov 2019</td>
                                <td>
                                    <Button style={{ marginRight: '10px' }} icon="fa fa-cog"/>
                                    <Button icon="fa fa-trash" color="danger"/>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Sarah Johnson</td>
                                <td>sarah.johnson@gmail.com</td>
                                <td><Badge message="pending"/></td>
                                <td>10:30, 20 Nov 2019</td>
                                <td>
                                    <Button style={{ marginRight: '10px' }} icon="fa fa-cog"/>
                                    <Button icon="fa fa-trash" color="danger"/>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                )}
                code={(
`import React from 'react';
import { Table, Badge, Button } from './styles';

const Tables = () => {
    return(
        <Table isResponsive={true}>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Last Login</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>john.doe@gmail.com</td>
                    <td><Badge type="success" message="active"/></td>
                    <td>10:30, 20 Nov 2019</td>
                    <td>
                        <Button style={{ marginRight: '10px' }} icon="fa fa-cog"/>
                        <Button icon="fa fa-trash" color="danger"/>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Sarah Johnson</td>
                    <td>sarah.johnson@gmail.com</td>
                    <td><Badge message="pending"/></td>
                    <td>10:30, 20 Nov 2019</td>
                    <td>
                        <Button style={{ marginRight: '10px' }} icon="fa fa-cog"/>
                        <Button icon="fa fa-trash" color="danger"/>
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}

export default Tables;
`
                )}
            />
        </Fragment>
    )
}

export default Tables;