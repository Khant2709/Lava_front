export interface ArticleModel {
    id: number;
    title: string;
    category: 'news' | 'tips' | 'events';
    short_description: string;
    modified_at: Date;
    time_to_read: number;
}