import isEmpty from 'lodash/isEmpty';
import queryString from 'query-string';
import { toast } from 'react-toastify';

import { audioExtensions, imageExtensions, linkRegex, videoExtensions } from '@/shared/constants';
import { MessageType } from '@/types/enum';

export function extractLinks(text: string) {
	const links = text?.match(linkRegex) as string[];
	return links || [];
}

export function isVideoFile(file: string) {
	return videoExtensions.some((ext) => file.toLocaleLowerCase().endsWith(ext));
}

export function isVideoContentType(contentType: string) {
	return contentType?.includes('video');
}

export function isImageFile(file: string) {
	return imageExtensions.some((ext) => file.toLocaleLowerCase().endsWith(ext));
}

export function isImageContentType(contentType: string) {
	return contentType?.includes('image') || contentType?.includes('img');
}

export function isAudioFile(file: string) {
	return audioExtensions.some((ext) => file.toLocaleLowerCase().endsWith(ext));
}

export function isAudioContentType(contentType: string) {
	return contentType?.includes('audio');
}

export function getMessageType(type: string) {
	if (type.includes(MessageType.audio)) {
		return MessageType.audio;
	} else if (type.includes(MessageType.video)) {
		return MessageType.video;
	} else if (type.includes(MessageType.image)) {
		return MessageType.image;
	} else {
		return MessageType.document;
	}
}

export const downloadFile = async (url: string, filename: string) => {
	try {
		const response = await fetch(url);
		const blob = await response.blob();
		const link = document.createElement('a');
		link.href = URL.createObjectURL(blob);
		link.download = filename;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		URL.revokeObjectURL(link.href); // Clean up
	} catch (error) {
		console.error('Error downloading file:', error);
	}
};

export const copyToClipboard = async (text: string) => {
	await navigator.clipboard.writeText(text);
	toast.success('Copied to clipboard', {
		position: 'top-right',
		autoClose: 5000,
		closeOnClick: true,
		pauseOnHover: true,
		theme: 'light'
	});
};

export const getUrl = (url: string, params: any = {}): string => {
	if (isEmpty(params)) return url;

	Object.keys(params).forEach((key) => (params[key] == null || params[key] === '') && delete params[key]);
	return `${url}?${queryString.stringify(params)}`;
};
