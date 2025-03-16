import { Button } from "@headlessui/react"
import "../index.css"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import DisplayFotky from "./DisplayFotky"
import {useNavigate} from "react-router-dom"



export default function AdminPage({isAdminLoggedIn}) {
    const navigate = useNavigate()

    let image;
    const [imageState, setImageState] = useState(null)
    let allImages;
    const [allImagesState, setAllImageState] = useState([])

    useEffect(() => {
        loadAllImages();
        checkedIsAdminLogged();
    },[])

    const checkedIsAdminLogged = () =>{
        if(!isAdminLoggedIn)
            {
                navigate("/admin")
            }

    }

    const loadAllImages = () =>{
        axios.get("https://api.katerinasfotakem.cz/getAllImages")
        .then((queryResponse) => {
            console.log(queryResponse.data)
            setAllImageState(queryResponse.data)
        })
        .catch((err) => {console.log(err)})
    }

    const renderAllImages = () => {
         let toRender = ""
        allImagesState.map((vec) =>{
            toRender= toRender+(vec.name);
        })
        return toRender;
    }

    const uploadImage = () => {
        var formData = new FormData();
        formData.append("image", imageState, imageState.name)
        console.log(imageState)
        axios.post("https://api.katerinasfotakem.cz/uploadImage", formData)
            .then(() => loadAllImages());
        //     ((queryResponse) => {
        //         console.log(queryResponse.data)
        //     })
        // loadAllImages()
    }

    return (
        <div>
            <input type="file" onChange={(event) => { setImageState(event.target.files[0]) }} id="avatar" name="avatar" accept="image/png, image/jpeg" />
            <input type="submit" onClick={() => uploadImage()} />

            <div>
                <h1>Nahrané fotky</h1>
                <div className="grid grid-cols-4">
                { allImagesState.map((vec) => <DisplayFotky id={vec._id} sort={vec.sort} name={vec.name} loadAllImages={loadAllImages} key={vec._id}></DisplayFotky>)}
      
                </div>
      </div>
        </div>
    )
}