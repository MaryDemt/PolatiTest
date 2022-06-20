import SmallTable from "./SmallTable"

function Main({contactData}) {
    return (
        <div className="container">
        <div>Hello, world!</div>
        <SmallTable contactData={contactData}/>
        <button><a href='http://localhost:3000/allContact'>Все кандидаты</a></button>
    </div>
    )
}

export default Main