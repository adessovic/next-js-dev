import { useRouter } from "next/router";

function Review(){
    const router = useRouter();
    const {productId, reviewId} = router.query;

    return(
        <>
            <h2>Review {productId} for product {reviewId}</h2>
        </>
    )
}
export default Review;