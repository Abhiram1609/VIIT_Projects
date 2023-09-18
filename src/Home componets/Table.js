import React from "react";

export default function Table(props) {
    return(
        <div className="table-container">
            <table id="example" class="table table-striped" style={{width:'100%'}}>
                <tbody className="table-body">
                    <tr>
                        <td className="sr">{props.sr}</td>
                        <td className="prob"><p>{props.title}</p></td>
                        <td className="cat">{props.category}</td>
                        <td className="dom">{props.Domain}</td>
                        <td><button>Show</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}