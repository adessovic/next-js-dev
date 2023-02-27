import Link from "next/link";
import { useRouter } from "next/router";
function Home(){
    const router = useRouter();

    const handleClick = () => {

        console.log('Place order')
        router.replace('/product');
    }
    return(
        <>
            <h1>Home page</h1>
            <Link href="/blog">Blog</Link>
            <Link href="/product">Product</Link>
            <button onClick={handleClick}> Place Order</button>
        </>
    )

}
export default Home;