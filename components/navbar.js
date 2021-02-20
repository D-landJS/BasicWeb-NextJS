import Link from 'next/link';

export default function NavBar(){
    return(
        <nav>
            <Link href="/"><a>Home</a></Link>
            <Link href="/users"><a>Users</a></Link>
            <Link href="/posts"><a>Posts</a></Link>
            <Link href="/comments"><a>Comments</a></Link>
            {/* <Link href="/posts/[id]" as={`/posts/${5}`}>
            <a>Post ${5}</a>
            </Link>  */}
            <style jsx>
                {`
                    nav{
                        padding-top: 10px;
                    }
                    a{
                        padding: 0 10px;
                        text-decoration: none;
                    }
                    a:hover{
                        color: darkblue;
                    }
                `}
            </style>
        </nav>
    )
}
