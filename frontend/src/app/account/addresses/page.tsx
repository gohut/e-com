'use client';
import { useState } from 'react';
import { MOCK_ADDRESSES, Address, AddressLabel } from '@/data/addresses';
import AddressCard from '@/components/address/AddressCard';
import styles from './addresses.module.scss';

const LABELS: AddressLabel[] = ['HOME', 'COLLEGE', 'WORK', 'OTHER'];

const EMPTY_FORM = { name: '', plusCode: '', area: '', city: '', state: '', pincode: '', mobile: '', label: 'HOME' as AddressLabel };

export default function AddressesPage() {
  const [addresses, setAddresses]   = useState<Address[]>(MOCK_ADDRESSES);
  const [showForm, setShowForm]     = useState(false);
  const [editId, setEditId]         = useState<string | null>(null);
  const [form, setForm]             = useState(EMPTY_FORM);
  const [errors, setErrors]         = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim())              e.name    = 'Name is required';
    if (!form.area.trim())              e.area    = 'Area is required';
    if (!form.city.trim())              e.city    = 'City is required';
    if (form.pincode.length !== 6)      e.pincode = '6-digit pincode required';
    if (form.mobile.length !== 10)      e.mobile  = '10-digit mobile required';
    setErrors(e); return Object.keys(e).length === 0;
  };

  const handleSave = () => {
    if (!validate()) return;
    if (editId) {
      setAddresses((prev) => prev.map((a) => a.id === editId ? { ...a, ...form } : a));
    } else {
      const newAddr: Address = { ...form, id: `addr_${Date.now()}`, isDefault: false };
      setAddresses((prev) => [...prev, newAddr]);
    }
    setShowForm(false); setEditId(null); setForm(EMPTY_FORM); setErrors({});
  };

  const handleEdit = (id: string) => {
    const addr = addresses.find((a) => a.id === id);
    if (!addr) return;
    setForm({ name: addr.name, plusCode: addr.plusCode, area: addr.area, city: addr.city, state: addr.state, pincode: addr.pincode, mobile: addr.mobile, label: addr.label });
    setEditId(id); setShowForm(true);
  };

  const handleRemove = (id: string) => setAddresses((prev) => prev.filter((a) => a.id !== id));

  const defaultAddr = addresses.filter((a) => a.isDefault);
  const otherAddrs  = addresses.filter((a) => !a.isDefault);

  const renderField = (name: keyof typeof form, placeholder: string, maxLength?: number) => (
    <div className={styles.fieldGroup}>
      <input
        type="text" placeholder={placeholder} value={form[name]} maxLength={maxLength}
        onChange={(e) => setForm((p) => ({ ...p, [name]: e.target.value }))}
        className={`${styles.input} ${errors[name] ? styles.inputError : ''}`}
      />
      {errors[name] && <p className={styles.errorMsg}>{errors[name]}</p>}
    </div>
  );

  return (
    <div className={styles.page}>
      <h1 className={styles.pageTitle}>SAVED ADDRESSES</h1>

      {/* Default Address */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>DEFAULT ADDRESS</h2>
          <button className={styles.addBtn} onClick={() => { setShowForm(true); setEditId(null); setForm(EMPTY_FORM); }}>
            + ADD NEW ADDRESS
          </button>
        </div>
        {defaultAddr.map((addr) => (
          <AddressCard key={addr.id} address={addr} onEdit={handleEdit} onRemove={handleRemove} />
        ))}
      </section>

      {/* Other Addresses */}
      {otherAddrs.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>OTHER ADDRESSES</h2>
          <div className={styles.addrGrid}>
            {otherAddrs.map((addr) => (
              <AddressCard key={addr.id} address={addr} onEdit={handleEdit} onRemove={handleRemove} />
            ))}
          </div>
        </section>
      )}

      {/* Add/Edit Form Modal */}
      {showForm && (
        <div className={styles.overlay} onClick={() => setShowForm(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3>{editId ? 'Edit Address' : 'Add New Address'}</h3>
              <button onClick={() => setShowForm(false)} className={styles.closeBtn}>✕</button>
            </div>
            <div className={styles.formBody}>
              {renderField("name",     "Full Name")}
              {renderField("mobile",   "Mobile Number (10 digits)", 10)}
              {renderField("pincode",  "Pincode (6 digits)", 6)}
              {renderField("area",     "Flat, House No., Building, Street")}
              {renderField("plusCode", "Area / Plus Code (Optional)")}
              {renderField("city",     "Town / City")}
              {renderField("state",    "State")}

              <div className={styles.labelRow}>
                {LABELS.map((l) => (
                  <button
                    key={l}
                    className={`${styles.labelChip} ${form.label === l ? styles.activeLabel : ''}`}
                    onClick={() => setForm((p) => ({ ...p, label: l }))}
                    type="button"
                  >{l}</button>
                ))}
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.cancelBtn} onClick={() => setShowForm(false)}>Cancel</button>
              <button className={styles.saveBtn}   onClick={handleSave}>Save Address</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
