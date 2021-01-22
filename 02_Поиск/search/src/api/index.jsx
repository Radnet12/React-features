const BASE_URI = 'https://lab.lectrum.io';

export const api = Object.freeze({
    getCountries: async (filter = '', size = 50) => {
        const response = await fetch(`${BASE_URI}/geo/api/countries?filter=${filter}&size=${size}`);
        const {data} = await response.json();

        return data;
    },
});
