export default function validateForm(values) {
    const phoneRegex = /^(?:\+359|0)[0-9]{9}$/;
    const urlRegex = /^(http|https):\/\/[^ "]+$/;

    for (const key in values) {
        switch (key) {
            case "studioPhone": {
                if (!phoneRegex.test(values[key])) {
                    throw new Error("Телефонният номер трябва да започва с +359 или 0 и да съдържа общо 10 цифри (+359 се брои за една).");
                }
                break;
            }
            case "studioImg": {
                if (!urlRegex.test(values[key])) {
                    throw new Error("Невалиден URL адрес на изображението.");
                }
                break;
            }
            case "qtyServices": {
                if (values[key] <= 0) {
                    throw new Error("Броят на услугите трябва да бъде поне 1.");
                }
                break;
            }
            default: {
                if (!values[key]) {
                    throw new Error(`Има едно или повече полета, които не са попълнени!`);
                }
                break;
            }
        }
    }
}
