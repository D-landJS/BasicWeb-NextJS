import { useRouter} from 'next/router';
import Layout from '../../components/layout';
import Title from '../../components/title';

export default function User1({ user }){


    return(
        <Layout>
            <Title>User details</Title>
            <div className="card">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
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

export async function getServerSideProps({ params }){
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await res.json();

    return {
        props: {
            user
        }
    }
}

