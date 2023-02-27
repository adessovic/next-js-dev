import Link from "next/link";

function PageNotFound(){
    return (
        <>
            <h1>Whoops, 404 Page</h1>
            <Link href={'/'}> Go Home </Link>
        </>
    )
}
export default PageNotFound;