import React, { useEffect, useState } from 'react';
import { Layout, Card, Row, Divider } from 'antd';
import api from '../services/api';
import ComicsImg from './ComicsImg';

import styles from '../styles/components/Comics.module.css'

const { Content } = Layout;

interface ResponseData {
    id: string,
    title: string,
    description: string,
    characters: string,
    creators: string,
    price: number,
    thumbnail: {
        path: string,
        extension: string
    }
}

const Comics: React.FC = () => {
    const [comic, setComic] = useState<ResponseData[]>([]);

    useEffect(() => {
        api
            .get('/comics')
            .then(response => {
                setComic(response.data.data.results)
            })
            .catch(err => console.log('Ocorreu um erro', err))
    }, [])

    return (
        <div className={styles.Comics}>
            <div className={styles.ComicHead}>
                <h1>Marvel's Comics</h1>
                <div></div>
            </div>
            <div className={styles.Imagens}>
                {comic.map(comic => {
                    return (
                        <>
                            <ComicsImg id={comic.id} title={comic.title} description={comic.description} characters={comic.characters} creators={comic.creators} price={comic.price} thumbnail={comic.thumbnail} />
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Comics;
