export interface CreateCompanyDto {
  name: string;
  description?: string;
  website?: string;
  industry?: string;
  logoUrl?: string;
  businessEmail?: string;
  isVerified: boolean;
}

export interface CompanyDto extends CreateCompanyDto {
  id: number;
  createdAt: string;
  updatedAt: string;
}
