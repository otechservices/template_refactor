import { useState } from 'react';
import Button from '../../../components/base/Button';
import Input from '../../../components/base/Input';

interface AjouterMembreModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (memberData: MemberFormData) => void;
}

interface MemberFormData {
  structure: string;
  nom: string;
  prenoms: string;
  poste: string;
  email: string;
  contact: string;
}

const AjouterMembreModal = ({ isOpen, onClose, onSubmit }: AjouterMembreModalProps) => {
  const [formData, setFormData] = useState<MemberFormData>({
    structure: '',
    nom: '',
    prenoms: '',
    poste: '',
    email: '',
    contact: ''
  });

  const [errors, setErrors] = useState<Partial<MemberFormData>>({});

  const handleInputChange = (field: keyof MemberFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<MemberFormData> = {};

    if (!formData.structure.trim()) newErrors.structure = 'Ce champ est requis';
    if (!formData.nom.trim()) newErrors.nom = 'Ce champ est requis';
    if (!formData.prenoms.trim()) newErrors.prenoms = 'Ce champ est requis';
    if (!formData.poste.trim()) newErrors.poste = 'Ce champ est requis';
    if (!formData.email.trim()) newErrors.email = 'Ce champ est requis';
    if (!formData.contact.trim()) newErrors.contact = 'Ce champ est requis';

    // Validation email
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format email invalide';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
      handleClose();
    }
  };

  const handleClose = () => {
    setFormData({
      structure: '',
      nom: '',
      prenoms: '',
      poste: '',
      email: '',
      contact: ''
    });
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Enregistrer un membre</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors w-6 h-6 flex items-center justify-center"
          >
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          {/* Structure */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Structure <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              value={formData.structure}
              onChange={(e) => handleInputChange('structure', e.target.value)}
              placeholder="Entrez la structure"
              className={errors.structure ? 'border-red-500' : ''}
            />
            {errors.structure && (
              <p className="text-red-500 text-xs mt-1">{errors.structure}</p>
            )}
          </div>

          {/* Nom */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nom <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              value={formData.nom}
              onChange={(e) => handleInputChange('nom', e.target.value)}
              placeholder="Entrez le nom"
              className={errors.nom ? 'border-red-500' : ''}
            />
            {errors.nom && (
              <p className="text-red-500 text-xs mt-1">{errors.nom}</p>
            )}
          </div>

          {/* Prénoms */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Prénom(s) <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              value={formData.prenoms}
              onChange={(e) => handleInputChange('prenoms', e.target.value)}
              placeholder="Entrez le(s) prénom(s)"
              className={errors.prenoms ? 'border-red-500' : ''}
            />
            {errors.prenoms && (
              <p className="text-red-500 text-xs mt-1">{errors.prenoms}</p>
            )}
          </div>

          {/* Poste */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Poste <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              value={formData.poste}
              onChange={(e) => handleInputChange('poste', e.target.value)}
              placeholder="Entrez le poste"
              className={errors.poste ? 'border-red-500' : ''}
            />
            {errors.poste && (
              <p className="text-red-500 text-xs mt-1">{errors.poste}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Entrez l'email"
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Contact */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact <span className="text-red-500">*</span>
            </label>
            <Input
              type="tel"
              value={formData.contact}
              onChange={(e) => handleInputChange('contact', e.target.value)}
              placeholder="Entrez le contact"
              className={errors.contact ? 'border-red-500' : ''}
            />
            {errors.contact && (
              <p className="text-red-500 text-xs mt-1">{errors.contact}</p>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-end pt-4">
            <Button
              type="submit"
              variant="primary"
              className="whitespace-nowrap"
            >
              Enregistrer
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AjouterMembreModal;