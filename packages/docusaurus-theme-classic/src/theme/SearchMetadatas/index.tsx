/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Head from '@docusaurus/Head';

type SearchTagMetaProps = {
  language?: string;
  version?: string;
  tag?: string;
};

// Note: we don't couple this to Algolia/DocSearch on purpose
// We may want to support other search engine plugins too
// Search plugins should swizzle/override this comp to add their behavior
export default function SearchMetadatas({
  language,
  version,
  tag,
}: SearchTagMetaProps) {
  return (
    <Head>
      {language && <meta name="docusaurus_language" content={`${language}`} />}
      {version && <meta name="docusaurus_version" content={version} />}
      {tag && <meta name="docusaurus_tag" content={tag} />}
    </Head>
  );
}
