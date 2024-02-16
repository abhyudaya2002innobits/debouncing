import React from 'react';
import { Row, Col } from 'antd';


const Cards = () => {
    return (
        <div className="card-body">
            <Row gutter={[16, 16]} wrap>
            <Col xs={{ span: 4 }} sm={{ span: 6 }} md={{ span: 8 }} lg={{ span: 12}} xxl={{ span: 20 }}>
                    <div className="row1">
                        <p className="card1">Card1</p>
                    </div>
                </Col>
                <Col xs={{ span: 6 }} sm={{ span: 6 }} md={{ span: 8}} lg={{ span: 12}} xxl={{ span: 20 }}>
                    <div className="row1">
                        <p className="card2">Card2</p>
                    </div>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
            <Col xs={{ span: 6 }} sm={{ span: 6 }} md={{ span: 8 }} lg={{ span: 12}} xxl={{ span: 20 }}>
                    <div className="row2">
                        <p className="card3">Card3</p>
                    </div>
                </Col>
                <Col xs={{ span: 6 }} sm={{ span: 6 }} md={{ span: 8 }} lg={{ span: 12}} xxl={{ span: 20 }}>
                    <div className="row2">
                        <p className="card4">Card4</p>
                    </div>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
            <Col xs={{ span:4 }} sm={{ span: 6 }} md={{ span: 8 }} lg={{ span: 12}} xxl={{ span: 20 }}>
                    <div className="row3">
                        <p className="card5">Card5</p>
                    </div>
                </Col>
                <Col xs={{ span: 4 }} sm={{ span: 6 }} md={{ span: 8 }} lg={{ span: 12}} xxl={{ span: 20 }}>
                    <div className="row3">
                        <p className="card6">Card6</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Cards;
