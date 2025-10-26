import { useEffect, useState } from "react";
import type { CompanyDto } from "@/types/company";
import {
  getCompanies,
  createCompany,
  deleteCompany,
} from "@/services/companyService";
import AddCompanyModal from "@/components/admin_panel/modal/AddCompanyModal";
import Alert from "@/components/alert/Alert";
import { Trash2 } from "lucide-react";

export default function Companies() {
  const [companies, setCompanies] = useState<CompanyDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    loadCompanies();
  }, []);

  const loadCompanies = async () => {
    setLoading(true);
    try {
      const data = await getCompanies();
      if (data?.content) {
        setCompanies(data.content);
      }
    } finally {
      setLoading(false);
    }
  };
  const deleteCompanyAction = async (id: number) => {
    try {
      await deleteCompany(id);
      setSuccessMessage("Company deleted successfully");
    } catch (error: any) {
      const message =
        error?.response?.data?.error ||
        "An error occurred while deleting the company.";
      setErrorMessage(message);
    } finally {
      loadCompanies();
    }
  };

  return (
    <div className="p-6">
      {/* Heading */}
      <h2 className="mb-6 text-2xl font-bold text-text">Companies</h2>

      {/* Add Company Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 mb-6 transition rounded-lg bg-accent text-text hover:bg-hover"
      >
        Add Company
      </button>
      {isModalOpen && (
        <AddCompanyModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={async (dto) => {
            const created = await createCompany(dto);
            setCompanies((prev) => [...prev, created]);
            setSuccessMessage("Added Company Successfully");
            setIsModalOpen(false);
          }}
        />
      )}
      {successMessage && (
        <Alert setMessage={setSuccessMessage} header="success" message={successMessage} />
      )}
      {errorMessage && (
        <Alert setMessage={setErrorMessage} header="error" message={errorMessage} />
      )}
      {/* Company List */}
      {loading ? (
        <p className="text-text">Loading...</p>
      ) : (
        <ul className="space-y-3">
          {companies.map((c) => (
            <li
              key={c.id}
              className="flex flex-col items-start justify-between p-4 transition shadow bg-card-bg rounded-xl hover:bg-hover"
            >
              <div>
                <p className="font-semibold text-text">{c.name}</p>
                <p className="text-sm text-gray-400">
                  {c.industry || "No industry set"}
                </p>
              </div>
              {/* description */}
              {c.description && (
                <p className="mb-2 text-sm text-gray-500">{c.description}</p>
              )}
              {/* Website */}
              {c.website && (
                <p className="text-sm text-blue-500">
                  Website:{" "}
                  <a href={c.website} target="_blank" rel="noreferrer">
                    {c.website}
                  </a>
                </p>
              )}
              {/* Business Email */}
              {c.businessEmail && (
                <p className="text-sm text-gray-600">
                  Email: {c.businessEmail}
                </p>
              )}
              {/* Logo */}
              {c.logoUrl && (
                <img
                  src={c.logoUrl}
                  alt={`${c.name} logo`}
                  className="object-contain w-16 h-16 mt-2 rounded"
                />
              )}

              {/* Verification Status */}
              <p className="mt-1 text-sm">
                Verified: {c.isVerified ? "Yes" : "No"}
              </p>

              {/* Created/Updated */}
              <p className="mt-1 text-xs text-gray-400">
                Created: {new Date(c.createdAt).toLocaleDateString()} | Updated:{" "}
                {new Date(c.updatedAt).toLocaleDateString()}
              </p>

              <button
                onClick={() => deleteCompanyAction(c.id)}
                className="p-2 my-1.5 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
