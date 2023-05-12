import {ObjectFieldType, Reference, SanityDocument, Slug} from '@sanity/types';


export interface Page extends SanityDocument {
	_type: 'page';
	slug: Slug;
	title: string;
}


