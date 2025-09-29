import type  { CreateCompanyDto, CompanyDto } from '@/types/company';
import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE + '/companies';
export const createCompany = async (dto: CreateCompanyDto): Promise<CompanyDto> => {
  const res = await axios.post<CompanyDto>(API_BASE, dto);
  return res.data;
};

export const getCompanies = async (): Promise<CompanyDto[]> => {
  const res = await axios.get<CompanyDto[]>(API_BASE);
  return res.data;
};

export const getCompany = async (id: number): Promise<CompanyDto> => {
  const res = await axios.get<CompanyDto>(`${API_BASE}/${id}`);
  return res.data;
};

export const updateCompany = async (id: number, dto: CreateCompanyDto): Promise<CompanyDto> => {
  const res = await axios.put<CompanyDto>(`${API_BASE}/${id}`, dto);
  return res.data;
};

export const deleteCompany = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE}/${id}`);
};
