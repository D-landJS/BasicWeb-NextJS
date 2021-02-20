import { route } from "next/dist/next-server/server/router";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import Title from "../../components/title";

export default function Comment( { comment}) {
    const router = useRouter();

    if(router.isFallback){
        return <div>Cargando...</div>
    }

    return(
        <Layout>
            <Title>
                Comment ID: {comment.id}
            </Title>
            <div className="card">
                <h3>User</h3>
                <p>Name: {comment.name}</p>
                <p>Email: {comment.email}</p>
            </div>
            
            <style jsx>
        {`
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

export async function getStaticPaths(){
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments`)
    const comments = await res.json();
    // const paths = [{ params: {id: '1'}}, { params: { id: '2'}}];
    // return {
    //     paths,
    //     fallback: true // Renderiza toda los paths
    // }
    const paths = comments.map(comment => {
        return { 
            params: {id: `${comment.id}`}
        }
    });

    return{
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${params.id}`)
    const comment = await res.json();

    return {
        props: {
            comment
        }
    }
}