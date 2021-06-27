import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import axios from 'axios';
import md5 from 'md5';

import styles from '../styles/components/Comics.module.css';

import ComicsImg from './ComicsImg'

const { Header, Footer, Sider, Content } = Layout;

export default class Comics extends React.Component {
    publicKey = '89b8d1890bded8e9d37b19288a4ea4fe';
    privateKey = 'c5f280843fdbfcd34ad8031aae72bb6a018feaa1';
    time = Number(new Date());
    hash = md5(this.time + this.privateKey + this.publicKey);
    state = {info: []};

    componentDidMount() {
        axios.get(`http://gateway.marvel.com/v1/public/comics?ts=${this.time}&apikey=${this.publicKey}&hash=${this.hash}`)
        .then(response => {
            const info = response.data.data.results;
            console.log(response.data.data.results);
            this.setState({info});
        })
        .catch(erro => console.log(erro));
    }

    render () {
        return (
            <Layout>
                <div className={styles.Comics}>
                    <div className={styles.ComicHead}>
                        <h1>Marvel's Comics</h1>
                        <div></div>
                    </div>
                    <div className={styles.Imagens}>
                        {
                            this.state.info.map(info => 
                                <ComicsImg img='aa' title={info.title} description='' characters='' creators='' price={10} />
                            )
                        }
                                       
                    </div>
                </div>
            </Layout>
        )
    }
}