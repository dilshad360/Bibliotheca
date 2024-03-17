import axios from "axios";

const airtableApiUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE_ID}`;

const axiosInstance = axios.create({
    baseURL: airtableApiUrl,
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    },
});

export const fetchRecords = async (tableName, filterParams, sortField, sortDirection, maxRecords) => {
    try {
        const response = await axiosInstance.get(`/${tableName}`, {
            params: {
                filterByFormula: filterParams, 
                // 'sort[0][field]': `${sortField}`,
                // 'sort[0][direction]': `${sortDirection}`,
                // maxRecords: `${maxRecords}`
            },
            });
        return response.data.records;
    } catch (error) {
        console.error("Error fetching records:", error);
        throw error;
    }
};

export const fetchRecordById = async (tableName, recordId) => {
    try {
        const response = await axiosInstance.get(`/${tableName}/${recordId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching record:", error);
        throw error;
    }
};