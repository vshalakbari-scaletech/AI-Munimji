const BASE_URL = process.env.NEXT_PUBLIC_API || '';
export const BASE_API_VERSION = `${BASE_URL}/api/v1`;

const BASE_PATHS = {
	AUTH: `/auth`,
	NUMBERS: `/numbers`,
	USERS: `/users`,
	CONTACTS: `/contacts`,
	MESSAGES: `/messages`,
	CONVERSATIONS: `/messages/conversations`,
	TEMPLATES: `/templates`,
	LABELS: `/tags`,
	CAMPAIGNS: `/campaigns`,
	STORAGE: `/s3`,
	FOLDERS: `/folders`
};

export const API_PATH = {
	AUTH: {
		BASE: BASE_PATHS.AUTH,
		LOGIN: `${BASE_PATHS.AUTH}/login`
	},
	NUMBERS: {
		BASE: BASE_PATHS.NUMBERS,
		LIST: BASE_PATHS.NUMBERS,
		DETAILS: (numberId: string) => `${BASE_PATHS.NUMBERS}/${numberId}`
	},
	USERS: {
		BASE: BASE_PATHS.USERS,
		LIST: BASE_PATHS.USERS,
		ME: `${BASE_PATHS.USERS}/me`
	},
	CONTACTS: {
		BASE: BASE_PATHS.CONTACTS,
		LIST: BASE_PATHS.CONTACTS,
		IMPORT: `${BASE_PATHS.CONTACTS}/import`,
		DETAILS: (contactId: string) => `${BASE_PATHS.CONTACTS}/${contactId}`,
		TAGS: (contactId: string) => `${BASE_PATHS.CONTACTS}/${contactId}/tags`
	},
	MESSAGES: {
		BASE: BASE_PATHS.MESSAGES,
		EXPECTED_CONTACTS: `${BASE_PATHS.MESSAGES}/campaigns/expected-contacts`
	},
	CONVERSATIONS: {
		BASE: BASE_PATHS.CONVERSATIONS,
		LIST: BASE_PATHS.CONVERSATIONS,
		DETAILS: (contactId: string) => `${BASE_PATHS.MESSAGES}/${contactId}/conversations`
	},
	TEMPLATES: {
		BASE: BASE_PATHS.TEMPLATES,
		LIST: BASE_PATHS.TEMPLATES,
		DETAILS: (templateId: string) => `${BASE_PATHS.TEMPLATES}/${templateId}`
	},
	LABELS: {
		BASE: BASE_PATHS.LABELS,
		LIST: BASE_PATHS.LABELS,
		DETAILS: (labelId: string) => `${BASE_PATHS.LABELS}/${labelId}`
	},
	CAMPAIGNS: {
		BASE: BASE_PATHS.CAMPAIGNS,
		LIST: BASE_PATHS.CAMPAIGNS,
		DETAILS: (campaignId: string) => `${BASE_PATHS.CAMPAIGNS}/${campaignId}/detail`
	},
	STORAGE: {
		PRE_SIGNED_URL: `${BASE_PATHS.STORAGE}/pre-signed-url`,
		FOLDERS: BASE_PATHS.FOLDERS,
		GALLERY_ASSETS: `${BASE_PATHS.FOLDERS}/items`
	}
};
