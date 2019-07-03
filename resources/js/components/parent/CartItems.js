import React from 'react';
import { MDBDataTable } from 'mdbreact';

const CartItems = () => {
    const data = {
        columns: [
            {
                label: 'Course Name',
                field: 'name',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Description',
                field: 'class',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Price',
                field: 'price',
                sort: 'asc',
                width: 270
            },


        ],
        rows: [
            {
                name: 'Maths',
                class: 'Class IV 25 Lectures',

                price:'500'

            },




        ]
    };

    return (
        <MDBDataTable
            striped
            bordered
            hover
            data={data}
        />
    );
}

export default CartItems;
