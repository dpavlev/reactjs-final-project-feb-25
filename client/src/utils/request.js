const request = async (method, url, data, options = {}) => {
    if (data) {
        options = {
            ...options,
            headers: {
                "Content-Type": "application/json",
                ...options.headers
            },
            body: JSON.stringify(data)
        };
    }
    const response = await fetch(`http://localhost:5000/${url}`, {
        method,
        ...options
    });

    const responseContentType = response.headers.get("Content-Type");
    if (!response.ok) {
        let error;
        if (responseContentType && responseContentType.includes("application/json")) {
            error = await response.json();
        } else {
            error = await response.text();
        }
        throw new Error(error.message || error);
    }

    if (!responseContentType) {
        return null;
    }

    const result = await response.json();
    return result;
};

export default request;
