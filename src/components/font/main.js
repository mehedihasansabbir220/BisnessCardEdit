/* eslint-disable prefer-rest-params */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

const _extends = Object.assign || function(target) {
  for (let i = 1; i < arguments.length; i++) {
    const source = arguments[i]; for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  } return target;
};

const _fs = require('fs');

const _fs2 = _interopRequireDefault(_fs);

const _path = require('path');

const _path2 = _interopRequireDefault(_path);

const _ttfinfo = require('ttfinfo');

const _ttfinfo2 = _interopRequireDefault(_ttfinfo);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  } return obj;
}

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    } return arr2;
  } else {
    return Array.from(arr);
  }
}

const getPlatform = function getPlatform() {
  return process.platform === 'darwin' ? 'osx' : /win/.test(process.platform) ? 'windows' : 'linux';
};

const recGetFile = function recGetFile(target) {
  let stats = void 0;
  try {
    stats = _fs2.default.statSync(target);
  } catch (e) {
    // console.error(e);
    return [];
  }
  if (stats.isDirectory()) {
    let files = void 0;
    try {
      files = _fs2.default.readdirSync(target);
    } catch (e) {
      console.error(e);
    }
    return files.reduce(function(arr, f) {
      return arr.concat(recGetFile(_path2.default.join(target, f)));
    }, []);
  } else {
    const ext = _path2.default.extname(target).toLowerCase();
    if (ext === '.ttf' || ext === '.otf' || ext === '.ttc' || ext === '.dfont') {
      return [target];
    } else {
      return [];
    }
  }
};

const filterReadableFonts = function filterReadableFonts(arr) {
  return arr.filter(function(f) {
    const extension = _path2.default.extname(f).toLowerCase();
    return extension === '.ttf' || extension === '.otf';
  });
};

const tableToObj = function tableToObj(obj, file, systemFont) {
  return {
    family: obj['1'],
    subFamily: obj['2'],
    postscript: obj['6'],
    file: file,
    systemFont: systemFont,
  };
};

const extendedReducer = function extendedReducer(m, _ref) {
  const family = _ref.family;
  const subFamily = _ref.subFamily;
  const file = _ref.file;
  const postscript = _ref.postscript;
  const systemFont = _ref.systemFont;

  if (m.has(family)) {
    const origFont = m.get(family);
    return m.set(family, _extends({}, origFont, {
      systemFont: origFont.systemFont === false ? false : systemFont,
      subFamilies: [].concat(_toConsumableArray(origFont.subFamilies), [subFamily]),
      files: _extends({}, origFont.files, _defineProperty({}, subFamily, file)),
      postscriptNames: _extends({}, origFont.postscriptNames, _defineProperty({}, subFamily, postscript)),
    }));
  } else {
    return m.set(family, {
      family: family,
      systemFont: systemFont,
      subFamilies: [subFamily],
      files: _defineProperty({}, subFamily, file),
      postscriptNames: _defineProperty({}, subFamily, postscript),
    });
  }
};

