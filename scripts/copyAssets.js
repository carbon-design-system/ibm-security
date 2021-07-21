/**
 * @file copyAssets.js
 * @description Copy static assets from src to their respective build target dir (cjs and es)
 */

/* eslint-disable */
const globby = require('globby');
const path = require('path');
const fs = require('fs-extra');
const assetExtensions = require('./assetExtensions');

const sourcePath = path.resolve(__dirname, '../src');
const cjsPath = path.resolve(__dirname, '../lib');
const esPath = path.resolve(__dirname, '../es');

/**
 * create globs for all file extensions given in ./assetExtensions.json
 */
const globs = assetExtensions.map((ext) =>
  path.resolve(sourcePath, '**', `*.${ext}`)
);

/**
 * Takes care to copy static asserts defined by an array of globs
 * @param {string[]} globs - the globs that should be copied over to their build destination
 * @returns {Promise<[any, any, any, any, any, any, any, any, any, any]>} resolves after copying the file - can be ignored
 */
const copyAssets = async (globs) => {
  const paths = await globby(globs);
  const copyJobs = paths.reduce((copyJobs, nextPath) => {
    const relativePath = path.relative(sourcePath, nextPath);
    const cjsFilePath = path.resolve(cjsPath, relativePath);
    const esFilePath = path.resolve(esPath, relativePath);
    copyJobs.push(
      fs
        .ensureDir(path.parse(cjsFilePath).dir)
        .then(fs.copy(nextPath, cjsFilePath))
    );
    copyJobs.push(
      fs
        .ensureDir(path.parse(cjsFilePath).dir)
        .then(fs.copy(nextPath, esFilePath))
    );
    return copyJobs;
  }, []);
  return Promise.all(copyJobs);
};

/**
 * Executes copy job.
 */
copyAssets(globs);
