import { Card, Col, Row } from 'antd';

interface CarProps {
    title: string;
    description: string;
    imageUrl: string;
}

const Cars = () => {
    const carData: CarProps[] = [
        {
            title: 'Автомобиль 1',
            description: 'Описание автомобиля 1',
            imageUrl: 'https://picsum.photos/id/1015/300/200',
        },
        {
            title: 'Автомобиль 2',
            description: 'Описание автомобиля 2',
            imageUrl: 'https://picsum.photos/id/1018/300/200',
        },
        {
            title: 'Автомобиль 3',
            description: 'Описание автомобиля 3',
            imageUrl: 'https://picsum.photos/id/1025/300/200',
        },
    ];

    return (
        <div style={{ padding: '30px',margin:"auto",display:"flex"}}>
            <Row gutter={[16, 16]}>
                {carData.map((car: CarProps, index: number) => (
                    <Col span={8} key={index}>
                        <Card
                            hoverable
                            cover={<img alt={car.title} src={car.imageUrl} />}
                        >
                            <Card.Meta title={car.title} description={car.description} />
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Cars;
