export type FormDataType = {
	assesment_title: string;
	assesment_description: string;
	start_date: Date | null;
	startTime: string;
	maxParticipants: number;
	duration: number;
	isLive: boolean;
};

export interface Question {
	id: string;
	type: 'text' | 'mcq' | 'single' | 'multi' | 'code';
	text: string;
	options?: string[];
	correctAnswers?: string[];
	language?: string;
}
