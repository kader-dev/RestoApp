import { User } from './../../server/models/user.schema';
import { Item } from './../../server/models/item.schema';

import { Document } from 'mongoose';

export interface Category extends Document {

    name: string;
    items: Item[];
    user: User;

}