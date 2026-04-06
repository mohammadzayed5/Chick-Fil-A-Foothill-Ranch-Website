// Airtable Configuration
// IMPORTANT: In production, use environment variables or a backend proxy to hide these credentials

const AIRTABLE_CONFIG = {
    // Get your Personal Access Token from: https://airtable.com/create/tokens
    apiKey: 'YOUR_AIRTABLE_PERSONAL_ACCESS_TOKEN',

    // Your Base ID (found in your Airtable URL: https://airtable.com/appXXXXXXXXXX/...)
    baseId: 'YOUR_BASE_ID',

    // Table names for each form type
    tables: {
        punch: 'Time Punch Adjustments',
        sick: 'Sick Pay Requests',
        break: 'Break Notifications',
        survey: 'Team Surveys',
        'call-log': 'Call Logs',
        'call-out': 'Call Outs',
        'change-fund': 'Change Fund Requests',
        'leader-app': 'Leadership Applications'
    }
};

// Function to submit data to Airtable
async function submitToAirtable(formType, formData) {
    const tableName = AIRTABLE_CONFIG.tables[formType];

    if (!tableName) {
        throw new Error('Unknown form type');
    }

    const url = `https://api.airtable.com/v0/${AIRTABLE_CONFIG.baseId}/${encodeURIComponent(tableName)}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${AIRTABLE_CONFIG.apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fields: formData,
                typecast: true // Automatically converts data types
            })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error.message || 'Failed to submit to Airtable');
        }

        return await response.json();
    } catch (error) {
        console.error('Airtable submission error:', error);
        throw error;
    }
}

// Helper function to extract form data
function extractFormData(form) {
    const formData = {};
    const inputs = form.querySelectorAll('input, select, textarea');

    inputs.forEach(input => {
        const label = input.closest('.form-group')?.querySelector('label')?.textContent.replace(' *', '').trim();
        if (label && input.value) {
            formData[label] = input.value;
        }
    });

    // Add timestamp
    formData['Submission Date'] = new Date().toISOString();

    return formData;
}
