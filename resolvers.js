import Note from './models/note';

//created a root Query that returned all the notes.
export const resolvers = {
    Query : {
        async allNotes() {
            return await Note.find()
        }
    }
};