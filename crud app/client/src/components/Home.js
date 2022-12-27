import React, { Fragment } from 'react';
import {button,table} from 'react-bootstrap';
import"bootstrap/dist/css/bootstrap.min.css";
import Employees from'./Employees';

function Home(){

    return(
        <Fragment>
            <div style={{margin:"10rem"}}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                name
                            </th>
                            <th>
                                Age
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employees && Employees.length >0
                            ?
                            Employees.map((item)=>{
                                return(
                                    <tr>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.Age}
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "no data available"
                        }
                    </tbody>
                </Table>
            </div>

        </Fragment>
    )
}