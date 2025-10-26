import type { CreateCompanyDto } from "@/types/company";
import { useState } from "react";
interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSave: (dto: CreateCompanyDto) => void;
}

export default function AddCompanyModal({ isOpen, onClose, onSave }: Props) {
  const [form, setForm] = useState<CreateCompanyDto>({
    name: "",
    description: "",
    website: "",
    industry: "",
    logoUrl: "",
    businessEmail: "",
    isVerified: false,
  });
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-lg p-6 border shadow-xl rounded-2xl bg-card-bg border-border">
        <h3 className="mb-4 text-xl font-semibold text-text">Add Company</h3>

        <div className="space-y-3">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border rounded-lg outline-none bg-bg text-text border-border focus:ring-2 focus:ring-accent"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="text"
            placeholder="Industry"
            className="w-full p-2 border rounded-lg outline-none bg-bg text-text border-border focus:ring-2 focus:ring-accent"
            value={form.industry}
            onChange={(e) => setForm({ ...form, industry: e.target.value })}
          />

          <input
            type="text"
            placeholder="Website"
            className="w-full p-2 border rounded-lg outline-none bg-bg text-text border-border focus:ring-2 focus:ring-accent"
            value={form.website}
            onChange={(e) => setForm({ ...form, website: e.target.value })}
          />

          <input
            type="text"
            placeholder="Business Email"
            className="w-full p-2 border rounded-lg outline-none bg-bg text-text border-border focus:ring-2 focus:ring-accent"
            value={form.businessEmail}
            onChange={(e) =>
              setForm({ ...form, businessEmail: e.target.value })
            }
          />

          <textarea
            placeholder="Description"
            className="w-full p-2 border rounded-lg outline-none bg-bg text-text border-border focus:ring-2 focus:ring-accent"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />

          <input
            type="text"
            placeholder="Logo URL"
            className="w-full p-2 border rounded-lg outline-none bg-bg text-text border-border focus:ring-2 focus:ring-accent"
            value={form.logoUrl}
            onChange={(e) => setForm({ ...form, logoUrl: e.target.value })}
          />

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={form.isVerified}
              onChange={(e) =>
                setForm({ ...form, isVerified: e.target.checked })
              }
              className="accent-accent"
            />
            <span className="text-sm text-text/70">Verified</span>
          </label>
        </div>

        {/* Buttons */}
        <div className="flex justify-end mt-6 space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm transition rounded-lg bg-hover text-text hover:bg-accent/70"
          >
            Cancel
          </button>
          <button
            onClick={async () => {
              onSave(form);
              setForm({
                name: "",
                description: "",
                website: "",
                industry: "",
                logoUrl: "",
                businessEmail: "",
                isVerified: false,
              });
            }}
            className="px-4 py-2 text-sm transition rounded-lg bg-accent text-text hover:bg-hover"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
