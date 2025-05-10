export enum MessageType {
	text = 'text', // for text messages.
	image = 'image', // for image messages.
	video = 'video', // for video messages
	audio = 'audio', // for audio messages.
	document = 'document', // for document messages.
	template = 'template', // for template messages. Text and media (images and documents) message templates are supported.

	// contacts = 'contacts', // for contact messages.
	interactive = 'interactive', // for list and reply button messages.
	// location = 'location', // for location messages.
	reaction = 'reaction', // for reaction messages.
	sticker = 'sticker', // for sticker messages.
	order = 'order'
}

export enum MessageDirection {
	incoming = 'incoming',
	outgoing = 'outgoing'
}

export enum MessageStatus {
	read = 'read',
	delivered = 'delivered',
	sent = 'sent',
	accepted = 'accepted',
	received = 'received',

	// error
	failed = 'failed',
	undelivered = 'undelivered',
	rejected = 'rejected'
}

export enum GalleryItemType {
	image = 'image',
	video = 'video',
	audio = 'audio',
	document = 'document'
}

export enum CampaignAudienceType {
	All = 'all',
	CustomerServiceWindowOpen = 'cswo'
}

export enum SentMessageType {
	private = 'private',
	campaign = 'campaign'
}

export enum ConversationFilterType {
	all = 'all',
	unread = 'unread',
	campaign = 'campaign'
}

export enum CampaignStatus {
	inProgress = 'inProgress',
	completed = 'completed'
}

export enum OrderType {
	ASC = 'ASC',
	DESC = 'DESC'
}
