import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import api from '../services/api';
import ComicsImg from './ComicsImg';

import styles from '../styles/components/Comics.module.css'
import Swal from 'sweetalert2';

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
            .catch(error => {
                Swal.fire({
                    title: 'Ocorreu um erro',
                    text: error,
                })
            })
    }, [])

    

    return (
        <div className={styles.Comics}>
            <div className={styles.ComicHead}>
                <h1>Marvel's Comics</h1>
                <div></div>
            </div>
            <div className={styles.Imagens}>
                {comic.map(comic => {
                    const successAlert = () => {
                        const title = comic.title;
                        const desc = comic.description;
                        const price = comic.price;
                        Swal.fire({
                            title: title,
                            html: "<p>" +desc+ "</p>" +
                                  "<h3>Preço</h3>" +
                                  "<p> U$ " +price+ "</p>",
                            backdrop: 'rgba(0,0,123,0.4)',
                            background: 'white',
                            showCancelButton: true,
                            cancelButtonColor: '#E62429',
                            cancelButtonText: 'Cancelar',
                            confirmButtonColor: '#34DB31', 
                            confirmButtonText: 'Comprar',
                            imageUrl: String(comic.thumbnail.path + '.' + comic.thumbnail.extension),
                            imageWidth: 400,
                            imageHeight: 400,
                            imageAlt: 'Custom image',
                            showCloseButton: true, 
                        });
                    };
                    return (
                        <div className={styles.Tryy}>
                            <ComicsImg id={comic.id} title={comic.title} description={comic.description} characters={comic.characters} creators={comic.creators} price={comic.price} thumbnail={comic.thumbnail} />
                            
                            <Button style={{ backgroundColor: '#E62429', width: '200px', height: '40px', borderRadius: '8px', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer',}}
                                onClick={successAlert}
                            >
                                Saiba Mais
                            </Button>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Comics;