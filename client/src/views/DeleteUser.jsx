import { Navigate, useParams } from "react-router";
import { useDeleteUser } from "../api/userApi";

export default function DeleteUser() {
    const { id } = useParams();
    const { isDeleted } = useDeleteUser(id);

    return isDeleted ? <Navigate to="/" /> : null;
}
