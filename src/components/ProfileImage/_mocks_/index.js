/**
 * @file Profile image mocks.
 * @copyright IBM Security 2019
 */

import { className } from '../../_mocks_';
import { profile } from '../../Header/_mocks_';

const imageUrl = 'http://via.placeholder.com/160x160';

const profileWithImage = Object.assign({}, profile, {
  image_url: imageUrl,
});

const large = true;

export { className, large, profile, profileWithImage };
