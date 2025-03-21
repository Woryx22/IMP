import "../index.css"

import axios from "axios"



export default function DisplayFotky({id, name, sort, loadAllImages}) {

    const deleteImage = () =>{
        axios.delete("https://api.katerinasfotakem.cz/deleteImages", {params:{id:id, name:name}})
        .then(() => loadAllImages());
    }

    return (
        <div class="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={"https://api.katerinasfotakem.cz/galery/" + name + ".jpg"}
                    alt="Shoes" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                {/* <p>Sort: {sort}</p> */}
                <div class="card-actions justify-end">
                    <button class="btn btn-primary" onClick={() => {deleteImage()}}>Smazat</button>
                </div>
            </div>
        </div>
    )
}