import React from 'react';
import {  Card, CardBody, CardTitle, cardSubtitle, CardText } from 'reactstrap';
// import { Card, CardBody, CardTitle, CardSubTitle, CardText } form 'reactstrap';

function List({getId, Data}) {

    return (
        <div>
            {
                Data.map((o,i) => {
                    return (
                        <Card key={i} >
                            <CardBody>
                                <CardTitle tag="h5">
                                    {o.name}
                                </CardTitle>

                                <cardSubTitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                </cardSubTitle>

                                <CardText>
                                    {o.quantity}
                                </CardText>

                                <button onClick={() => getId(o.id)}>Click</button>

                            </CardBody>
                        </Card>
                    )
                })
            }
        </div >
    );
}

export default List;