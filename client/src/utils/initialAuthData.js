export default function initialAuthData() {
    const id = localStorage.getItem("id");
    if (id) {
        const data = {
            id,
            email: localStorage.getItem("email"),
            name: localStorage.getItem("name")
        };

        const isStudio = localStorage.getItem("isStudio");
        if (isStudio !== null) {
            data.isStudio = isStudio === "true";
        }

        return data;
    }
    return {};
}
