/**
 * @file Gulp configuration.
 * @copyright IBM Security 2019
 */

import gulp from 'gulp';
import del from 'del';

// Path configuration.
import { paths } from './config';

//--------------
// Clean task
//--------------

// Clean the distribution directory.
gulp.task('clean', () =>
  del(Object.keys(paths.dist).map((path) => paths.dist[path]))
);

//--------------
// SCSS tasks
//--------------

// Copy SCSS into distribution directory.
gulp.task('copy:scss', () =>
  gulp.src(paths.src.files.scss).pipe(gulp.dest(paths.dist.scss))
);
