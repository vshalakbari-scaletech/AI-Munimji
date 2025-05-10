import { Options } from '@/types';
import { CampaignAudienceType } from '@/types/enum';

export const videoExtensions = [
	'.mpg',
	'_mpg',
	'.mp2',
	'_mp2',
	'.mpeg',
	'_mpeg',
	'.mpe',
	'_mpe',
	'.mpv',
	'_mpv',
	'.mp4',
	'_mp4',
	'.mov',
	'_mov'
];

export const imageExtensions = ['.jpeg', '_jpeg', '.jpg', '_jpg', '.gif', '_gif', '.png', '_png'];

export const audioExtensions = ['.mp3', '_mp3', '.wav', '_wav', '.ogg', '_ogg', '.flac', '_flac'];

export const linkRegex = /((?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?(?:\/[^\s]*)?)/gi;
export const urlInMessageRegex =
	/\b(?!(?:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}))[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+(?:\/[^\s]*)?\b/gi;

export const waPhoneNumberId = '580131545175988';
export const waPhoneNumber = '+19169999926';

export const apiIntervalTimer = 3000;

export const DefaultPageLimit = 10;

export const targetAudienceOptions: Options[] = [
	{ label: 'All', value: CampaignAudienceType.All },
	{ label: 'Customer service window open', value: CampaignAudienceType.CustomerServiceWindowOpen }
];

export const TEMPLATE_CATEGORIES = [
	{ value: 'Marketing', label: 'Marketing' },
	{ value: 'Utility', label: 'Utility' },
	{ value: 'Authentication', label: 'Authentication' }
];

export const TEMPLATE_TYPES = [
	{ value: 'text', label: 'TEXT' },
	{ value: 'image', label: 'IMAGE' },
	{ value: 'video', label: 'VIDEO' },
	{ value: 'document', label: 'DOCUMENT' },
	{ value: 'location', label: 'LOCATION' },
	{ value: 'carousel', label: 'CAROUSEL' },
	{ value: 'limited_time_offer', label: 'LIMITED TIME OFFER' }
];

export const INTERACTIVE_ACTIONS = [
	{ value: 'none', label: 'None' },
	{ value: 'callToActions', label: 'Call to Actions' },
	{ value: 'quickReplies', label: 'Quick Replies' },
	{ value: 'all', label: 'All' }
];
