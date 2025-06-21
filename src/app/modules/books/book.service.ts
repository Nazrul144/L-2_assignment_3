import { Book } from './book.model';

export const BookService = {
  createBook: async (payload: any) => {
    const book = await Book.create(payload);
    return book;
  },

  getAllBooks: async (options: {
    filter?: string;
    sortBy?: string;
    sort?: 'asc' | 'desc';
    limit?: number;
  }) => {
    const { filter, sortBy, sort, limit } = options;

    const query: any = {};
    if (filter) {
      query.genre = filter;
    }

    const sortCondition: any = {};
    if (sortBy) {
      sortCondition[sortBy] = sort === 'desc' ? -1 : 1;
    }

    const books = await Book.find(query)
      .sort(sortCondition)
      .limit(limit || 10);

    return books;
  },

  getSingleBook: async (id: string) => {
    return await Book.findById(id);
  },

  updateBook: async (id: string, payload: any) => {
    return await Book.findByIdAndUpdate(id, payload, { new: true });
  },

  deleteBook: async (id: string) => {
    await Book.findByIdAndDelete(id);
  },
};
