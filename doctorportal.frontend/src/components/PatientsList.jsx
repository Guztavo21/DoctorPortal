import { useState, useEffect } from "react";
import { getPatients } from "../api";

const PatientsList =() => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const fetchPatients = async () => {
            try {

                const data = await getPatients();
                console.log(data);
                setPatients(data);
            } catch (error) {
                console.error('Error fetching patients:', error);
            }
        }
        fetchPatients();
    }, []);

    return (
        <div>
            <h1>Patients List</h1>
            <ul>
                {patients.map(patient => (
                    <li key={patient.id}>
                        {patient.firstName} - {patient.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PatientsList;