const SystemFonts = function SystemFonts() {
  const _this = this;

  const options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const _options$ignoreSystem = options.ignoreSystemFonts;
  const ignoreSystemFonts = _options$ignoreSystem === undefined ? false : _options$ignoreSystem;
  const _options$customDirs = options.customDirs;
  const customDirs = _options$customDirs === undefined ? [] : _options$customDirs;


  if (!Array.isArray(customDirs)) {
    throw new Error('customDirs must be an array of folder path strings');
  }

  const customDirSet = new Set(customDirs);
  const customFontFiles = new Set();

  const getFontFiles = function getFontFiles() {
    let directories = [];

    if (customDirs.length > 0) {
      directories = [].concat(_toConsumableArray(customDirs));
    }

    const platform = getPlatform();
    if (platform === 'osx') {
      const home = process.env.HOME;
      directories = [].concat(_toConsumableArray(directories), [_path2.default.join(home, 'Library', 'Fonts'), _path2.default.join('/', 'Library', 'Fonts'), _path2.default.join('/', 'System', 'Library', 'Fonts')]);
    } else if (platform === 'windows') {
      const winDir = process.env.windir || process.env.WINDIR;
      directories = [].concat(_toConsumableArray(directories), [_path2.default.join(winDir, 'Fonts')]);
    } else {
      // some flavor of Linux, most likely
      const _home = process.env.HOME;
      directories = [].concat(_toConsumableArray(directories), [_path2.default.join(_home, '.fonts'), _path2.default.join(_home, '.local', 'share', 'fonts'), _path2.default.join('/', 'usr', 'share', 'fonts'), _path2.default.join('/', 'usr', 'local', 'share', 'fonts')]);
    }

    return directories.reduce(function(arr, d) {
      const files = recGetFile(d);
      if (customDirSet.has(d)) {
        files.forEach(function(f) {
          return customFontFiles.add(f);
        });
      }
      return arr.concat(files);
    }, []);
  };

  const allFontFiles = getFontFiles();

  // this list includes all TTF, OTF, OTC, and DFONT files
  this.getAllFontFilesSync = function() {
    return [].concat(_toConsumableArray(allFontFiles));
  };

  const fontFiles = filterReadableFonts(allFontFiles);

  // this list includes all TTF and OTF files (these are the ones we parse in this lib)
  this.getFontFilesSync = function() {
    return [].concat(_toConsumableArray(fontFiles));
  };

  this.getFontsExtended = function() {
    return new Promise(function(resolve, reject) {
      const promiseList = [];

      const filteredFontFiles = !ignoreSystemFonts ? [].concat(_toConsumableArray(fontFiles)) : fontFiles.filter(function(f) {
        return customFontFiles.has(f);
      });

      filteredFontFiles.forEach(function(file, i) {
        promiseList.push(new Promise(function(resolve1) {
          _ttfinfo2.default.get(file, function(err, fontMeta) {
            if (!fontMeta) {
              resolve1(null);
            } else {
              resolve1(tableToObj(fontMeta.tables.name, file, !customFontFiles.has(file)));
            }
          });
        }));
      });
      Promise.all(promiseList).then(function(res) {
        const names = res.filter(function(data) {
          return data ? true : false;
        }).reduce(extendedReducer, new Map());

        const namesArr = [].concat(_toConsumableArray(names.values())).sort(function(a, b) {
          return a.family.localeCompare(b.family);
        });

        resolve(namesArr);
      }, function(err) {
        return reject(err);
      });
    });
  };

  this.getFontsExtendedSync = function() {
    const filteredFontFiles = !ignoreSystemFonts ? [].concat(_toConsumableArray(fontFiles)) : fontFiles.filter(function(f) {
      return customFontFiles.has(f);
    });

    const names = filteredFontFiles.reduce(function(arr, file) {
      let data = void 0;
      try {
        data = _ttfinfo2.default.getSync(file);
      } catch (e) {
        return arr;
      }
      return arr.concat([tableToObj(data.tables.name, file, !customFontFiles.has(file))]);
    }, []).filter(function(data) {
      return data ? true : false;
    }).reduce(extendedReducer, new Map());

    const namesArr = [].concat(_toConsumableArray(names.values())).sort(function(a, b) {
      return a.family.localeCompare(b.family);
    });

    return namesArr;
  };

  this.getFonts = function() {
    return new Promise(function(resolve, reject) {
      _this.getFontsExtended().then(function(fontList) {
        const names = fontList.map(function(_ref2) {
          const family = _ref2.family;
          return family;
        }).reduce(function(obj, name) {
          obj[name] = 1;
          return obj;
        }, {});
        resolve(Object.keys(names).sort(function(a, b) {
          return a.localeCompare(b);
        }));
      }).catch(function(err) {
        return reject(err);
      });
    });
  };

  this.getFontsSync = function() {
    const names = _this.getFontsExtendedSync().map(function(_ref3) {
      const family = _ref3.family;
      return family;
    }).reduce(function(obj, name) {
      obj[name] = 1;
      return obj;
    }, {});
    return Object.keys(names).sort(function(a, b) {
      return a.localeCompare(b);
    });
  };
};

exports.default = SystemFonts;
