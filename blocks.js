import fs from 'fs';
import _ from './lodash';

const data = fs.readFileSync('./dict.txt').toString().split("\n");
const dict = _.indexBy(_.map(data, word => word.toLowerCase()));
let keyed = {};
_.map(dict, word => {
  const chars = word.split('').sort().join('');
  if (!keyed[chars]) keyed[chars] = [];
  keyed[chars].push(word);
});

class Block {
  constructor(letters) {
    this.chars = letters.split('');
    this.chars.push('');
  }
  words(prefix) {
    return _.map(this.chars, ch => `${prefix}${ch}`);
  }
}

function make_combos (block_set) {
  const recurse = (prefix, blocks) => {
    if (blocks.length === 1) {
      return blocks[0].words(prefix);
    }
    const others = blocks.slice(1);
    return _.flatten(_.map(blocks[0].chars, (ch) => {
      return recurse(`${prefix}${ch}`, others);
    }));
  };
  const all_combos = recurse('', block_set);
  const filtered = _.filter(all_combos);
  const hashed = _.map(filtered, word => word.split('').sort().join(''));
  return _.uniq(hashed);
}

const blocks = _.map(_.drop(process.argv, 2), chars => new Block(chars));
const combos = make_combos(blocks);
const words = _.flatten(_.filter(_.map(combos, word => keyed[word]))).sort();
words.forEach(word => console.log(word));
