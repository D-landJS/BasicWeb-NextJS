import Title from '../../components/title';
import Layout from '../../components/layout';
import Link from 'next/link';


export default function Comments( { comments }){
    return(
        <Layout>
            <Title>Comments Page</Title>
            <div className="grid">
                {
                    comments.map(comment => {
                        return(
                            <Link href="/comments/[id]" as={`/comments/${comment.id}`}>
                                <a className="card">
                                    <h3>Comment</h3>
                                    <p>Name: {comment.name}</p>
                                    <p>Email: {comment.email}</p>
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

export async function getStaticProps(){
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    const comments = await res.json();

    return {
        props: {
            comments
        }
    }
}