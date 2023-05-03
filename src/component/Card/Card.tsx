// import React from 'react';
//
// const Card = () => {
//     return (
//         <div className="">
//
//         </div>
//     );
// };
//
// export default Card;
import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const Cards: React.FC = (props) => (
    <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={props.img} />}
    >
        <Meta title={props.name} description={`${props.year} Rating: ${props.rate}`} />
    </Card>
);

export default Cards;