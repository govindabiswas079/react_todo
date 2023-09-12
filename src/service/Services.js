import { Api } from './Api';

export const GetEmployee = () => Api().get('/Get-Employee');
export const DeleteEmployee = (_id) => Api().delete(`delete-Employee/${_id}`);
export const UpdateEmployee = (data, _id) => Api().post(`/update-Employee/${_id}`, data);
export const CreateEmployee = (data) => Api().post("/Add-Employee/", data);