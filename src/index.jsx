import * as $ from 'jquery'
import Post from '@models/Post';
import './styles/styles.css'
import json from './assets/json'
import Image from './assets/ars.jpeg'
import './babel'
import React from 'react'
import {render} from 'react-dom';

const post = new Post('Webpack Post Title', Image)
// $('pre').addClass('code').html(post.toString())

const App = () => (
    <div className="container">
        <h1>Webpack course !</h1>
        <hr/>
        <div className="image">
        </div>
        <hr/>
        <pre/>
    </div>

);

render(
    <App/>
    , document.getElementById('app'));