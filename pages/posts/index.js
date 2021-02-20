import React from 'react';
import Title from '../../components/title';
import Layout from '../../components/layout';
import Link from 'next/link';

export default function Posts({ posts}){

    // Client Side Rendering
    // // Hook
    // const [posts, setPosts] = React.useState([]); // Declaración de dos variables
    // // posts -> Guardamos la resputa de post
    // // setPost -> Para cambiar los valores o asignar nuevo valor al post
    // // Devuelve una llamada a useState y se le pasa un parametro por defecto que tendra posts

    // // Hook -> Funcionara cuando carga el componente por primera vez
    // React.useEffect(() => {
    //     const fetchPosts = async () => {
    //     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    //     const newPost = await res.json();
    //     setPosts(newPost);
    //     };

    //     fetchPosts();
    // }, [])// Corre una vez cosn []);

    return(
        <Layout>
            <Title>Posts Page</Title>
            <div className='grid'>
                {
                    posts.map(post => {
                        return (
                            <Link href={"/posts/[id]"} as={`/posts/${post.id}`} key={post.id}>
                                <a className='card'>
                                    <h3>{post.title}</h3>
                                    <p>{post.body}</p>
                                </a>
                            </Link>
                        )
                    })
                }
            </div>
            <style jsx>
        {`
          .grid {
            display: flex;
            flex-wrap: wrap;
            max-width: 800px;
            margin-top: 2rem;
          }
          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            color: black;
            text-decoration: none;
            border: 2px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }
          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }
          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }
          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }
        `}
      </style>
        </Layout>
    )
    
}

// Corre del lado del servidor
export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    return {
        props: {
            posts
        }
    }
}