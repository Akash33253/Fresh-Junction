import React from 'react'

export default function Receipt(props) {
    let n = 0;
    let total=0;
    return (
        <tbody>
            {props.items.map((item, index) => {
                const { id, title, price } = item;
                if (props.quantity[id] >= 1){
                    total+=price * props.quantity[id];  
                    return (
                        <tr key={index}>
                            <th scope="row">{++n}</th>
                            <td>{title}</td>
                            <td>{props.quantity[id]}</td>
                            <td>&#8377;{price}</td>
                            <td>&#8377;{price * props.quantity[id]}</td>
                        </tr>
                    )
                }
                return "";
            })}
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <th>Total</th>
                <th>&#8377;{total}</th>
            </tr>
        </tbody>
    )
}
