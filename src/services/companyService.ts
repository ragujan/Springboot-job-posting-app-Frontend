import type { CreateCompanyDto, CompanyDto } from "@/types/company";
import axiosInstance from "./axiosInstance"; // using your axiosInstance
import type { Page } from "@/types/Page";

const COMPANIES_PATH = "/companies";

export const createCompany = async (dto: CreateCompanyDto): Promise<CompanyDto> => {
  const res = await axiosInstance.post<CompanyDto>(COMPANIES_PATH, dto);
  return res.data;
};

export const getCompanies = async (): Promise<Page<CompanyDto>> => {
  const res = await axiosInstance.get<Page<CompanyDto>>(COMPANIES_PATH);
  return res.data;
};

export const getCompany = async (id: number): Promise<CompanyDto> => {
  const res = await axiosInstance.get<CompanyDto>(`${COMPANIES_PATH}/${id}`);
  return res.data;
};

export const updateCompany = async (id: number, dto: CreateCompanyDto): Promise<CompanyDto> => {
  const res = await axiosInstance.put<CompanyDto>(`${COMPANIES_PATH}/${id}`, dto);
  return res.data;
};

export const deleteCompany = async (id: number): Promise<void> => {
  await axiosInstance.delete(`${COMPANIES_PATH}/${id}`);
};
