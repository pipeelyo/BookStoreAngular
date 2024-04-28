export interface BookInterface {
    bookId?: number;
    title: string;
    description: string;
    authorId: number;
    publicationDate?: Date;
    publisher: string;
}