import React, {useEffect} from 'react'


export default function PlateModal({children, setModal}) {

    useEffect(() => {
        document.addEventListener('click', detectClick)
        return () => {
            document.removeEventListener('click', detectClick)
        }
    }, [])

    const detectClick = (e) =>{
        if(e.target.className === "modal-background"){
            setModal(false)
        }
    }
    return (
        <div>
            <div className="modal-background" onClick={(e) => detectClick(e)}>
                <div className="modal-content">
                    {
                        children
                    }
                </div>
            </div>
        </div>
    )
}
