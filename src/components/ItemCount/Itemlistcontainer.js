
import ItemCount from "./ItemCount"


const onAdd = ()=>{
    console.log("Producto agregado")
}

const Itemlistcontainer = (props) => {


    return (
        <>

            <main>
                
               <p className="grett"> {props.gretting} </p>
                
                <ItemCount stock={5} initial={0} onAdd={onAdd}></ItemCount>

            </main>



        </>
    )
}

export default Itemlistcontainer