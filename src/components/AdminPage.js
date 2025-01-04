import { Button } from "@headlessui/react"
import "../index.css"
import { useState } from "react"
import axios from "axios"



export default function AdminPage() {
    let image;
    const [imageState, setImageState] = useState(null)

    const uploadImage = () =>{


        var formData = new FormData();
        formData.append("image", imageState, imageState.name)

        console.log(imageState)

        axios.post("http://localhost:3001/uploadImage", formData)
        .then((queryResponse) =>{
            console.log(queryResponse.data)
        })
    }

    return (
       <div>
            <input type="file" onChange={(event) => {setImageState(event.target.files[0])}} id="avatar" name="avatar" accept="image/png, image/jpeg" />
            <input type="submit" onClick={() => uploadImage()}/>
       </div>
    )
}