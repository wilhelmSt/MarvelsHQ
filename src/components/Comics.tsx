import React, { useEffect, useState } from 'react';
import { Layout, Card, Image, Row, Divider } from 'antd';
import api from '../services/api';

const { Header, Footer, Sider, Content } = Layout;
const { Meta } = Card;

interface ResponseData {
    id: string,
    name: string,
    title: string,
    description: string,
    thumbnail: {
        path: string,
        extension: string
    }
}

const Comics: React.FC = () => {
    const [characteres, setCharacteres] = useState<ResponseData[]>([]);

    useEffect(() => {
        api
            .get('/comics')
            .then(response => {
                setCharacteres(response.data.data.results)
            })
            .catch(err => console.log('Ocorreu um erro', err))
    }, [])

    return (
        <Layout >
            <Content style={{ alignItems: "center", height: "calc(100vh - 55px)", minHeight: "100%" }}>
                {characteres.map(character => {
                    return (
                        <Row
                            gutter={16}
                            style={{ alignItems: "center", }}
                        >
                            <Card style={{ padding: 30 }} key={character.id} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                                <div style={{ maxWidth: '700px' }}>
                                    <h2
                                        style={{
                                            paddingTop: 45,
                                            fontWeight: 600,
                                        }}
                                    >
                                        {character.title}
                                    </h2>

                                    <Divider />
                                    <p style={{ textAlign: 'justify', fontWeight: 400 }}>
                                        {character.description}
                                    </p>
                                </div>
                            </Card>
                        </Row>
                    )
                })}

            </Content>
        </Layout >
    )
}

export default Comics;
