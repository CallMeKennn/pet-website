import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Logout from "../../Component/Logout";

const API_URL = "http://localhost:4000";

const PetDetail = () => {
    let { state } = useLocation();
    const token = localStorage.getItem("accessToken");
    const [pet, setPet] = useState(null)

    const transformPetData = (pet, users, visits) => {
        // Tìm tên của chủ thú cưng
        const owner = users.find((user) => user.id === pet.ownerId);
        const ownerName = owner ? owner.name : null;

        // Tìm các visits của pet
        const petVisits = visits.filter((visit) => visit.petId === pet.id);

        // Chỉnh sửa object pet
        const modifiedPet = {
            ...pet,
            ownerId: ownerName, // Thay ownerId bằng tên của chủ nhân
            visits: petVisits, // Thêm mảng visits vào object pet
        };

        return modifiedPet;
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const headers = {
                    authorization: `Bearer ${token}`,
                };
                const responsePetDetail = await axios.get(`${API_URL}/pets/${state.id}`, { headers });

                const responseUsers = await axios.get(`${API_URL}/users`, { headers });

                const responseVisits = await axios.get(`${API_URL}/visits`, { headers });

                setPet(transformPetData(responsePetDetail.data, responseUsers.data, responseVisits.data))
                console.log(transformPetData(responsePetDetail.data, responseUsers.data, responseVisits.data));
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    
    return (
        <div>
            <Logout />
            <div>
                <div>Pet Name: {pet && pet.name}</div>
                <div>Date of Birth: {pet && pet.dob}</div>
                <div>Owner Name: {pet && pet.ownerId}</div>
            </div>
        </div>
    );
};

export default PetDetail;
