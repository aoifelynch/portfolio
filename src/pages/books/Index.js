import { Link } from 'react-router-dom'

const Index = (() => {
    return (
        <>
        <Link to={"/books/1"}>Book 1</Link>
        <Link to={"/books/2"}>Book 2</Link>
        <Link to={"/books/3"}>Book 3</Link>
        <Link to={"/books/4"}>Book 4</Link>
        <Link to={"/books/5"}>Book 5</Link>
        <Link to={"/books/6"}>Book 6</Link>

        </>
    )
})

export default Index;