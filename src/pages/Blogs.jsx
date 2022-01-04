import React from 'react';

import main_news_img from '../media/main_news_img.png';
import post1 from '../media/post_1.png';
import post2 from '../media/post_2.png';
import post3 from '../media/post_3.png';

const Blogs = () => {
    return (
        <div>
            <main className='blogs-main'>
                <section className='blogs-news-container'>
                    <div className='blogs-main-new'>
                        <h3>Soy un titulo</h3>
                        <div className='blogs-news-img-container'>
                            <img src= { main_news_img } alt = ''/>
                        </div>
                        <div className='blogs-news-info-container'>
                            <h2>Título del Blogspot</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, doloremque. Quo debitis aut perferendis. </p>
                            <a href="" className='blogs-button'>Leer más</a>
                        </div>
                    </div>
                </section>
                <section className='blogs-posts-container'>
                    <div>
                        <h3></h3>
                        <article className='post-container'>
                            <img src={ post1 } alt="" />
                            <p>Título del Blogspot</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil molestias nobis neque, ipsam velit est dolores.</p>
                            <a href="" className='blogs-button'>Leer más</a>
                        </article>
                        <article className='post-container'>
                            <img src={ post2 } alt="" />
                            <p>Título del Blogspot</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil molestias nobis neque, ipsam velit est dolores.</p>
                            <a href="" className='blogs-button'>Leer más</a>
                        </article>
                        <article className='post-container'>
                            <img src={ post3 } alt="" />
                            <p>Título del Blogspot</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil molestias nobis neque, ipsam velit est dolores.</p>
                            <a href="" className='blogs-button'>Leer más</a>
                        </article>
                        <article className='post-container'>
                            <img src={ post1 } alt="" />
                            <p>Título del Blogspot</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil molestias nobis neque, ipsam velit est dolores.</p>
                            <a href="" className='blogs-button'>Leer más</a>
                        </article>
                        <article className='post-container'>
                            <img src={ post2 } alt="" />
                            <p>Título del Blogspot</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil molestias nobis neque, ipsam velit est dolores.</p>
                            <a href="" className='blogs-button'>Leer más</a>
                        </article>
                        <article className='post-container'>
                            <img src={ post3 } alt="" />
                            <p>Título del Blogspot</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil molestias nobis neque, ipsam velit est dolores.</p>
                            <a href="" className='blogs-button'>Leer más</a>
                        </article>
                    </div>
                </section>
            </main>
        </div>
    );
};

export { Blogs };