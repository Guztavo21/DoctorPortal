import axios from 'axios';


const API_URL = 'https://localhost:7179/api';

const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

/**
 * Obtiene la lista de pacientes.
 * @returns {Promise<Patient[]>} - Una promesa que se resuelve con la lista de pacientes.
 */
export const getPatients = async () => {
    const response = await apiClient.get('/patients');
    return response.data;
}

/**
 * Agrega un nuevo paciente.
 * @param {Patient} patient - El objeto del paciente que se agregara. 
 * @returns {Promise<Patient} - Una promesa que se resuelve con el paciente creado
 */
export const addPatient = async (patient) => {
    const response = await apiClient.post('/patients', patient);
    return response.data;
}

/**
 * Actualiza un paciente.
 * @param {Number} id - Id del paciente a actualizar 
 * @param {Patient} patient - El objeto del paciente actualizado
 * @returns {Promise<Patient>} - Una promesa que se resuelve con un paciente actualizado.
 */
export const updatePatient = async (id, patient) => {
    const response = await apiClient.put(`/patients/${id}`, patient);
    return response.data;
};

/**
 * Elimina un paciente
 * @param {Number} id - Id del paciente a eliminar
 * @returns {Promise<Patient>} - Una promesa que se resuelve eliminado un paciente por su id.
 */
export const deletePatient = async(id) => {
    const response = await apiClient.delete(`/patients/${id}`);
    return response.data;
};



