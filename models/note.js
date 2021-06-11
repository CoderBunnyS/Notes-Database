//define the schema
import { TransformQuery } from '@graphql-tools/wrap';
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//note entry needs to have both a title and its content - required: true. Date is automatic
const NoteSchema = new Schema ({
    title : {
        type: String, 
        required: true
    },
    content: {
        type: String, 
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('note', NoteSchema);