import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from "react";

const PetDetail = () => {
    let { state } = useLocation()

    console.log(state)
    useEffect(() => {
        const fetchData = async () => {
            try {

            }  catch (error) {
                console.log(error);
            }



            fetchData()
        }
    }, [])
  return (
    <div>PetDetail</div>
  )
}

export default PetDetail