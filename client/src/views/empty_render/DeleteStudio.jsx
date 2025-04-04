import { Navigate, useParams } from "react-router";
import { useDeleteStudio } from "../../api/studioApi";
import { useRemoveStudio } from "../../api/userApi";

export default function DeleteStudio() {
    const { id } = useParams();
    const { isDeleted } = useDeleteStudio(id);
    useRemoveStudio();

    return isDeleted ? <Navigate to="/" /> : null;
}
