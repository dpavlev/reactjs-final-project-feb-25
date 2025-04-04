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

        const hasStudio = localStorage.getItem("hasStudio");
        if (hasStudio !== null) {
            data.hasStudio = hasStudio === "true";
        }

        return data;
    }
    return {};
}
