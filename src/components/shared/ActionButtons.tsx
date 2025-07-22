import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { LuEye } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import Tooltip from './Tooltip';  // Pastikan path sesuai


type ActionButtonsProps = {
  id: string;
  editUrl: string;
  onView?: (id: string) => void;
  onDelete: (id: string) => void;
};

export const ActionButtons = ({ id, editUrl, onView, onDelete }: ActionButtonsProps) => {
  return (
    <div className="flex items-center gap-3">
      {onView && (
        <Tooltip text="Lihat Data">
          <button
            onClick={() => onView(id)}
            className="text-blue-500 hover:text-brand-primary-light transition-colors"
          >
            <LuEye size={18} />
          </button>
        </Tooltip>
      )}

      <Tooltip text="Edit Data">
        <Link
          to={editUrl}
          className="text-brand-primary hover:text-brand-primary-light transition-colors"
        >
          <FiEdit size={18} />
        </Link>
      </Tooltip>

      <Tooltip text="Hapus Data">
        <button
          onClick={() => onDelete(id)}
          className="text-red-500 hover:text-red-700 transition-colors"
        >
          <FiTrash2 size={18} />
        </button>
      </Tooltip>
    </div>
  );
};
