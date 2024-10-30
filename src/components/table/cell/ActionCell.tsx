import { useTableQuery } from "@/provider/TableQueryProvider";
import Link from "next/link";
import { Confirm } from "notiflix";

type Props = {
  editUrl: string;
  onDelete?: () => Promise<any>;
}

const ActionCell = ({ editUrl, onDelete }: Props) => {
  const { refresh } = useTableQuery()

  const onClickDelete = () => {
    if (onDelete) {
      Confirm.show(
        'Delete Record',
        'Are you sure you want to delete this record?',
        'Yes',
        'No',
        () => {
          onDelete().finally(() => {
            refresh();
          })
        }
      );
    }
  }

  return (
    <div className="flex gap-0.5">
      <Link href={editUrl} className="btn btn-sm btn-icon btn-clear btn-light">
        <i className="ki-filled ki-notepad-edit"></i>
      </Link>
      {onDelete && (
        <div className="btn btn-sm btn-icon btn-clear btn-light" onClick={onClickDelete}>
          <i className="ki-filled ki-trash"></i>
        </div>
      )}
    </div>
  )
};

export default ActionCell;
