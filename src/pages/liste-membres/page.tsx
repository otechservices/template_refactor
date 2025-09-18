import { useState } from 'react';
import Button from '../../components/base/Button';
import Table from '../../components/base/Table';
import AjouterMembreModal from './components/AjouterMembreModal';

interface Member {
  id: number;
  identite: string;
  poste: string;
  email: string;
  contact: string;
}

interface MemberFormData {
  structure: string;
  nom: string;
  prenoms: string;
  poste: string;
  email: string;
  contact: string;
}

const ListeMembres = () => {
  const [selectedMembers, setSelectedMembers] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [members, setMembers] = useState<Member[]>([
    {
      id: 1,
      identite: "KOUAME Adjoua Marie",
      poste: "Présidente du comité",
      email: "marie.kouame@example.com",
      contact: "+225 07 12 34 56 78"
    },
    {
      id: 2,
      identite: "DIALLO Mamadou",
      poste: "Vice-président",
      email: "mamadou.diallo@example.com",
      contact: "+225 05 98 76 54 32"
    },
    {
      id: 3,
      identite: "N'DA Akissi Françoise",
      poste: "Secrétaire générale",
      email: "francoise.nda@example.com",
      contact: "+225 01 23 45 67 89"
    },
    {
      id: 4,
      identite: "TRAORE Abdoulaye",
      poste: "Trésorier",
      email: "abdoulaye.traore@example.com",
      contact: "+225 07 89 01 23 45"
    },
    {
      id: 5,
      identite: "BAMBA Aïcha",
      poste: "Membre du comité",
      email: "aicha.bamba@example.com",
      contact: "+225 05 34 56 78 90"
    }
  ]);

  const handleSelectMember = (id: number) => {
    setSelectedMembers(prev => 
      prev.includes(id) 
        ? prev.filter(memberId => memberId !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedMembers.length === members.length) {
      setSelectedMembers([]);
    } else {
      setSelectedMembers(members.map(member => member.id));
    }
  };

  const handleAddMember = (memberData: MemberFormData) => {
    const newMember: Member = {
      id: Math.max(...members.map(m => m.id)) + 1,
      identite: `${memberData.nom} ${memberData.prenoms}`,
      poste: memberData.poste,
      email: memberData.email,
      contact: memberData.contact
    };
    
    setMembers(prev => [...prev, newMember]);
  };

  const handleConsulter = () => {
    if (selectedMembers.length === 1) {
      const member = members.find(m => m.id === selectedMembers[0]);
      alert(`Consultation du membre: ${member?.identite}`);
    }
  };

  const handleEditer = () => {
    if (selectedMembers.length === 1) {
      const member = members.find(m => m.id === selectedMembers[0]);
      alert(`Édition du membre: ${member?.identite}`);
    }
  };

  const handleSupprimer = () => {
    if (selectedMembers.length > 0) {
      const confirmDelete = window.confirm(
        `Êtes-vous sûr de vouloir supprimer ${selectedMembers.length} membre(s) ?`
      );
      
      if (confirmDelete) {
        setMembers(prev => prev.filter(member => !selectedMembers.includes(member.id)));
        setSelectedMembers([]);
      }
    }
  };

  const columns = [
    {
      header: (
        <input
          type="checkbox"
          checked={selectedMembers.length === members.length && members.length > 0}
          onChange={handleSelectAll}
          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
      ),
      accessorKey: 'select',
      cell: ({ row }: any) => (
        <input
          type="checkbox"
          checked={selectedMembers.includes(row.original.id)}
          onChange={() => handleSelectMember(row.original.id)}
          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
      ),
    },
    {
      header: '#',
      accessorKey: 'id',
      cell: ({ row }: any) => row.index + 1,
    },
    {
      header: 'Identité',
      accessorKey: 'identite',
    },
    {
      header: 'Poste',
      accessorKey: 'poste',
    },
    {
      header: 'Email',
      accessorKey: 'email',
      cell: ({ row }: any) => (
        <a 
          href={`mailto:${row.original.email}`} 
          className="text-blue-600 hover:text-blue-800 hover:underline"
        >
          {row.original.email}
        </a>
      ),
    },
    {
      header: 'Contact',
      accessorKey: 'contact',
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <nav className="flex mb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <span className="text-gray-500 text-sm">CAPE</span>
          </li>
          <li>
            <div className="flex items-center">
              <i className="ri-arrow-right-s-line text-gray-400"></i>
              <span className="text-gray-900 text-sm font-medium ml-1">Liste des membres</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Liste des membres</h1>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mb-6">
        <Button 
          variant="primary" 
          onClick={() => setIsModalOpen(true)}
          className="whitespace-nowrap"
        >
          <i className="ri-add-line mr-2"></i>
          Ajouter un membre
        </Button>
        <Button 
          variant="outline" 
          onClick={handleConsulter}
          disabled={selectedMembers.length !== 1}
          className="whitespace-nowrap"
        >
          <i className="ri-eye-line mr-2"></i>
          Consulter
        </Button>
        <Button 
          variant="outline" 
          onClick={handleEditer}
          disabled={selectedMembers.length !== 1}
          className="whitespace-nowrap"
        >
          <i className="ri-edit-line mr-2"></i>
          Éditer
        </Button>
        <Button 
          variant="outline" 
          onClick={handleSupprimer}
          disabled={selectedMembers.length === 0}
          className="whitespace-nowrap text-red-600 border-red-300 hover:bg-red-50"
        >
          <i className="ri-delete-bin-line mr-2"></i>
          Supprimer
        </Button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow">
        <Table
          data={members}
          columns={columns}
        />
        
        {/* Footer */}
        <div className="px-6 py-3 border-t border-gray-200 bg-gray-50 rounded-b-lg">
          <p className="text-sm text-gray-700">
            {members.length} éléments
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          © 2024 Système de gestion CAPE. Tous droits réservés.
        </p>
      </div>

      {/* Modal */}
      <AjouterMembreModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddMember}
      />
    </div>
  );
};

export default ListeMembres;