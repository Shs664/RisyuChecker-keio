import React from 'react';
import tableData from '../json/tableData copy.json';
import {Table} from 'react-bootstrap';

function CreditTable() {
    return (
      <div>
        {Object.keys(tableData).map((tableKey) => (
            <Table className= "striped bordered hover">
                <th>
                    {Object.keys(tableData[tableKey]).map((header) => (
                        <tr>
                            {header}
                        </tr>
                    ))}
                </th>
                <tbody>
                    {Object.values(tableData[tableKey]).map((value) => (
                        <td>
                            {value}
                        </td>
                    ))}
                </tbody>
            </Table>
        ))}
      </div>
    );
  }
  
  export default CreditTable;