import React, {useEffect, useReducer, useState} from "react";
import classes from './Info.module.css'
import Button from "../../UI/Button/Button";

const initialState = {
    name: '',
    phone: '',
    address1: '',
    address2: '',
    description: '',
}

const infoReducer = (state , action) => {
    if(action.type === "ADD_NAME"){
        const cp = {...state}
        return {
            ...cp,
            name: action.val
        }
    }
    if(action.type === "ADD_PHONE"){
        const cp = {...state}
        return {
            ...cp,
            phone: action.val
        }
    }
    if(action.type === "ADD_ADDRESS1"){
        const cp = {...state}
        return {
            ...cp,
            address1: action.val
        }
    }
    if(action.type === "ADD_ADDRESS2"){
        const cp = {...state}
        return {
            ...cp,
            address2: action.val
        }
    }
    if(action.type === "ADD_DESCRIPTION"){
        const cp = {...state}
        return {
            ...cp,
            description: action.val
        }
    }
    if(action.type === "CLEAN"){
        return {
            name: '',
            phone: '',
            address1: '',
            address2: '',
            description: '',
        }
    }
    return state
}

const Info = () => {
    const [infoState, dispatchInfo] = useReducer(infoReducer, initialState)
    const [info, setInfo] = useState(null)

    useEffect(() => {
        const infoFromDB = localStorage.getItem('info')
        if(infoFromDB) {
            setInfo(JSON.parse(infoFromDB))
        }
    }, [])

    const nameHandler = (e) => {
        dispatchInfo({
            type: 'ADD_NAME',
            val: e.target.value
        })
    }
    const phoneHandler = (e) => {
        dispatchInfo({
            type: 'ADD_PHONE',
            val: e.target.value
        })
    }
    const address1Handler = (e) => {
        dispatchInfo({
            type: 'ADD_ADDRESS1',
            val: e.target.value
        })
    }
    const address2Handler = (e) => {
        dispatchInfo({
            type: 'ADD_ADDRESS2',
            val: e.target.value
        })
    }
    const descriptionHandler = (e) => {
        dispatchInfo({
            type: 'ADD_DESCRIPTION',
            val: e.target.value
        })
    }

    const submitHander = (e) => {
        e.preventDefault()
        const name = infoState.name
        const phone = infoState.phone
        const address1 = infoState.address1
        const address2 = infoState.address2
        const description = infoState.description
        
        if(name.length < 3 || phone.length < 9 || address1 < 5 || address2 < 5 ) {
            return;
        }

        localStorage.setItem('info', JSON.stringify({name, phone, address1, address2, description}))

        dispatchInfo({
            type: 'CLEAN'
        })

        setTimeout(() => {
            const infoFromDB = localStorage.getItem('info');
            setInfo(JSON.parse(infoFromDB))
        }, 500)
    } 
  return (
    <div className="p-2">
      <div className="card border-0 shadow p-3">
        <div className="row g-2">
            <div className="col-lg-6 p-3">
                <div className={classes.bussiness_info}>
                    <table className="table table-borderless">
                        <tbody>
                            <tr className="p-3">
                                <td className={classes['table-label']}><i className="fa-solid fa-business-time"></i> Bussiness Name</td>
                                <td className="text-muted">{info ? info.name : '-'}</td>
                            </tr>
                            <tr>
                                <td className={classes['table-label']}><i className="fa-solid fa-phone"></i> Phone Number</td>
                                <td className="text-muted">{info ? info.phone : '-'}</td>
                            </tr>
                            <tr>
                                <td className={classes['table-label']}><i className="fa-sharp fa-solid fa-location-dot"></i> Address</td>
                                <td className="text-muted">
                                    {info ? <p className="m-0 p-0">{info.address1}</p> : '-'}
                                    {info && <p className="m-0 p-0">{info.address2}</p>}
                                </td>
                            </tr>
                            <tr>
                                <td className={classes['table-label']}><i className="fa-sharp fa-solid fa-circle-info"></i> Description</td>
                                <td className="text-muted">{info ? info.description : '-'}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={`col-lg-6 p-3 ${classes['right-col']}`}>
                <form action="" onSubmit={submitHander}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-lable mb-2"><i className="fa-regular fa-star"></i> Bussiness Name</label>
                        <input value={infoState.name} onChange={nameHandler} type="text" className="form-control" id='name' placeholder=""/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-lable mb-2"><i className="fa-regular fa-star"></i> Phone Number</label>
                        <input value={infoState.phone} onChange={phoneHandler} type="text" className="form-control" id='phone' placeholder=""/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address1" className="form-lable mb-2"><i className="fa-regular fa-star"></i> Address 1 (exp, no, street, quarter)</label>
                        <input value={infoState.address1} onChange={address1Handler} type="text" className="form-control" id='address1' placeholder=""/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address2" className="form-lable mb-2"><i className="fa-regular fa-star"></i> Address 2 (exp, township, city)</label>
                        <input value={infoState.address2} onChange={address2Handler} type="text" className="form-control" id='address2' placeholder=""/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-lable mb-2"><i className="fa-regular fa-star"></i> Describe your service</label>
                        <textarea value={infoState.description} onChange={descriptionHandler} id="description" className="form-control" rows="3" placeholder=''></textarea>
                    </div>
                    <div>
                        {
                            info ? 
                            <Button>Update</Button>
                            :
                            <Button>Confirm</Button>
                        }
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
