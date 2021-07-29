// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// document schemas
import author from './documents/author';
import category from './documents/category';
import post from './documents/post';
import project from './documents/project';
import technology from './documents/technology';

// object schemas
import bodyPortableText from './objects/bodyPortableText';
import codeBlock from './objects/codeBlock';
import excerptPortableText from './objects/excerptPortableText';
import projectPortableText from './objects/projectPortableText';
import figure from './objects/figure';
import logo from './objects/logo';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'portfolio',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    author,
    category,
    post,
    project,
    technology,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    bodyPortableText,
    codeBlock,
    excerptPortableText,
    projectPortableText,
    figure,
    logo,
  ]),
});
