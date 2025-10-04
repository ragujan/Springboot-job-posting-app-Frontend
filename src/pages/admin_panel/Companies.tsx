import { useEffect, useState } from "react";
import type { CompanyDto, CreateCompanyDto } from "@/types/company";
import { getCompanies, createCompany } from "@/services/companyService";

export default function Companies() {
  const [companies, setCompanies] = useState<CompanyDto[]>([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   loadCompanies();
  // }, []);

  const loadCompanies = async () => {
    setLoading(true);
    try {
      const data = await getCompanies();
      setCompanies(data);
    } finally {
      setLoading(false);
    }
  };

  const handleAddCompany = async () => {
    const dto: CreateCompanyDto = {
      name: "New Company",
      description: "",
      website: "",
      industry: "",
      logoUrl: "",
      businessEmail: "",
      isVerified: false,
    };

    const created = await createCompany(dto);
    setCompanies((prev) => [...prev, created]);
  };

  return (
    <div className="p-6">
      {/* Heading */}
      <h2 className="mb-6 text-2xl font-bold text-text">
        Companies
      </h2>

      {/* Add Company Button */}
      <button
        onClick={handleAddCompany}
        className="px-4 py-2 mb-6 transition rounded-lg bg-accent text-text hover:bg-hover"
      >
        Add Company
      </button>

      {/* Company List */}
      {loading ? (
        <p className="text-text">Loading...</p>
      ) : (
        <ul className="space-y-3">
          {companies.map((c) => (
            <li
              key={c.id}
              className="flex items-center justify-between p-4 transition shadow bg-card-bg rounded-xl hover:bg-hover"
            >
              <div>
                <p className="font-semibold text-text">{c.name}</p>
                <p className="text-sm text-gray-400">
                  {c.industry || "No industry set"}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
