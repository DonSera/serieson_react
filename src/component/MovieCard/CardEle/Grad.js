import StarRatings from "react-star-ratings";

function Grad({obj, dimension=12, spacing=1}) {
    return (
        <>
            <StarRatings
                rating={obj['grad']/ 2}
                starEmptyColor={'grey'}
                starRatedColor={'red'}
                numberOfStars={5}
                starDimension={`${dimension}px`}
                starSpacing={`${spacing}px`}
            />
            <span>{obj['grad'] % 1 ? obj['grad'] : `${obj['grad']}.0`}</span>
        </>
    )
}

export default Grad;