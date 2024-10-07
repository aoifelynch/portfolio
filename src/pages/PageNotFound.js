import { useLocation } from 'react-router-dom'

const PageNotFound = (() => {
    let location = useLocation();

    console.log(location);

    return (
        <h2>
            Sorry pookie, page {location.pathname} doesn't exist :P
        </h2>
    )
});

export default PageNotFound;